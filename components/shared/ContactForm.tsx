"use client";
import { ArrowRight } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";

const formSchema = z.object({
  fullName: z.string().min(3, {
    message: "First Name must be at least 3 characters.",
  }),
  email: z.string().email(),
  phoneNumber: z.string().min(10, {
    message: "Phone Number must be at least 10 characters.",
  }),
  city: z.string().min(3, {
    message: "City must be at least 3 characters.",
  }),
  yourMessage: z.string().min(15),
});

export function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      city: "",
      yourMessage: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Form Submitted Successfully.",
      className:
        "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-background text-white",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="mb-8 basis-full space-y-0 lg:basis-1/2 lg:pr-4">
              <FormControl>
                <Input
                  placeholder="Full Name"
                  {...field}
                  className="h-12 w-full rounded-3xl border-2 border-primary-headline bg-transparent px-4 py-2 font-bold placeholder:font-poppins placeholder:text-sm placeholder:font-normal focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-8 basis-full space-y-0 lg:basis-1/2 lg:pl-4">
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email Address"
                  {...field}
                  className="h-12 w-full rounded-3xl border-2 border-primary-headline bg-transparent px-4 py-2 font-bold placeholder:font-poppins placeholder:text-sm placeholder:font-normal focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem className="mb-8 basis-full space-y-0 lg:basis-1/2 lg:pr-4">
              <FormControl>
                <Input
                  placeholder="Phone Number"
                  {...field}
                  className="h-12 w-full rounded-3xl border-2 border-primary-headline bg-transparent px-4 py-2 font-bold placeholder:font-poppins placeholder:text-sm placeholder:font-normal focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="mb-8 basis-full space-y-0 lg:basis-1/2 lg:pl-4">
              <FormControl>
                <Input
                  placeholder="City"
                  {...field}
                  className="h-12 w-full rounded-3xl border-2 border-primary-headline bg-transparent px-4 py-2 font-bold placeholder:font-poppins placeholder:text-sm placeholder:font-normal focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="yourMessage"
          render={({ field }) => (
            <FormItem className="mb-8 basis-full space-y-0">
              <FormControl>
                <Textarea
                  placeholder="Enter Message"
                  {...field}
                  className="h-32  w-full resize-none rounded-3xl border-2 border-primary-headline bg-transparent px-4 py-3 font-bold placeholder:text-base placeholder:font-normal focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className='relative inline-block h-[58px] overflow-hidden bg-primary py-4 pe-20 ps-5 text-base font-medium text-white transition-all before:absolute before:right-[-12px] before:top-0 before:h-full before:w-[75px] before:skew-x-[-20deg] before:bg-secondary before:content-[""] hover:bg-secondary'
        >
          SUBMIT NOW
          <ArrowRight className="absolute inset-y-0 right-5 m-auto size-5 text-primary" />
        </Button>
      </form>
    </Form>
  );
}
