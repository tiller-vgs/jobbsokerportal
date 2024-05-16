import React from 'react';

export default function JobComponent(props: JobComponentProps) {
	return (
		<div className='bg-white rounded-xl flex-colum justify-between pb-10 m-3 mt-5'>
			<h1 className='text-5xl'>{props.Title}</h1>
			<p className='mt-5 ml-5'>{props.Desc}</p>

			<div className='text-center -mt-10'>
				<p>{props.Tag}</p>
			</div>

			<div className='text-end -mt-5 mr-5'>
				<p className='self-end'>{props.date}</p>
			</div>
		</div>
	);
}
