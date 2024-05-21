"use client";

import React, { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
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
import { CreateApplicationSchema } from "@/Schemas/index";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { CreateApplication } from "@/actions/Application";

export default function ApplicationForm() {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const [date, setDate] = useState<Date | undefined>();

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
              Fyll inn relevant informasjon om utlysningen
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className='grid gap-4 py-4'>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label className='text-right'>Stilling</Label>
                  <FormField
                    control={form.control}
                    name='Stilling'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder='It Lærling Norsk Helsenett'
                            className='col-span-3'
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='grid grid-cols-4 items-baseline gap-4'>
                  <Label className='text-right'>Beskrivelse</Label>
                  <FormField
                    control={form.control}
                    name='beskrivelse'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder='Beskrivelse av stilling'
                            className='col-span-3 max-h-[100px]'
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
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
                  <FormField
                    control={form.control}
                    name='picture'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder='url'
                            className='w-full'
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label className='text-right' htmlFor='stillingstittel'>
                    Stillingstittel
                  </Label>
                  <FormField
                    control={form.control}
                    name='stillingstittel'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={(value) =>
                              form.setValue("stillingstittel", value)
                            }
                          >
                            <SelectTrigger className='w-[180px]'>
                              <SelectValue placeholder='Stillingstittel' />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value='DriftsLerling'>
                                Drifts Lærling
                              </SelectItem>
                              <SelectItem value='UtviklerLerling'>
                                Utvikler Lærling
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              {success && (
                <p className='p-2 bg-green-900 text-white rounded-lg mt-3'>
                  {success}
                </p>
              )}
              {error && (
                <p className='p-2 bg-red-900 text-white rounded-lg'>{error}</p>
              )}
              <DialogFooter>
                <Button type='submit'>Lagre endringer</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
