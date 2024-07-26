import React from "react";
import FaqsContent from "@/components/shared/Faqs";
import HeadlineWithIcon from "@/components/shared/HeadlineWithIcon";
import SubHeadline from "@/components/shared/SubHeadline";
import faqsimage from "@/public/assets/images/faqs-page-image.jpg";
import propertybanner from "@/public/assets/images/property-banner.jpg";
import InnerBanner from "@/components/global/inner-banner";
import NewsLetter from "@/components/shared/NewsLetter";
import { FaqsPropsPage } from "@/lib/data";
import Image from "next/image";
import { Quote } from "lucide-react";

const Faqs = () => {
  return (
    <>
      <InnerBanner text="FAQ’s" image={propertybanner} />
      <div className="container">
        <div className="flex flex-col items-center pt-16 text-center sm:pt-24">
          <HeadlineWithIcon
            title="Have Any Questions?"
            homeIcon
            alignment="center"
          />
          <SubHeadline title="FAQ's" />
        </div>
        <div className="flex flex-wrap gap-8 lg:flex-nowrap">
          <div className="mt-6 basis-full lg:basis-3/5 ">
            <FaqsContent data={FaqsPropsPage} />
          </div>
          <div className="mt-5 basis-full sm:mt-12 lg:basis-2/5">
            <Image
              src={faqsimage}
              alt="Faqs Image"
              className="w-full lg:w-auto"
            />
            <div className="relative mr-6 mt-[-100px] w-full bg-primary p-7 md:w-1/2 lg:w-96">
              <Quote className="absolute size-10 rotate-180 text-white" />
              <p className="pt-14 text-base leading-7 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container  sm:py-24 py-16">
        <div className="mb-12 flex flex-col items-center">
          <HeadlineWithIcon
            title="Feel Free to Contact"
            homeIcon
            alignment="center"
          />
          <SubHeadline title="SUBSCRIBE NEWSLETTER" />
        </div>
        <NewsLetter />
      </div>
    </>
  );
};

export default Faqs;
