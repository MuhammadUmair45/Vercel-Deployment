import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TestSlider } from "@/lib/data";
import HeadlineWithIcon from "../shared/HeadlineWithIcon";
import Image from "next/image";
import testimonialImage from "@/public/assets/images/testimonial.png";
import { Quote, Star } from "lucide-react";

const TestimonialSlider = () => {
  return (
    <div className="flex flex-wrap overflow-hidden lg:flex-nowrap">
      <div className="basis-full bg-secondary px-6 pb-24 pt-20  md:pl-20 md:pr-32 lg:basis-7/12 xl:pl-36">
        <HeadlineWithIcon
          title="Customers Says"
          alignment="start"
          borderColor="primary"
          headlineColor="white"
          arrowColor="primary"
        />
        <Carousel>
          <CarouselContent>
            {TestSlider.map((item) => (
              <CarouselItem key={item.id}>
                <div className="relative">
                  <div className="bg-secondary">
                    <div className="flex">
                      <div className="">
                        <div>
                          {/* <FontAwesomeIcon
                                        icon={["fas", "quote-left"]}
                                        className="h-[85px] w-[60px] text-primary-headline mb-5"
                                    /> */}
                          <Quote className="mb-5 h-[85px] w-[60px] rotate-180 text-primary-headline" />
                        </div>
                        <p className="mb-6 text-left font-poppins text-lg text-white">
                          {item.testimonial}
                        </p>
                        <div className="mb-4 flex">
                          <Star className="mr-1 size-[18px] text-yellow-400" />
                          <Star className="mr-1 size-[18px] text-yellow-400" />
                          <Star className="mr-1 size-[18px] text-yellow-400" />
                          <Star className="mr-1 size-[18px] text-yellow-400" />
                          <Star className="mr-1 size-[18px] text-yellow-400" />
                        </div>
                        <p className="text-left font-rokkitt text-4xl font-semibold text-white">
                          {item.name}
                        </p>
                        <p className='relative pl-4 font-poppins text-base text-white before:absolute before:inset-y-0 before:left-0 before:m-auto before:size-[6px] before:rounded-full before:bg-white before:content-[""] '>
                          {item.desingation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bottom-[-90px] left-auto right-[85px] top-auto mr-5 size-[55px] rounded-full border-none bg-white text-[20px] text-primary disabled:opacity-50 md:bottom-[-27px]" />
          <CarouselNext className="bottom-[-90px] right-[30px] top-auto  size-[55px] rounded-full border-none bg-white text-primary disabled:opacity-50 md:bottom-[-27px]" />
        </Carousel>
      </div>
      <div className="basis-full lg:basis-5/12 lg:py-10 lg:pr-20">
        <Image
          src={testimonialImage}
          alt="Testimonial image"
          className="w-full lg:ms-[-30px] lg:rounded-[150px_0_150px_0] lg:border-[12px] lg:border-white lg:pr-2"
        />
      </div>
    </div>
  );
};

export default TestimonialSlider;
