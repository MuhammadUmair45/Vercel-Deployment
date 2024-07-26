import Image from "next/image";
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
          <>
            <div
              key={item.id}
              className="mb-10 flex basis-1/3 flex-wrap items-center bg-white shadow-[0_4px_18px_0_#c2c8d54d] lg:flex-nowrap"
            >
              <div className="group w-full lg:w-[300px] xl:w-[430px]">
                <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:size-full before:bg-[#1010108c] before:content-['']">
                  <span className="absolute left-0 top-[20px] inline-block rounded-[0_10px_10px_0] bg-primary px-[17px] text-[12px] font-medium capitalize text-white">
                    featured
                  </span>
                  <Image
                    src={item.image}
                    alt="Card Image"
                    className="h-[300px]  w-full"
                  />
                  {showDate ? (
                    <ul className="absolute bottom-0 flex w-full justify-between px-4 py-3 *:flex *:items-center *:text-[12px] *:text-white">
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
              </div>
              <div className="pb-6 pl-6 pt-4 lg:pl-12">
                {showCatogory && (
                  <span className="text-[13px] font-medium text-primary">
                    {item.catogory}
                  </span>
                )}
                <h3 className="my-2.5 font-rokkitt text-[26px] font-semibold text-secondary">
                  {item.title}
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
                <div className="pt-5">
                  <Button href={`/properties/${item.link}`} title="Read More" />
                </div>
              </div>
            </div>
          </>
        );
      })}
      {/* {slicedData.map((item) => {
        return (
          <div key={item.id} className="basis-1/3 bg-white shadow-[0_4px_18px_0_#c2c8d54d] mb-10">
            <div className="basis-1/3 px-5 py-5 pb-0 group">
              <div className="relative overflow-hidden before:absolute before:top-0 before:left-0 before:content-[''] before:bg-[#1010108c] before:h-full before:w-full">
              {showStatus ? (
                  <span className="inline-block text-[14px] text-white bg-primary px-[10px] py-[4px] font-medium uppercase rounded-[4px] absolute left-[30px] top-[35px] before:absolute before:bottom-full before:left-[33px] before:content-[''] before:bg-primary before:h-[55px] before:w-[2px] before:rotate-[35deg] before:-mb-[5px] after:absolute after:bottom-full after:left-auto after:content-[''] after:bg-primary after:h-[55px] after:w-[2px] after:-rotate-[35deg] after:-mb-[5px] after:right-[33px]">
                    {item.status}
                  </span>
                  ) : (    
                    <>
                    <span className="inline-block text-[12px] text-white bg-primary px-[17px] font-medium capitalize rounded-[0_10px_10px_0] absolute left-0 top-[20px]">
                      featured
                    </span>
                    </>
                  )}
                {showHoverBtn && (
                  <Link
                    className="opacity-0 inline-block text-[18px] text-white bg-primary py-2 px-4 rounded-[6px] z-[2] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 transition-opacity duration-300 ease-linear"
                    href={`/properties/${item.link}`}
                  >
                    Read More
                  </Link>
                )}                
                <Image src={item.image} alt="Card Image" className="w-full" />
                {showDate ? (
                  <ul className="flex justify-between *:text-white absolute bottom-0 w-full *:flex *:text-[12px] *:items-center px-4 py-3">
                    <li>
                      <Calendar className="h-[15px] w-[13px] text-primary mr-2"/>
                      <span>{item.date}</span>
                    </li>
                    <li>
                      <CircleUser className="h-4 w-[14px] text-primary mr-2"/> 
                      <span>{item.admin}</span>
                    </li>
                  </ul>
                  ) : (
                    <>
                    <span className="text-xl text-white font-semibold absolute z-[2] bottom-[20px] left-[30px]">
                      ${item.price}
                    </span>
                    </>
                  )}
              </div>
              <div className="pt-4 pb-6">
                {showCatogory && (
                  <span className="text-[13px] font-medium text-primary">
                    {item.catogory}
                  </span>
                )}
                <h3 className="text-[26px] text-secondary font-semibold font-rokkitt my-1.5">
                  {item.title}
                </h3>
                {showIconWithBg ? (
                  <p className="text-[15px] text-[#5C727D] mb-3 flex items-start pr-[50px]  pt-1">
                    <MapPin className="h-[15px] w-[15px] text-[#5C727D] mr-2 mt-1"/>
                    {item.address}
                  </p>
                ) : (
                  <>
                  <p className="text-[14px] text-[#5C727D] mb-3">
                    {item.address}
                  </p>
                  </>
                )}
                <ul className="flex justify-between *:text-[#5C727D] bottom-0 w-full *:flex *:text-[14px] *:items-center *:basis-1/2 flex-wrap *:mb-[3px]">
                  <li>
                    {squareSizeWithBg ? (
                      <BoxSelect className="h-[32px] w-[32px] p-[7px] rounded-full text-primary bg-[#edf9f6] mr-2"/>
                    ) : (
                      <>
                      <BoxSelect className="h-[16px] w-[15px] text-primary mr-2"/>
                      </>
                      )}
                    
                    <span>{item.squarefit} SqFt</span>
                  </li>
                    <li>
                      {squareSizeWithBg ? (
                      <Bed className="h-[32px] w-[32px] p-[7px] rounded-full text-primary bg-[#edf9f6] mr-2"/>
                      ) : (
                        <>
                      <Bed className="h-[16px] w-[15px] text-primary mr-2"/>
                      </>
                      )}
                      <span>{item.bedroom} Bedrooms</span>
                    </li>
                  {showBathroomCount && (
                    <li>
                        <Bath className="h-[16px] w-[15px] text-primary mr-2"/>
                      <span>{item.bathroom} Bathrooms</span>
                    </li>
                  )}
                  {showGarage && (
                    <li>
                      <Bath className="h-[16px] w-[15px] text-primary mr-2"/>
                      <span>{item.garage} Garage</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            {showFooter ? (
              <div className="relative flex *:text-white">
                <span className="basis-2/5 bg-primary text-[13px] font-medium uppercase pl-5 py-2 relative before:absolute before:top-0 before:left-full before:border-t-[40px] before:h-0 before:w-0 before:border-t-primary before:border-r-[20px] before:border-r-transparent">
                  For Sale
                </span>
                <span className="basis-3/5 bg-secondary text-base font-semibold pr-5 py-2 text-right">
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
      })} */}
    </>
  );
};

export default CardsContent;
