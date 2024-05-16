import React from 'react';

export default function JobComponent(props: JobComponentProps) {
	return (
		<div className='bg-white rounded-sm flex-colum justify-between'>
			<h1 className='text-5xl'>{props.Title}</h1>
			<p className='mt-5 ml-5'>{props.Desc}</p>
			<div className='self-center'>
				<p>{props.Tag}</p>
			</div>

			<p className='self-end'>{props.date}</p>
		</div>
	);
}
