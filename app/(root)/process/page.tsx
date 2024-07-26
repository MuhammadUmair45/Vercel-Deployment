import React from "react";
import HeadlineWithIcon from "@/components/shared/HeadlineWithIcon";
import SubHeadline from "@/components/shared/SubHeadline";
import InnerBanner from "@/components/global/inner-banner";
import propertybanner from "@/public/assets/images/property-banner.jpg";
import { ProcessContent } from "@/lib/data";
import Image from "next/image";

const Process = () => {
  return (
    <>
      <InnerBanner text="Process" image={propertybanner} />
      <div className="container">
        <div className="flex flex-col items-center sm:pt-24 pt-16 text-center">
          <HeadlineWithIcon
            title="Process for Customers"
            homeIcon
            alignment="center"
          />
          <SubHeadline title="BEST PROCESS" />
        </div>
      </div>
      <div className="container sm:mt-16 mt-8">
        {ProcessContent.map((item) => (
          <>
            <div
              key={item.id}
              className="sm:mb-20 mb-14 flex flex-wrap md:mb-36 md:flex-nowrap"
            >
              {item.position === "left" && (
                <>
                  <div className="hidden basis-[8.3%] lg:block"></div>
                  <div
                    className="basis-full pr-0 md:basis-1/2 md:pr-7 lg:basis-5/12"
                    data-aos="fade-right"
                  >
                    <Image
                      src={item.image}
                      alt="Process Image"
                      className="border border-primary p-5"
                    />
                  </div>
                  <div
                    className="relative mt-8 basis-full pl-4 pt-16 md:mt-0 md:basis-1/2 lg:basis-6/12"
                    data-aos="fade-left"
                  >
                    <span className="absolute left-7 top-[54px] text-[120px] text-[#5C727D33]">
                      0{item.id}.
                    </span>
                    <h3 className="mb-5 text-[32px] font-semibold text-secondary">
                      {item.title}
                    </h3>
                    <p className="text-base leading-7 text-primary-headline">
                      {item.text}
                    </p>
                  </div>
                </>
              )}
              {item.position === "right" && (
                <>
                  <div
                    className="block basis-full pl-0 md:hidden md:basis-1/2 md:pl-7 lg:basis-5/12"
                    data-aos="fade-left"
                  >
                    <Image
                      src={item.image}
                      alt="Process Image"
                      className="border border-primary p-5"
                    />
                  </div>
                  <div
                    className="relative mt-8 basis-full pr-4 pt-16 md:mt-0  md:basis-1/2 lg:basis-6/12"
                    data-aos="fade-right"
                  >
                    <span className="absolute left-7 top-[54px] text-[120px] text-[#5C727D33]">
                      0{item.id}.
                    </span>
                    <h3 className="mb-5 text-[32px] font-semibold text-secondary">
                      {item.title}
                    </h3>
                    <p className="text-base leading-7 text-primary-headline">
                      {item.text}
                    </p>
                  </div>
                  <div
                    className="hidden basis-full pl-7 md:block md:basis-1/2 lg:basis-5/12"
                    data-aos="fade-left"
                  >
                    <Image
                      src={item.image}
                      alt="Process Image"
                      className="border border-primary p-5"
                    />
                  </div>
                  <div className="hidden basis-[8.3%] lg:block"></div>
                </>
              )}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Process;
