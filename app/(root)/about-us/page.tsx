import React from "react";
import HeadlineWithIcon from "@/components/shared/HeadlineWithIcon";
import SubHeadline from "@/components/shared/SubHeadline";
import InnerBanner from "@/components/global/inner-banner";
import HeadlineWithImage from "@/components/about/HeadlineWithImage";
import AboutWorkingStepsContent from "@/components/about/AboutWorkingSteps";
import AboutAgent from "@/components/about/AboutAgent";
import StatsCounterIconBox from "@/components/about/CounterWithImage";
import AffordablePackageContent from "@/components/about/AffordablePackages";
import FaqsContent from "@/components/shared/Faqs";
import ContactFormImage from "@/components/about/ContactFormImage";
import propertybanner from "@/public/assets/images/property-banner.jpg";
import LogosContent from "@/components/shared/Logos";
import SpotlightWithLeftIcon from "@/components/shared/SpotlightWithLeftIcon";
import WhoWeImage from "@/public/assets/images/home-who-we.png";
import CounterBg from "@/public/assets/images/about-counter-bg.jpg";
import {
  StatsWithIcon,
  SpotWithLeftIcon,
  SpotWithRightIcon,
} from "@/lib/dataWithJSX";
import { teamMembers, FaqsPropsItems } from "@/lib/data";
import Image from "next/image";

const About = () => {
  return (
    <>
      <InnerBanner text="About Us" image={propertybanner} />
      <HeadlineWithImage />
      <div className="bg-background-grey sm:pt-24 pt-16">
        <div className="flex flex-col items-center">
          <HeadlineWithIcon title="Who We Are" homeIcon alignment="center" />
          <SubHeadline title="About Us" />
        </div>
        <div className="container py-12 sm:pb-16 pb-5 xl:pb-14">
          <div className="flex flex-col flex-nowrap items-center gap-12 xl:flex-row">
            <div className="basis-full lg:basis-1/3">
              <SpotlightWithLeftIcon data={SpotWithLeftIcon} position="right" />
            </div>
            <div className="basis-full border lg:basis-1/3">
              <Image
                src={WhoWeImage}
                alt="Who We Image"
                className="m-auto w-full border-[20px] border-[#F1F2F3]"
              />
            </div>
            <div className="basis-full lg:basis-1/3">
              <SpotlightWithLeftIcon data={SpotWithRightIcon} position="left" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center sm:pt-24 pt-16">
        <HeadlineWithIcon title="How It Works?" homeIcon alignment="center" />
        <SubHeadline title="WORKING PROCESS" />
      </div>
      <AboutWorkingStepsContent />
      <div className="container sm:pb-24 pb-[70px]">
        <div className="flex flex-wrap gap-9 lg:flex-nowrap">
          <div className="basis-full lg:basis-4/6">
            <HeadlineWithIcon
              title="Top Agents"
              alignment="start"
              borderColor="primary"
              headlineColor="secondary"
              arrowColor="primary"
            />
            <div className="mt-6 flex basis-1/2 flex-col gap-7 lg:flex-row">
              <AboutAgent data={teamMembers} itemsPerPage={2} />
            </div>
          </div>
          <div className="basis-full lg:basis-2/6">
            <HeadlineWithIcon
              title="FAQ's"
              alignment="start"
              borderColor="primary"
              headlineColor="secondary"
              arrowColor="primary"
            />
            <FaqsContent data={FaqsPropsItems} />
          </div>
        </div>
      </div>
      <div className="mt-24 bg-secondary sm:pb-16 pb-8">
        <div className="container">
          <div className="relative min-h-96">
            <Image
              src={CounterBg}
              alt="Counter Bg Image"
              fill={true}
              className="-mt-28 w-full object-cover"
            />
          </div>
          <div className="-mt-12 flex flex-wrap items-center md:justify-center lg:flex-nowrap lg:justify-between">
            {StatsWithIcon.map((item) => {
              return (
                <StatsCounterIconBox
                  key={`statbox${item.id}`}
                  iconName={item.iconName}
                  amount={item.amount}
                  text={item.text}
                />
              );
            })}
          </div>
        </div>
      </div>
      <AffordablePackageContent />
      <ContactFormImage />
      <LogosContent />
    </>
  );
};

export default About;
