import React from "react";
import HeadlineWithIcon from "@/components/shared/HeadlineWithIcon";
import { ListWithImageContent } from "@/lib/data";
import Image from "next/image";
import listleftimage from "@/public/assets/images/home-list-with-image.jpg";

export interface ListWithImageProps {
  id: number;
  title: string;
  value: string;
}

const ListWithImage = () => {
  return (
    <>
      <div className="relative flex justify-end">
        <Image
          src={listleftimage}
          alt="homepage banner image"
          fill={true}
          className="hidden w-full object-cover lg:block"
        />
        <div className="relative basis-full bg-primary px-11 sm:pb-24 pb-[60px] sm:pt-16 pt-12 lg:basis-1/2">
          <HeadlineWithIcon
            title="Amenities"
            alignment="start"
            borderColor="white"
            headlineColor="white"
            arrowColor="white"
          />
          <ul className="grid grid-cols-1 gap-x-10 gap-y-4 pt-7 *:text-white md:grid-cols-2">
            {ListWithImageContent.map((item) => (
              <li
                key={item.id}
                className="relative flex justify-between *:text-base before:order-2 before:mb-[5px] before:ml-2 before:h-px before:shrink before:grow before:basis-auto before:self-end before:bg-[#ffffff80] before:content-['']"
              >
                <h4 className="font-poppins font-normal">{item.title}</h4>
                <span className="order-3 inline-block pl-2 font-medium">
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default ListWithImage;
