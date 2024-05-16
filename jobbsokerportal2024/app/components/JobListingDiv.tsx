import React from 'react';
import JobComponent from './JobComponent';

export default function JobListingDiv() {
	return (
		<div className='translate-y-32 h-[86vh] bg-slate-400 overflow-auto'>
			<JobComponent
				Title='Placeholder Title'
				Desc='Placeholder Description'
				Tag='Placeholder Tag'
				date='Placeholder  Date'
				bilde='Placeholder Picture'
			/>
		</div>
	);
}
