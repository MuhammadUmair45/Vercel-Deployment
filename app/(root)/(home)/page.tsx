import HeadlineWithIcon from "@/components/shared/HeadlineWithIcon";
import SubHeadline from "@/components/shared/SubHeadline";
import SpotlightWithLeftIcon from "@/components/shared/SpotlightWithLeftIcon";
import NewsLetter from "@/components/shared/NewsLetter";
import ImageTrianglebg from "@/components/home/ImageWithHalfBgTriangle";
import ImageWithTriangleContent from "@/components/home/ImageWithTriangleContent";
import ListWithImage from "@/components/home/ListWithLeftImage";
import Banner from "@/components/home/Banner";
import Cards from "@/components/shared/Cards";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import LatestBlog from "@/components/home/LatestBlog";
import ServicesWithImage from "@/components/home/ServicesWithImage";
import { CardsContentInfo } from "@/lib/data";
import { SpotWithLeftIcon, SpotWithRightIcon } from "@/lib/dataWithJSX";
import Image from "next/image";
import WhoWeImage from "@/public/assets/images/home-who-we.png";
import FilterableTabs from "@/components/home/FilterableTabs";

export default function Home() {
  return (
    <>
      <div className="mt-[-32.5px]">
        <Banner />
      </div>
      <div className="bg-background-grey pt-16 sm:pt-24">
        <div className="flex flex-col items-center">
          <HeadlineWithIcon title="Who We Are" homeIcon alignment="center" />
          <SubHeadline title="About Us" />
        </div>
        <div className="container pb-24 pt-12">
          <div className="flex flex-col flex-nowrap items-center gap-12 lg:flex-row">
            <div className="basis-full lg:basis-1/3">
              <SpotlightWithLeftIcon
                data={SpotWithLeftIcon}
                position="right"
                data-aos="fade-left"
              />
            </div>
            <div className="basis-full lg:basis-1/3">
              <Image
                src={WhoWeImage}
                alt="Who We Image"
                className="m-auto w-full border-[20px] border-[#F1F2F3]"
              />
            </div>
            <div className="basis-full lg:basis-1/3">
              <SpotlightWithLeftIcon
                data={SpotWithRightIcon}
                position="left"
                data-aos="fade-right"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-6 pt-16 sm:pb-14 sm:pt-24">
        <div className="flex flex-col items-center">
          <HeadlineWithIcon
            title="Recent Properties"
            homeIcon
            alignment="center"
          />
          <SubHeadline title="FIND YOUR PROPERTY" />
        </div>
        <div className="flex flex-wrap justify-center pt-12 lg:flex-nowrap">
          <Cards
            data={CardsContentInfo}
            itemsPerPage={3}
            showBathroomCount
            showGarage
            showFooter
            showDate
            showHoverBtn
            showCatogory
          />
        </div>
      </div>
      <ListWithImage />
      <div className="container pb-3 pt-16 sm:pb-14 sm:pt-24">
        <div className="flex flex-col items-center">
          <HeadlineWithIcon
            title="Explore Properties"
            homeIcon
            alignment="center"
          />
          <SubHeadline title="FIND PROPERTY IN YOUR CITY" />
        </div>
        <FilterableTabs />
      </div>
      <ServicesWithImage />

      <div className="mb-12 flex flex-col items-center">
        <HeadlineWithIcon
          title="Feel Free to Contact"
          homeIcon
          alignment="center"
        />
        <SubHeadline title="SUBSCRIBE NEWSLETTER" />
      </div>
      <div className="container pb-[55px] sm:pb-24 md:pb-24">
        <NewsLetter />
      </div>

      <div className="container pb-16 sm:pb-24">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div
            className="order-2 basis-full lg:order-1 lg:basis-1/2"
            data-aos="fade-right"
          >
            <ImageTrianglebg />
          </div>
          <div className="order-1 basis-full lg:order-2 lg:basis-1/2">
            <ImageWithTriangleContent title="" content="" list="yes" />
          </div>
        </div>
      </div>
      <TestimonialSlider />
      <LatestBlog />
    </>
  );
}
