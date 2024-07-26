"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HomeBanner } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { type CarouselApi } from "@/components/ui/carousel";

import { Armchair, ArrowRight, Bath, Bed } from "lucide-react";
// import Autoplay from "embla-carousel-autoplay";

const Banner = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("scroll", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true }}
      // plugins={
      //   [
      //     Autoplay({
      //       delay: 5000,
      //     }),
      //   ]
      // }
    >
      <CarouselContent>
        {HomeBanner.map((item) => (
          <CarouselItem
            className={`pl-0 ${current === item.id ? "active" : ""}`}
            key={item.id}
          >
            <div className="relative before:absolute before:left-0 before:top-0 before:z-[2] before:size-full before:bg-[#00000080] before:content-['']">
              <Image
                src={item.image}
                alt="homepage banner image"
                fill={true}
                className="w-full object-cover"
              />
              <div className="container relative z-[3] pb-24 pt-32 lg:pt-60">
                <div className="flex min-h-[300px] w-full flex-wrap lg:w-full lg:flex-nowrap ">
                  <div className="basis-full bg-[#ffffffd9] px-4 py-10 text-center md:p-10 md:text-left lg:basis-2/5">
                    <h2
                      className={`mb-6 text-center font-rokkitt text-[50px] leading-none text-primary transition delay-500 duration-1000 lg:text-left ${
                        current === item.id
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      {item.title}
                    </h2>
                    <p
                      className={`mb-8 text-center text-xl text-secondary transition delay-500 duration-1000 lg:text-left ${
                        current === item.id
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      {item.address}
                    </p>
                    <ul className="flex flex-wrap justify-center text-center md:flex-nowrap md:justify-between">
                      <li
                        className={`basis-1/2 transition delay-500 duration-1000 md:basis-auto ${
                          current === item.id
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                      >
                        <Bath className="m-auto h-[60px] w-[45px] cursor-pointer pb-3 text-primary hover:text-secondary" />
                        <span
                          className={`mb-1 text-[15px] font-medium uppercase text-secondary`}
                        >
                          Bathrooms
                        </span>
                        <h4 className="mt-1 text-[26px] font-bold text-secondary">
                          {item.bathroom}
                        </h4>
                      </li>
                      <li
                        className={`basis-1/2 transition delay-500 duration-1000 md:basis-auto ${
                          current === item.id
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                      >
                        <Bed className="m-auto h-[60px] w-[45px] cursor-pointer pb-3  text-primary hover:text-secondary" />
                        <span className="mb-1 text-[15px] font-medium uppercase text-secondary">
                          Bedrooms
                        </span>
                        <h4 className="mt-1 text-[26px] font-bold text-secondary">
                          {item.bedroom}
                        </h4>
                      </li>
                      <li
                        className={`basis-1/2 transition delay-500 duration-1000 md:basis-auto ${
                          current === item.id
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                      >
                        <Armchair className="m-auto h-[60px] w-[45px] cursor-pointer pb-3  text-primary hover:text-secondary" />
                        <span className="mb-1 text-[15px] font-medium uppercase text-secondary">
                          living rooms
                        </span>
                        <h4 className="mt-1 text-[26px] font-bold text-secondary">
                          {item.livingroom}
                        </h4>
                      </li>
                    </ul>
                  </div>
                  <div className="my-[-6px] flex basis-full flex-col justify-center bg-[#fb6a19d9] px-5 py-10 text-center lg:basis-1/4">
                    <span className="border-b border-b-[#ffffff80] pb-4 text-base uppercase text-white">
                      initial price
                    </span>
                    <p className="mt-10 inline-block font-rokkitt text-[50px] font-medium text-white">
                      ${item.price}
                    </p>
                    <div className="">
                      <Link
                        className="relative mt-8 inline-block overflow-hidden bg-secondary py-[17px] pe-[90px] ps-[30px] font-medium text-white transition-all before:absolute before:right-[-12px] before:top-0 before:h-full before:w-[75px] before:skew-x-[-20deg] before:bg-black before:content-['']"
                        href=""
                      >
                        Contact Us
                        <ArrowRight className="absolute inset-y-0 right-5 m-auto size-[22px] text-primary" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bottom-[-27px] left-auto right-[85px] top-auto size-[55px] rounded-none border-none bg-secondary text-[20px] text-white disabled:opacity-100" />
      <CarouselNext className="bottom-[-27px] right-[30px] top-auto size-[55px] rounded-none border-none  bg-secondary text-white disabled:opacity-100" />
    </Carousel>
  );
};
export default Banner;
