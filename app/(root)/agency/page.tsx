import React from "react";
import HeadlineWithIcon from "@/components/shared/HeadlineWithIcon";
import SubHeadline from "@/components/shared/SubHeadline";
import propertybanner from "@/public/assets/images/property-banner.jpg";
import InnerBanner from "@/components/global/inner-banner";
import { AgencyContentItems } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import LogosContent from "@/components/shared/Logos";

import { Mail, Facebook, Linkedin, Phone, MapPin } from "lucide-react";

const Agency = () => {
  return (
    <>
      <InnerBanner text="Agencies" image={propertybanner} />
      <div className="container">
        <div className="flex flex-col items-center pb-12 sm:pt-24 pt-16">
          <HeadlineWithIcon
            title="Award Winning Agencies"
            homeIcon
            alignment="center"
          />
          <SubHeadline title="OUR AGENCIES" />
        </div>
      </div>
      <div className="container sm:pb-14 pb-5">
        {AgencyContentItems.map((item) => (
          <>
            <div
              key={item.id}
              className="mb-12 flex flex-wrap gap-8 rounded-xl p-10 px-5 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] md:flex-nowrap md:px-10 md:pr-0 lg:pr-10"
            >
              <div className="basis-full md:basis-1/3">
                <Image src={item.image} alt="Agency Image" className="" />
              </div>
              <div className="basis-full pr-10 md:basis-2/3">
                <div>
                  <h3 className="mb-1 text-[26px] font-semibold text-secondary">
                    {item.title}
                  </h3>
                  <div className="mb-6 mt-4 flex">
                    <MapPin className="mr-2 w-[17px] text-primary" />
                    <span className="inline-block font-poppins text-[17px] text-primary-headline">
                      {item.address}
                    </span>
                  </div>
                  <p className="inline-block text-base text-primary-headline">
                    {item.text}
                  </p>
                </div>
                <div className="mt-5 bg-background-blue px-5 py-[18px]">
                  <ul className="*:flex">
                    <li>
                      <Mail className="mr-3 mt-[6px] size-[17px] text-secondary" />
                      <Link
                        className="mb-2 text-[17px] text-primary-headline hover:text-primary"
                        href={`mailto:{item.email}`}
                      >
                        {item.email}
                      </Link>
                    </li>
                    <li>
                      <Phone className="mr-3 mt-1 size-[17px] text-secondary" />
                      <Link
                        className="text-[17px] text-primary-headline hover:text-primary "
                        href={`telto:{item.email}`}
                      >
                        {item.phone}
                      </Link>
                    </li>
                  </ul>
                </div>
                <ul className="mt-6 flex">
                  <li className="flex items-center justify-center">
                    <Link href="">
                      <Facebook
                        className="mr-3 size-[44px] cursor-pointer rounded-[8px] bg-primary
                        p-2 text-white transition-colors hover:bg-secondary"
                      />
                    </Link>
                  </li>
                  <li className="flex items-center justify-center">
                    <Link href="">
                      <Linkedin
                        className="mr-3 size-[44px] cursor-pointer rounded-[8px] bg-primary
                        p-2  text-white transition-colors hover:bg-secondary"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="relative before:absolute before:left-0 before:top-0 before:h-7 before:w-full before:content-['']">
        {/* <Image
        src={LogoBefore}
        alt="Logo Before"
        fill={true}
        className="object-cover w-full"
      /> */}
        <LogosContent />
      </div>
    </>
  );
};

export default Agency;
