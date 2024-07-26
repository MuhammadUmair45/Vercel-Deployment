import React from "react";
import InnerBanner from "@/components/global/inner-banner";
import propertybanner from "@/public/assets/images/property-banner.jpg";
import ImageTrianglebg from "@/components/home/ImageWithHalfBgTriangle";
import ImageWithTriangleContent from "@/components/home/ImageWithTriangleContent";
import LatestBlog from "@/components/home/LatestBlog";
import ServiceCard from "@/components/shared/ServiceCard";

const services = () => {
  return (
    <>
      <InnerBanner text="Services" image={propertybanner} />
      <div className="container sm:py-24 pt-[50px] pb-16">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div
            className="order-2 basis-full lg:order-1 lg:basis-1/2"
            data-aos="fade-right"
          >
            <ImageTrianglebg />
          </div>
          <div
            className="order-1 basis-full lg:order-2 lg:basis-1/2"
            data-aos="fade-left"
          >
            <ImageWithTriangleContent
              title="About Us"
              content="Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services. <br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              list="no"
            />
          </div>
        </div>
      </div>

      <section className="bg-background-grey">
        <ServiceCard />
      </section>
      <div className="md:pb-11 pb-0 sm:pb-0">
        <LatestBlog />
      </div>
    </>
  );
};

export default services;
