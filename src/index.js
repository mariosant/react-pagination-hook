import {useReducer} from 'react';
import {
	firstPage,
	lastPage,
	nextPage,
	previousPage,
	gotoPage,
	setPerPage,
	setData
} from './actions';
import reducer from './reducer';
import {extractPage} from './helpers';

const usePagination = (data = [], opts) => {
	const {perPage, page} = {
		page: 0,
		perPage: 10,
		...opts,
	};
	const [state, dispatch] = useReducer(reducer, {
		data,
		page,
		perPage,
		paginated: extractPage(page, perPage, data),
	});

	return {
		firstPage: () => dispatch(firstPage()),
		lastPage: () => dispatch(lastPage()),
		nextPage: () => dispatch(nextPage()),
		previousPage: () => dispatch(previousPage()),
		gotoPage: v => dispatch(gotoPage(v)),
		setPerPage: v => dispatch(setPerPage(v)),
		setData: v => dispatch(setData(v)),
		totalPages: Math.ceil(data.length / state.perPage),
		paginated: state.paginated,
		page: state.page + 1,
		perPage: state.perPage,
	};
};

export default usePagination;
