"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CreateApplicationSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useState, useTransition } from "react";
import { CreateApplication } from "@/actions/Application";

export default function () {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [isPending, startTransition] = useTransition();
  const [date, setDate] = React.useState<Date>();
  const form = useForm({
    resolver: zodResolver(CreateApplicationSchema),
    defaultValues: {
      Stilling: "",
      beskrivelse: "",
      utlopsdato: "",
      picture: "",
      stillingstittel: "",
    },
  });

  const onSubmit = (values) => {
    startTransition(() => {
      CreateApplication(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Legg til en ny utlysning</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[700px]'>
          <DialogHeader>
            <DialogTitle>Utlysninger</DialogTitle>
            <DialogDescription>
              Fyll inn relevant information om utlysningen
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label className='text-right'>Stilling</Label>
              <Input
                id='Stillingstittel'
                placeholder='It Lærling Norsk Helsenett'
                className='col-span-3'
              />
            </div>
            <div className='grid grid-cols-4 items-baseline gap-4'>
              <Label className='text-right'>Beskrivelse</Label>
              <Textarea
                placeholder='Beskrivelse av stilling'
                className='col-span-3 max-h-[100px]'
                id='beskrivelse'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label className='text-right'>Utløpsdato</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className='mr-2 h-4 w-4' />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0'>
                  <Calendar
                    mode='single'
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className='w-auto p-0'
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label className='text-right' htmlFor='picture'>
                Picture
              </Label>
              <Input id='picture' placeholder='url' className='w-full' />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label className='text-right' htmlFor='stillingstittel'>
                Stillingstittel
              </Label>
              <Select>
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Stillingstittel' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='DriftsLerling'>Drifts Lærling</SelectItem>
                  <SelectItem value='UtviklerLerling'>
                    Utvikler Lærling
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='grid gap-4 py-4'></div>
          <DialogFooter>
            <Button type='submit'>Lagre endringer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
