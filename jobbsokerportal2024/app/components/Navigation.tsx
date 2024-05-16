import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import filterIcon from "@/public/icons/blue/filter.png";
import searchIcon from "@/public/icons/blue/search.png";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

export default function Navigation() {
  return (
    <div className='absolute w-full h-28 bg-lightNavigation shadow-lg flex'>
      <div className='mt-9 ml-9 rounded-full shadow-lg w-96 h-10 bg-white'>
        <span>
          <Image
            src={searchIcon}
            alt='Søk'
            className='w-[2.5vh] ml-5 mt-[1.5vh] float-left'
          />
        </span>
        <input
          className='outline-none mt-2 mr-3 w-80 float-right'
          placeholder='Søk'
        />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className='inline-flex items-center justify-center text-sm bg-white h-10 w-[12.5vh] pl-1 ml-5 mt-9 rounded-full outline-none shadow-lg'>
          Filtrer
          <span>
            <Image
              src={filterIcon}
              alt='Filtrer'
              className='w-[2.5vh] ml-1 mt-[0.2vh]'
            />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <DropdownMenuLabel>Filtrer</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder='Sorter &nbsp;' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='Alfabet'>Sorter: Alfabet &nbsp;</SelectItem>
          <SelectItem value='frist-lengst'>
            Sorter: Frist (lengst) &nbsp;
          </SelectItem>
          <SelectItem value='frist-kortest'>
            Sorter: Frist (kortest) &nbsp;
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
