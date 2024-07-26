"use client";
import { ArrowRight } from "lucide-react";
import HeadlineWithIcon from "@/components/shared/HeadlineWithIcon";
import SubHeadline from "@/components/shared/SubHeadline";

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
        "top-0 right-0 block fixed md:max-w-[420px] md:top-4 md:right-4 text-center border-primary bg-white text-primary shadow border-2",
    });
  }

  return (
    <div className="container sm:py-24 py-16">
      <div className="flex flex-col items-center pb-9">
        <HeadlineWithIcon title="Send a Message" homeIcon alignment="center" />
        <SubHeadline title="CONTACT US" />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="basis-full space-y-0 pr-0 md:basis-1/2 md:pr-4">
                <FormControl>
                  <label className="mb-7 inline-block w-full text-sm font-bold leading-6 text-secondary">
                    Full Name
                    <br />
                    <input
                      type="text"
                      className="mt-[10px] h-[60px] w-full border-2 border-transparent bg-background-blue px-5 py-[10px] text-base font-normal focus-visible:border-primary focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Enter Name"
                      required
                      {...field}
                    />
                  </label>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="basis-full space-y-0 pl-0 md:basis-1/2 md:pl-4 ">
                <FormControl>
                  <label className="mb-7 inline-block w-full text-sm font-bold leading-6 text-secondary">
                    Email Address
                    <br />
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      className="mt-[10px] h-[60px] w-full border-2 border-transparent bg-background-blue px-5 py-[10px] text-base font-normal focus-visible:border-primary focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      required
                      {...field}
                    />
                  </label>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="basis-full space-y-0 pr-0 md:basis-1/2 md:pr-4">
                <FormControl>
                  <label className="mb-7 inline-block w-full text-sm font-bold leading-6 text-secondary">
                    Phone Number
                    <br />
                    <input
                      type="number"
                      placeholder="Enter Number"
                      className="mt-[10px] h-[60px] w-full border-2 border-transparent bg-background-blue px-5 py-[10px] text-base font-normal focus-visible:border-primary focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      required
                      {...field}
                    />
                  </label>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="basis-full space-y-0 pl-0 md:basis-1/2 md:pl-4">
                <FormControl>
                  <label className="mb-7 inline-block w-full text-sm font-bold leading-6 text-secondary">
                    Subject
                    <br />
                    <input
                      type="text"
                      placeholder="Enter Subject"
                      className="mt-[10px] h-[60px] w-full border-2 border-transparent bg-background-blue px-5 py-[10px] text-base font-normal focus-visible:border-primary focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      required
                      {...field}
                    />
                  </label>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="yourMessage"
            render={({ field }) => (
              <FormItem className="basis-full space-y-0">
                <FormControl>
                  <label className="mb-7 inline-block w-full text-sm font-bold leading-6 text-secondary">
                    Enter Message
                    <br />
                    <Textarea
                      id=""
                      placeholder="Enter Message"
                      className="mt-[10px] h-44 w-full resize-none border-2 border-transparent bg-background-blue p-5 text-base font-normal focus-visible:border-primary focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      {...field}
                    />
                  </label>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className='relative m-auto inline-block h-[58px] overflow-hidden bg-primary py-4 pe-20 ps-5 text-base font-medium text-white transition-all before:absolute before:right-[-12px] before:top-0 before:h-full before:w-[75px] before:skew-x-[-20deg] before:bg-secondary before:content-[""] hover:bg-secondary'
          >
            SUBMIT NOW
            <ArrowRight className="absolute inset-y-0 right-5 m-auto size-5 text-primary" />
          </Button>
        </form>
      </Form>
    </div>
  );
}
