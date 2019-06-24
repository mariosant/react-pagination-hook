import React from 'react';
import {fake} from 'faker';
import usePagination from '../src';

const sampleData = [...new Array(78)].map((o, i) =>
	fake(`${i} {{name.lastName}}, {{name.firstName}} {{name.suffix}}`),
);

const Component = () => {
	const {
		nextPage,
		previousPage,
		paginated,
		page,
		gotoPage,
		totalPages,
		firstPage,
		lastPage,
		setPerPage,
	} = usePagination(sampleData);

	return (
		<div>
			{paginated.map(p => (
				<div key={p}>{p}</div>
			))}

			<div>Current page: {page}</div>
			<div>Total pages: {totalPages}</div>
			<button type="button" onClick={firstPage}>
				First
			</button>
			<button type="button" onClick={previousPage}>
				Previous
			</button>
			<button type="button" onClick={nextPage}>
				Next
			</button>
			<button type="button" onClick={lastPage}>
				Last
			</button>
			<button type="button" onClick={() => setPerPage(10)}>
				10 per page
			</button>
			<button type="button" onClick={() => setPerPage(20)}>
				20 per page
			</button>
			<button type="button" onClick={() => gotoPage(3)}>
				Goto to page 3
			</button>
		</div>
	);
};

export default Component;
