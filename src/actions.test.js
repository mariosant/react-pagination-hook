import {
	firstPage,
	lastPage,
	nextPage,
	previousPage,
	gotoPage,
	setPerPage,
	setData,
} from './actions';

describe('actions', () => {
	test('firstPage', () => {
		expect(firstPage).toEqual(expect.any(Function));
	});

	test('lastPage', () => {
		expect(lastPage).toEqual(expect.any(Function));
	});

	test('nextPage', () => {
		expect(nextPage).toEqual(expect.any(Function));
	});

	test('previousPage', () => {
		expect(previousPage).toEqual(expect.any(Function));
	});

	test('gotoPage', () => {
		expect(gotoPage).toEqual(expect.any(Function));
	});

	test('setPerPage', () => {
		expect(setPerPage).toEqual(expect.any(Function));
	});
	test('setData', () => {
		expect(setData).toEqual(expect.any(Function));
	});
});
