"use client";
import React from "react";
import HeadlineWithIcon from "@/components/shared/HeadlineWithIcon";
import SubHeadline from "@/components/shared/SubHeadline";
import InnerBanner from "@/components/global/inner-banner";
import propertybanner from "@/public/assets/images/property-banner.jpg";
import Cards from "@/components/property/PropertyCardsGrid";
import CTA from "@/components/shared/CTA";
import PropertySideBar from "@/components/property/PropertySideBar";
import { usePathname } from "next/navigation";
import { CardsContentInfo } from "@/lib/data";

const capitalizeEachWord = (string: string) => {
  return string
    .split(" ")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const Property = () => {
  const pathname = usePathname().replace(/\//g, ""); // Remove slashes
  const formattedText = capitalizeEachWord(pathname.replace(/-/g, " ")); // Replace hyphens with spaces and capitalize each word

  return (
    <>
      <InnerBanner text={formattedText} image={propertybanner} />

      <div className="container sm:pt-24 pt-16">
        <div className="flex flex-col items-center">
          <HeadlineWithIcon
            title="Recent Properties"
            homeIcon
            alignment="center"
          />
          <SubHeadline title="FIND YOUR PROPERTY" />
        </div>
        <div className="flex flex-wrap sm:gap-8 gap-6 pt-12 lg:flex-nowrap">
          <div className="basis-full lg:basis-[70%]">
            <Cards
              data={CardsContentInfo}
              itemsPerPage={6}
              showBathroomCount
              showGarage
              showFooter
              showDate
              showHoverBtn
              showCatogory
            />
          </div>
          <div className="basis-full lg:basis-[30%]">
            <PropertySideBar />
          </div>
        </div>
        <div className="pt-24">
          <CTA />
        </div>
      </div>
    </>
  );
};

export default Property;
