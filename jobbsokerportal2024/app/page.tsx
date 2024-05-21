import Image from 'next/image';
import Navigation from './components/Navigation';
import JobListingDiv from './components/JobListingDiv';

export default function Home() {
	return (
		<>
			<Navigation />
			<JobListingDiv />
		</>
	);
}
