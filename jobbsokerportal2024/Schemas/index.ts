import * as zod from 'zod';

export const loginSchema = zod.object({
	username: zod.string().min(4, {
		message: 'Incorrect',
	}),
	password: zod.string().min(4, {
		message: 'Incorrect',
	}),
});
