import R from 'ramda';
import reducer from './reducer';
import * as actions from './actions';

const state = {
	page: 0,
	perPage: 10,
	data: R.map(i => `${i} data`, R.range(0, 100)),
	paginated: R.map(i => `${i} data`, R.range(0, 10)),
};

describe('reducer', () => {
	test('first page', () => {
		expect(reducer({...state, page: 2}, actions.firstPage())).toEqual(
			state,
		);
	});

	test('last page', () => {
		expect(reducer(state, actions.lastPage())).toEqual({
			...state,
			page: 9,
			paginated: R.map(i => `${i} data`, R.range(90, 100)),
		});
	});

	test('next page', () => {
		expect(reducer(state, actions.nextPage())).toEqual({
			...state,
			page: 1,
			paginated: R.map(i => `${i} data`, R.range(10, 20)),
		});
	});

	test('previous page', () => {
		const testState = {
			...state,
			page: 1,
			paginated: R.map(i => `${i} data`, R.range(10, 20)),
		};

		expect(reducer(testState, actions.previousPage())).toEqual({
			...state,
			page: 0,
			paginated: R.map(i => `${i} data`, R.range(0, 10)),
		});
	});

	test('per page', () => {
		expect(reducer(state, actions.setPerPage(20))).toEqual({
			...state,
			page: 0,
			perPage: 20,
			paginated: R.map(i => `${i} data`, R.range(0, 20)),
		});
	});
});
