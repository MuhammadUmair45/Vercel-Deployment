import React from "react";
import InnerBanner from "@/components/global/inner-banner";
import AboutAgent from "@/components/about/AboutAgent";
import HeadlineWithIcon from "@/components/shared/HeadlineWithIcon";
import SubHeadline from "@/components/shared/SubHeadline";
import propertybanner from "@/public/assets/images/property-banner.jpg";
import { teamMembers } from "@/lib/data";
import CTA from "@/components/shared/CTA";

const About = () => {
  return (
    <>
      <InnerBanner text="Our Agents" image={propertybanner} />
      <div className="container sm:py-24 py-16">
        <div className="flex flex-col items-center pb-7">
          <HeadlineWithIcon
            title="Served by Experts"
            homeIcon
            alignment="center"
          />
          <SubHeadline title="OUR AGENTS" />
        </div>
        <div className="grid grid-cols-1 gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          <AboutAgent data={teamMembers} itemsPerPage={8} />
        </div>
      </div>
      <div className="container sm:pt0 pt-9">
        <CTA />
      </div>
    </>
  );
};

export default About;
