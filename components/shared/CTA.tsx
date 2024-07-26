import React from "react";
import { UsersRound } from "lucide-react";
import Button from "@/components/shared/Button";
import { AgentCTAItems } from "@/lib/data";

const CTA = () => {
  return (
    <>
      <div className="container sm:mb-24 mb-16">
        <div className="relative m-auto flex w-full max-w-full flex-wrap bg-background-blue lg:w-[700px] lg:flex-nowrap">
          <UsersRound className="absolute left-[-35px] top-[-35px] size-[70px] shrink-0 rounded-full bg-primary p-[10px] text-white" />
          <div className="basis-full px-5 pb-6 pt-11 md:px-10 md:pt-7 lg:basis-3/5">
            <h3 className="mb-1 text-[32px] font-semibold text-secondary">
              {AgentCTAItems.title}
            </h3>
            <p className="max-h-full w-full text-base leading-6 text-primary-headline lg:w-[290px]">
              {AgentCTAItems.text}
            </p>
          </div>
          <div className="basis-full p-6 pt-0 text-left lg:basis-2/5 lg:p-10 lg:text-right">
            <Button href={AgentCTAItems.link} title="Join Now" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
