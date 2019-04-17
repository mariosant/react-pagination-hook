import {createReducer, when} from '@mariosant/imm';
import {
	extractPage,
	getPreviousPage,
	getNextPage,
	getTotalPages,
} from './helpers';

const reducer = createReducer(
	when('FIRST_PAGE', state => {
		const {perPage, data} = state;
		const page = 0;
		const paginated = extractPage(0, perPage, data);

		return {
			...state,
			page,
			paginated,
		};
	}),
	when('LAST_PAGE', state => {
		const {perPage, data} = state;
		const page = getTotalPages(perPage, data);
		const paginated = extractPage(page, perPage, data);

		return {
			...state,
			page,
			paginated,
		};
	}),
	when('NEXT_PAGE', state => {
		const {data, perPage} = state;
		const page = getNextPage(state.page, perPage, data);
		const paginated = extractPage(page, perPage, data);

		return {
			...state,
			page,
			paginated,
		};
	}),
	when('PREVIOUS_PAGE', state => {
		const page = getPreviousPage(state.page);
		const {data, perPage} = state;
		const paginated = extractPage(page, perPage, data);

		return {
			...state,
			page,
			paginated,
		};
	}),
	when('PER_PAGE', (state, {payload: perPage}) => {
		const {data} = state;
		const page = Math.min(state.page, getTotalPages(perPage, data));
		const paginated = extractPage(page, perPage, data);

		return {
			...state,
			perPage,
			page,
			paginated,
		};
	}),
);

export default reducer;
