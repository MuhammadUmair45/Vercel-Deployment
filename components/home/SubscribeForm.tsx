"use client";

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
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

const formSchema = z.object({
  email: z.string().email(),
  // yourMessage: z.string().min(15),
});

export function SubscribeForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: "Form Submitted Successfully.",
      className:
        "top-0 left-6 block fixed md:max-w-[420px] md:top-4 md:right-4 text-center border-primary bg-white text-primary shadow border-2",
    });
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="">
              <FormControl>
                <label className="mb-2 block text-[17px] leading-7">
                  Email Us
                  <br />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="mb-3 mt-2 h-[50px] w-full px-6 py-0 text-[13px] text-primary-headline"
                    required
                    {...field}
                  />
                </label>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="rounded-[6px] bg-secondary px-5 py-3">
          Subscribe
        </Button>
      </form>
    </Form>
  );
}

export default SubscribeForm;
