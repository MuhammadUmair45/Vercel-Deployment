import React from "react";
import HeadlineWithIcon from "@/components/shared/HeadlineWithIcon";
import SubHeadline from "@/components/shared/SubHeadline";
import InnerBanner from "@/components/global/inner-banner";
import propertybanner from "@/public/assets/images/property-banner.jpg";
import Cards from "@/components/shared/Cards";
import { CardsContentInfo } from "@/lib/data";

const Property = () => {
  return (
    <>
      <InnerBanner text="Properties" image={propertybanner} />

      <div className="container sm:pb-14 pb-6 sm:pt-24 pt-16">
        <div className="flex flex-col items-center">
          <HeadlineWithIcon
            title="Recent Properties"
            homeIcon
            alignment="center"
          />
          <SubHeadline title="FIND YOUR PROPERTY" />
        </div>
        <div className="flex flex-wrap justify-center pt-12 lg:flex-wrap">
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
      </div>
    </>
  );
};

export default Property;
