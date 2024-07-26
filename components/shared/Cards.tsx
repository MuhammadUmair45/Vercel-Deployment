import Image from "next/image";
import Link from "next/link";
import { CardsContentProps } from "@/types";
import Button from "../shared/Button";
import {
  MapPin,
  Calendar,
  CircleUser,
  BoxSelect,
  Bed,
  Bath,
} from "lucide-react";

interface cardType {
  data: CardsContentProps[];
  showBathroomCount?: boolean;
  showGarage?: boolean;
  showFooter?: boolean;
  showDate?: boolean;
  showStatus?: boolean;
  showHoverBtn?: boolean;
  showCatogory?: boolean;
  showIconWithBg?: boolean;
  squareSizeWithBg?: boolean;
  bathRoomWithBg?: boolean;
  itemsPerPage?: number;
}

const CardsContent = ({
  data,
  showBathroomCount,
  showGarage,
  showFooter,
  showDate,
  showStatus,
  showHoverBtn,
  showCatogory,
  showIconWithBg,
  squareSizeWithBg,
  itemsPerPage,
}: cardType) => {
  const slicedData = data.slice(0, itemsPerPage);
  return (
    <>
      {slicedData.map((item) => {
        return (
          <div
            key={item.id}
            className="mx-0 mb-10 basis-full bg-white shadow-[0_4px_18px_0_#c2c8d54d] md:mx-4 md:basis-[calc(50%-40px)] lg:basis-[calc(31%-20px)]"
            data-aos="zoom-in"
          >
            <div className="group basis-1/3 p-5 pb-0">
              <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-[1] before:size-full before:bg-[#1010108c] before:opacity-75 before:content-['']">
                {showStatus ? (
                  <span className="absolute left-[30px] top-[35px] inline-block rounded-[4px] bg-primary px-[10px] py-[4px] text-[14px] font-medium uppercase text-white before:absolute before:bottom-full before:left-[33px] before:mb-[-5px] before:h-[55px] before:w-[2px] before:rotate-[35deg] before:bg-primary before:content-[''] after:absolute after:bottom-full after:left-auto after:right-[33px] after:mb-[-5px] after:h-[55px] after:w-[2px] after:rotate-[-35deg] after:bg-primary after:content-['']">
                    {item.status}
                  </span>
                ) : (
                  <>
                    <span className="absolute left-0 top-[20px] inline-block rounded-[0_10px_10px_0] bg-primary px-[17px] text-[12px] font-medium capitalize text-white">
                      featured
                    </span>
                  </>
                )}
                {showHoverBtn && (
                  <Link
                    className="absolute left-1/2 top-1/2 z-[2] inline-block -translate-x-1/2 -translate-y-1/2 rounded-[6px] bg-primary px-4 py-2 text-[18px] text-white opacity-0 transition-opacity duration-300 ease-linear group-hover:opacity-100"
                    href={`/properties/${item.link}`}
                  >
                    Read More
                  </Link>
                )}
                <Image
                  src={item.image}
                  alt="Card Image"
                  className="w-full scale-100 transition-all duration-500 group-hover:scale-110"
                />
                {showDate ? (
                  <ul className="absolute bottom-0 z-[2] flex w-full justify-between px-4 py-3 *:flex *:items-center *:text-[12px] *:text-white">
                    <li>
                      <Calendar className="mr-2 h-[15px] w-[13px] text-primary" />
                      <span>{item.date}</span>
                    </li>
                    <li>
                      <CircleUser className="mr-2 h-4 w-[14px] text-primary" />
                      <span>{item.admin}</span>
                    </li>
                  </ul>
                ) : (
                  <>
                    <span className="absolute bottom-[20px] left-[30px] z-[2] text-xl font-semibold text-white">
                      ${item.price}
                    </span>
                  </>
                )}
              </div>
              <div className="pb-6 pt-4">
                {showCatogory && (
                  <span className="text-[13px] font-medium text-primary">
                    {item.catogory}
                  </span>
                )}
                <h3 className="my-1.5 font-rokkitt text-[26px] font-semibold text-secondary">
                  <Link href={`/properties/${item.link}`}>{item.title}</Link>
                </h3>
                {showIconWithBg ? (
                  <p className="mb-3 flex items-start pr-[50px] pt-1 text-[15px]  text-[#5C727D]">
                    <MapPin className="mr-2 mt-1 size-[15px] text-[#5C727D]" />
                    {item.address}
                  </p>
                ) : (
                  <>
                    <p className="mb-3 text-[14px] text-[#5C727D]">
                      {item.address}
                    </p>
                  </>
                )}
                <ul className="bottom-0 flex w-full flex-wrap justify-between *:mb-[3px] *:flex *:basis-1/2 *:items-center *:text-[14px] *:text-[#5C727D]">
                  <li>
                    {squareSizeWithBg ? (
                      <BoxSelect className="mr-2 size-[32px] rounded-full bg-[#edf9f6] p-[7px] text-primary" />
                    ) : (
                      <>
                        <BoxSelect className="mr-2 h-[16px] w-[15px] text-primary" />
                      </>
                    )}

                    <span>{item.squarefit} SqFt</span>
                  </li>
                  <li>
                    {squareSizeWithBg ? (
                      <Bed className="mr-2 size-[32px] rounded-full bg-[#edf9f6] p-[7px] text-primary" />
                    ) : (
                      <>
                        <Bed className="mr-2 h-[16px] w-[15px] text-primary" />
                      </>
                    )}
                    <span>{item.bedroom} Bedrooms</span>
                  </li>
                  {showBathroomCount && (
                    <li>
                      <Bath className="mr-2 h-[16px] w-[15px] text-primary" />
                      <span>{item.bathroom} Bathrooms</span>
                    </li>
                  )}
                  {showGarage && (
                    <li>
                      <Bath className="mr-2 h-[16px] w-[15px] text-primary" />
                      <span>{item.garage} Garage</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            {showFooter ? (
              <div className="relative flex *:text-white">
                <span className="relative basis-2/5 bg-primary py-2 pl-5 text-[13px] font-medium uppercase before:absolute before:left-full before:top-0 before:size-0 before:border-r-[20px] before:border-t-[40px] before:border-r-transparent before:border-t-primary">
                  For Sale
                </span>
                <span className="basis-3/5 bg-secondary py-2 pr-5 text-right text-base font-semibold">
                  ${item.price}
                </span>
              </div>
            ) : (
              <>
                <div className="px-5 pb-5">
                  <Button href="#" title="Contact Us" />
                </div>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};

export default CardsContent;
