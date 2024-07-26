import React from "react";
import { NewsLetterContent } from "@/lib/data";

import { ArrowRight, Headphones } from "lucide-react";

const NewsLetter = () => {
  return (
    <>
      <div className="relative m-auto max-w-[850px]">
        <span className="absolute left-1/2 top-[45%] flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[5px] border-white bg-white p-2 font-poppins text-base font-bold text-secondary  shadow-[0_0_1px_1px_#0B2C3D_inset] md:top-1/2">
          OR
        </span>
        <div className="grid grid-cols-1 gap-4 *:rounded-[5px] *:bg-secondary *:text-white  md:grid-cols-2">
          <div className="p-10">
            <div className="flex items-center">
              <Headphones className="mr-4 size-9" />

              <div>
                <h3 className="font-rokkitt text-xl font-medium">
                  {NewsLetterContent.title}
                </h3>
                <a
                  href="tel:NewsLetterContent.number"
                  className="mt-1 block text-3xl font-semibold"
                >
                  {NewsLetterContent.number}
                </a>
              </div>
            </div>
          </div>
          <div className="p-10 pl-[60px]">
            <h3 className="mb-5 font-rokkitt text-[26px] font-semibold leading-9">
              {NewsLetterContent.text}
            </h3>
            <form className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-[5px] p-[14px] text-secondary"
              />
              <div className="absolute right-0 top-0">
                <button type="submit" className="min-h-[52px] w-[52px]">
                  <ArrowRight className="absolute right-[14px] top-[10px] size-7 text-secondary" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
