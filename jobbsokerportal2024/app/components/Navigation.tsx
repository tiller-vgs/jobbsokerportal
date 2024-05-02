import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import React from 'react';

export default function Navigation() {
	return (
		<div className='absolute w-full h-28 bg-lightNavigation shadow-lg flex'>
			<div className='mt-9 ml-9 rounded-full shadow-xl w-96 h-10 bg-white'>
				<input className='outline-none ml-10 mt-2 w-80' placeholder='Søk' />
			</div>

			<DropdownMenu>
				<DropdownMenuTrigger className='inline-flex items-center justify-center text-sm bg-white h-10 w-20 ml-5 mt-9 rounded-full outline-none text-blueMain shadow-lg hover:bg-blueMain hover:text-white'>
					{/* <Button variant='default'>Filtrer</Button> */}
					Filtrer
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>nåkka artig</DropdownMenuLabel>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
