import React from "react";
import PropertyBanner from "@/components/property/PropertyBanner";
import propertybanner from "@/public/assets/images/property-banner.jpg";
import Cards from "@/components/property/Cards";
import { ContactForm } from "@/components/blog/BlogContactForm";
import PropertyReviews from "@/components/property/Reviews";
import PropertySideBar from "@/components/property/SideBar";
import { CardsContentInfo, teamMembers } from "@/lib/data";

const SingleProperty = ({ params }: { params: { name: string } }) => {
  const propertyDetails = CardsContentInfo.find(
    (item) => item.link === params.name
  );
  console.log(propertyDetails);

  const agentForProperty = propertyDetails?.agent;

  const teamMember = teamMembers.find((item) => item.link === agentForProperty);

  return (
    <>
      <PropertyBanner
        text={propertyDetails?.title || "Property Title"}
        image={propertybanner}
      />
      <div className="container sm:py-24 py-12 sm:pb-24 pb-16">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="basis-full lg:basis-[65%]">
            <Cards data={propertyDetails ? [propertyDetails] : []} />
            <PropertyReviews />
            <ContactForm />
          </div>
          <div className="basis-full lg:basis-[35%]">
            <div className="pl-0 pt-14 lg:pl-8 lg:pt-0 xl:pl-16">
              <h3 className="relative text-[43px] font-semibold leading-none text-[#101010]">
                Agent Information
              </h3>
              <PropertySideBar data={teamMember ? [teamMember] : []} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProperty;
