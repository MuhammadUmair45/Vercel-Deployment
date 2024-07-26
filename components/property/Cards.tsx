import Image from "next/image";
import { CardsContentProps } from "@/types";
import { MapPin, BoxSelect, Bed, Bath, Fence } from "lucide-react";

interface cardType {
  data: CardsContentProps[];
  itemsPerPage?: number;
}

const CardsContent = ({ data, itemsPerPage }: cardType) => {
  const slicedData = data.slice(0, itemsPerPage);
  // const formattedContent = text.replace(/<br\/>/g, '\n');
  return (
    <>
      {slicedData.map((item) => {
        // const formattedContent = {item.text}.replace(/<br\/>/g, '\n');
        return (
          <div key={item.id}>
            <div className="mb-12 flex flex-wrap items-start md:flex-nowrap">
              <div className="basis-full md:basis-3/5">
                <h1 className="my-1.5 font-rokkitt sm:text-5xl text-4xl font-semibold text-primary">
                  {item.title}
                </h1>
                <p className="mb-3 flex items-start pr-[50px] pt-1 text-lg  text-[#5C727D]">
                  <MapPin className="mr-2 mt-1 size-[15px] text-[#5C727D]" />
                  {item.address}
                </p>
              </div>
              <div className="mt-2 flex basis-full flex-wrap justify-start md:basis-2/5 md:justify-end">
                <h3 className="mb-2 basis-full text-left text-4xl font-semibold leading-none text-black md:text-right">
                  ${item.price}
                </h3>
                <span className="text-base font-medium text-black">
                  ${item.squarefit} /SqFt
                </span>
              </div>
            </div>
            <div>
              <Image src={item.image} alt="Card Image" className="w-full" />
              <div>
                <div className="pt-11">
                  <h3 className="relative mb-[25px] pl-5 text-2xl font-semibold leading-5 text-[#101010] before:absolute before:left-0 before:top-1/2 before:size-2 before:-translate-y-1/2 before:bg-primary before:content-['']">
                    Description
                  </h3>
                </div>
                <div className="bg-background-blue p-5 text-primary-headline">
                  {item.text.replace(/<br\/>/g, "\n")}
                </div>
              </div>
              <div className="">
                <div className="pt-11">
                  <h3 className="relative mb-[25px] pl-5 text-2xl font-semibold leading-5 text-[#101010] before:absolute before:left-0 before:top-1/2 before:size-2 before:-translate-y-1/2 before:bg-primary before:content-['']">
                    Property Details
                  </h3>
                </div>
                <ul className="bottom-0 flex w-full flex-wrap justify-between bg-background-blue px-5 pb-2 pt-5 *:mb-[12px] *:flex *:basis-1/2 *:items-center *:text-[18px] *:text-[#5C727D]">
                  <li>
                    <BoxSelect className="mr-3 size-[20px] text-primary" />
                    <span>{item.squarefit} SqFt</span>
                  </li>
                  <li>
                    <Bed className="mr-3 size-[20px] text-primary" />
                    <span>{item.bedroom} Bedrooms</span>
                  </li>
                  <li>
                    <Bath className="mr-3 size-[20px] text-primary" />
                    <span>{item.bathroom} Bathrooms</span>
                  </li>
                  <li>
                    <Fence className="mr-3 size-[20px] text-primary" />
                    <span>{item.garage} Garage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardsContent;
