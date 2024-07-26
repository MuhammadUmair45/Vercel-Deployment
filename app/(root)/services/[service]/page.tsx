"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import SingleAgentBanner from "@/components/agent/SingleAgentBanner";
import propertybanner from "@/public/assets/images/property-banner.jpg";
import { serviceDetail } from "@/lib/data";
import Image from "next/image";
import { services } from "@/lib/dataWithJSX";

const ServicePage = () => {
  const params = useParams();
  const { service } = params;
  const [serviceId, setServiceId] = useState<string | undefined>(undefined);
  const [singleServiceDetail, setSingleServiceDetail] = useState<
    (typeof serviceDetail)[0] | undefined
  >(undefined);

  useEffect(() => {
    console.log("Service parameter from URL:", service);

    if (typeof service === "string") {
      const id = service.toLowerCase().replace(/ /g, "-");
      console.log("Formatted Service ID:", id);
      setServiceId(id);

      const detail = serviceDetail.find(
        (item) => item.id.toLowerCase().replace(/ /g, "-") === id
      );
      console.log("Matching Service Detail:", detail);
      setSingleServiceDetail(detail);
    }
  }, [service]);

  if (!serviceId) {
    return <p>Service ID not found</p>;
  }

  if (!singleServiceDetail) {
    return <p>Service detail not found</p>;
  }

  return (
    <div>
      <SingleAgentBanner
        text={singleServiceDetail.name}
        image={propertybanner}
      />
      <div className="container sm:pb-5 pb-16 sm:pt-24 pt-16 lg:mb-12">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="mb-5 basis-full lg:mb-0 lg:basis-[65%]">
            <Image
              src={singleServiceDetail.mainImage}
              alt="Service Detail Image"
              className="mb-10 w-full"
            />
            <p className="mb-10 text-[16px] leading-7 text-primary-headline">
              {singleServiceDetail.text}
            </p>
            <p className="mb-10 text-[16px] leading-7 text-primary-headline">
              {singleServiceDetail.moreText}
            </p>
            <Image
              src={singleServiceDetail.image}
              alt="Service Detail Image"
              className="mb-10 w-full"
            />
            <p className="mb-10 text-[16px] leading-7 text-primary-headline">
              {singleServiceDetail.text2}
            </p>
            <p className="mb-10 text-[16px] leading-7 text-primary-headline">
              {singleServiceDetail.text3}
            </p>
            <p className="mb-10 text-[16px] leading-7 text-primary-headline">
              {singleServiceDetail.text4}
            </p>
          </div>
          <div className="basis-full lg:basis-[35%] lg:pl-10">
            <h3 className="relative mr-5 pl-5 font-poppins text-[35px] font-medium leading-5 text-[#101010] before:absolute before:left-0 mb-8  before:top-1/2 before:size-2 before:-translate-y-1/2 before:bg-primary before:content-['']">
              Our Services
            </h3>
            <ul className="list-inside list-none bg-background-blue px-[30px] py-9">
              {services.map((serviceItem) => (
                <li
                  key={serviceItem.id}
                  className={`mb-[10px] text-[16px] leading-7 ${serviceItem.id === serviceId ? "active" : ""}`}
                >
                  <Link
                    href={`/services/${serviceItem.id}`}
                    className={`block border border-dotted border-primary-headline px-8 py-4 text-[17px] uppercase text-primary-headline transition-colors hover:border-primary ${serviceItem.id === serviceId ? "border-primary bg-primary text-white" : "bg-transparent"}`}
                  >
                    {serviceItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
