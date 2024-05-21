import React from 'react';
import JobComponent from './JobComponent';

export default function JobListingDiv() {
	return (
		<div className='translate-y-32 h-screen overflow-auto'>
			<h1 className='text-2xl text-center'>AVAILABLE POSITIONS</h1>
			<div className='h-[70vh] overflow-auto m-4 border-solid border-2 border-b-gray-500 z-100	'>
				<JobComponent
					Title='Placeholder Title'
					Desc='Placeholder Description'
					Tag='Placeholder Tag'
					date='OOOOOOO'
					bilde='Placeholder Picture'
				/>
			</div>

			<h1 className='mt-5 text-2xl text-center'>UNAVAILABE POSITIONS</h1>
			<div className='h-[70vh] overflow-auto m-4'>
				<JobComponent
					Title='Placeholder Title'
					Desc='Placeholder Description'
					Tag='Placeholder Tag'
					date='OOOOOOO'
					bilde='Placeholder Picture'
				/>
			</div>
		</div>
	);
}
