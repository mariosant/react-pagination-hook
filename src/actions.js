import {createAction} from '@mariosant/imm';

export const firstPage = createAction('FIRST_PAGE');
export const lastPage = createAction('LAST_PAGE');
export const nextPage = createAction('NEXT_PAGE');
export const previousPage = createAction('PREVIOUS_PAGE');
export const gotoPage = createAction('GOTO_PAGE');
export const setPerPage = createAction('PER_PAGE');
export const setData = createAction('SET_DATA');
