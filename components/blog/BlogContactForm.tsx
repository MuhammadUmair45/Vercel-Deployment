"use client";
import { ArrowRight } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";

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
  name: z.string().min(3, {
    message: "First Name must be at least 3 characters.",
  }),
  email: z.string().email(),
  yourMessage: z.string().min(15),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

export function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      yourMessage: "",
      terms: true,
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
    <>
      <div className="mt-10 pt-4">
        <h3 className="relative mb-[25px] pl-5 text-2xl font-semibold leading-5 text-[#101010] before:absolute before:left-0 before:top-1/2 before:size-2 before:-translate-y-1/2 before:bg-primary before:content-['']">
          Leave a Reply
        </h3>
      </div>
      <div className="bg-background-blue px-5 py-11 md:px-10">
        <h3 className="mb-4 font-poppins text-base font-normal leading-6 text-primary-headline">
          Your email address will not be published. Required fields are marked *
        </h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-wrap"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="basis-full space-y-0 pr-0 sm:basis-1/2 sm:pr-4">
                  <FormControl>
                    <label className="mb-4 inline-block w-full text-sm font-bold leading-6 text-secondary">
                      <input
                        type="text"
                        className="mt-[10px] h-[60px] w-full border-2 border-transparent bg-white px-5 py-[10px] text-base font-normal focus-visible:border-primary focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Name*"
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
                <FormItem className="ms:pl-4 basis-full space-y-0 pl-0 sm:basis-1/2 ">
                  <FormControl>
                    <label className="mb-4 inline-block w-full text-sm font-bold leading-6 text-secondary">
                      <input
                        type="email"
                        placeholder="Email*"
                        className="mt-[10px] h-[60px] w-full border-2 border-transparent bg-white px-5 py-[10px] text-base font-normal focus-visible:border-primary focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
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
                    <label className="mb-4 inline-block w-full text-sm font-bold leading-6 text-secondary">
                      <Textarea
                        id=""
                        placeholder="Comment"
                        className="mt-[10px] h-44 w-full resize-none border-2 border-transparent bg-white p-5 text-base font-normal focus-visible:border-primary focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
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
              name="terms"
              render={({ field }) => (
                <FormItem className="basis-full space-y-0 pb-8">
                  <FormControl>
                    <label className="flex w-full items-center text-[15px] font-normal leading-6 text-primary-headline">
                      <Checkbox />
                      <span className="pl-[15px]">
                        Save my name, email, and website in this browser for the
                        next time I <br /> comment.
                      </span>
                    </label>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className='relative inline-block h-[58px] overflow-hidden bg-primary py-4 pe-[90px] ps-[30px] text-base font-medium text-white transition-all before:absolute before:right-[-12px] before:top-0 before:h-full before:w-[75px] before:skew-x-[-20deg] before:bg-secondary before:content-[""] hover:bg-secondary'
            >
              Post Comment
              <ArrowRight className="absolute inset-y-0 right-5 m-auto size-5 text-primary" />
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
