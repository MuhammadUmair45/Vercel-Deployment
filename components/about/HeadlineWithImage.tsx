import HeadlineWithIcon from "@/components/shared/HeadlineWithIcon";
import Image from "next/image";
import SignationImage from "@/public/assets/images/signation-icon.png";
import AboutLeaderImage from "@/public/assets/images/about-leader.png";
import Button from "../shared/Button";

const HeadlineWithImage = () => {
  return (
    <>
      <div className="container sm:mb-24 mb-16">
        <div className="flex flex-wrap gap-9 sm:px-4 px-0 lg:flex-nowrap">
          <div className="basis-full pb-4 sm:pt-24 pt-12 lg:basis-1/2">
            <HeadlineWithIcon
              title="Company Growth"
              alignment="start"
              borderColor="primary"
              headlineColor="secondary"
              arrowColor="primary"
            />
            <div className="pb-4 pt-2">
              <p className="mb-5 text-base font-normal text-primary-headline">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s.
              </p>
              <p className="mb-5 text-base font-normal text-primary-headline">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s. Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.
              </p>
              <p className="text-base font-normal text-primary-headline">
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the 1500s. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s. Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the 1500s. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>
            </div>
            <Image src={SignationImage} alt="Signation Image" className="" />
            <h3 className="my-1 font-poppins text-base font-semibold text-primary">
              Acalan Beamer
            </h3>
            <h3 className="mb-6 font-poppins text-base font-normal text-primary-headline">
              Company Founder & CEO
            </h3>
            <Button href="#" title="Meet Our Agents" />
          </div>
          <div className="basis-full lg:basis-1/2">
            <Image
              src={AboutLeaderImage}
              alt="About Leader Image"
              className="relative z-[5] lg:mt-[-85px] lg:pl-9"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default HeadlineWithImage;
