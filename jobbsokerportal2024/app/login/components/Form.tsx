'use client';
import { onSubmit } from '@/lib/loginSubmit';
import { loginForm } from '@/lib/loginForm';
import { useState } from 'react';

export default function PageForm() {
	const { form } = loginForm();
	const { register, handleSubmit } = form;

	return (
		<div className=''>
			<form
				{...form}
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-nowrap gap-4'
			>
				<input
					{...form}
					className='border-2 border-solid border-black'
					placeholder='Brukernavn'
					{...register('username')}
				/>
				<input
					{...form}
					className='border-2 border-solid border-black'
					placeholder='Passord'
					type='password'
					{...register('password')}
				/>
				<button className='border-2 border-solid border-black' type='submit'>
					login
				</button>
			</form>
		</div>
	);
}
