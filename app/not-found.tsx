import Button from "@/components/shared/Button";
import errorimage from "@/public/assets/images/404-img.png";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="container sm:pb-14 sm:pt-8 pt-14 pb-16 md:pb-28 md:pt-24">
        <div className="flex flex-wrap items-center md:flex-nowrap">
          <div className="basis-full md:basis-1/2">
            <h1 className="mb-5 text-[66px] font-medium leading-none text-secondary">
              404
            </h1>
            <p className="mb-4 w-full max-w-full text-base leading-7 text-primary-headline lg:w-[540px]">
              Sorry but the page you are looking for does not exist, have been
              removed, name changed or is temporarity unavailable.
            </p>
            <Button href="/" title="Back to Home" />
          </div>
          <div className="flex basis-full justify-start pt-5 md:basis-1/2 md:justify-end md:pt-0">
            <Image src={errorimage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
