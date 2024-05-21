'use client';
import { loginSchema } from '@/Schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import * as zod from 'zod';

export const loginForm = function () {
	const form = useForm<zod.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			username: '',
			password: '',
		},
	});
	return { form };
};
