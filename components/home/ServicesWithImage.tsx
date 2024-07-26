import React from "react";
import HeadlineWithIcon from "@/components/shared/HeadlineWithIcon";
import SpotlightWithLeftIcon from "@/components/shared/SpotlightWithLeftIcon";
import { ServiesContent } from "@/lib/dataWithJSX";
import Image from "next/image";
import serviceimage1 from "@/public/assets/images/service-image-1.png";
import serviceimage2 from "@/public/assets/images/service-image-2.png";
import serviceimage3 from "@/public/assets/images/service-image-3.png";

const ServicesWithImage = () => {
  return (
    <>
      <div className="container sm:pb-24 pb-16">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="basis-full pr-0 md:pr-12 lg:basis-1/2">
            <HeadlineWithIcon
              title="Our Services"
              alignment="start"
              borderColor="primary"
              headlineColor="secondary"
              arrowColor="primary"
            />
            <div className="w-full lg:w-4/5">
              <p className="inline-block pb-9 pt-3 text-base text-primary-headline">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet.
              </p>
              <SpotlightWithLeftIcon data={ServiesContent} position="left" />
            </div>
          </div>
          <div
            className="flex basis-full items-center gap-5 lg:basis-1/2"
            data-aos="zoom-in"
          >
            <Image
              src={serviceimage1}
              alt="service image"
              className="w-1/2 pr-2"
            />
            <div className="w-1/2">
              <Image src={serviceimage2} alt="service image" className="pb-6" />
              <Image src={serviceimage3} alt="service image" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicesWithImage;
