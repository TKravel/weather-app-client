import { rest } from 'msw';
import { data } from './mockData';

export const handlers = [
	rest.post(
		'https://glacial-garden-65748.herokuapp.com/getData',
		(req, res, ctx) => {
			return res(ctx.json(data));
		}
	),
];
