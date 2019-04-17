const {max, min, ceil} = Math;

export const getTotalPages = (perPage, data) => ceil(data.length / perPage) - 1;

export const getNextPage = (page, perPage, data) =>
	min(Math.ceil(data.length / perPage) - 1, page + 1);

export const getPreviousPage = page => max(0, page - 1);

export const extractPage = (page, perPage, data) => {
	const from = page * perPage;
	const to = (page + 1) * perPage;

	return data.slice(from, to);
};
