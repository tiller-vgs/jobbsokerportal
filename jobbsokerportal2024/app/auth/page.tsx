"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas/login";
import {
  Form,
  FormControl,
  FormField,
  FormMessage,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { login } from "@/app/actions/login";

interface FormValues {
  email: string;
  password: string;
}

export default function Login() {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    startTransition(() => {
      login(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br text-white from-slate-900 to-slate-800'>
      <Card className='text-white bg-slate-900 w-[400px]'>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
              <div className='flex flex-col space-y-1.5'>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          className='text-black'
                          id='email'
                          type='email'
                          placeholder='Email'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='flex flex-col space-y-1.5'>
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          className='text-black'
                          type='password'
                          id='password'
                          placeholder='Password'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {success && (
                <p className='p-2 bg-green-900 rounded-lg'>{success}</p>
              )}
              {error && <p className='p-2 bg-red-900 rounded-lg'>{error}</p>}
              <div className='flex gap-3'>
                <Link href='/auth/register'>
                  <Button className='w-full text-black' variant='outline'>
                    Don't have an account?
                  </Button>
                </Link>
                <Button
                  className='w-full'
                  variant='secondary'
                  type='submit'
                  disabled={isPending}
                >
                  Sign in
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
