import React from "react";
import HeadlineWithIcon from "./HeadlineWithIcon";
import SubHeadline from "./SubHeadline";
import Link from "next/link";
import { services } from "@/lib/dataWithJSX";

const ServiceCard = () => {
  return (
    <div className="container sm:py-24 pt-16 pb-9">
      <div className="mb-14 flex flex-col items-center">
        <HeadlineWithIcon
          title="Our Core Services"
          homeIcon
          alignment="center"
        />
        <SubHeadline title="Our Services" />
      </div>
      <div className="flex flex-wrap md:mx-[-16px]">
        {services.map((item) => (
          <div
            key={item.id}
            className="mb-8 flex basis-full flex-col items-center bg-white p-10 shadow-[0_10px_20px_0_#c2c8d54d] md:mx-4 md:basis-[calc(50%-32px)] lg:basis-[calc(33.3333%-32px)]"
            data-aos="zoom-in"
          >
            <span className="mb-4 flex size-[74px] shrink-0 items-center justify-center rounded-full">
              {item.icon}
            </span>
            <Link
              href={`/services/${encodeURIComponent(item.id.toLowerCase().replace(/ /g, "-"))}/`}
              passHref
            >
              <h3 className="mb-[10px] cursor-pointer text-[26px] font-bold text-secondary">
                {item.title}
              </h3>
            </Link>
            <div className="text-center text-sm leading-6 text-primary-headline">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
