import { loginSchema } from '@/Schemas';
import * as zod from 'zod';

export async function onSubmit(values: zod.infer<typeof loginSchema>) {
	const validateFields = loginSchema.safeParse(values);

	if (!validateFields.success) {
        console.log("hi")
		return { error: 'Incorrect' };
	} else {
		console.log(validateFields);
	}
    
}