import { AffordablePackageItems } from "@/lib/data";
import Button from "../shared/Button";
import HeadlineWithIcon from "@/components/shared/HeadlineWithIcon";
import SubHeadline from "@/components/shared/SubHeadline";

const AffordablePackageContent = () => {
  return (
    <>
      <div className="container sm:pt-24 sm:pb-24 pt-16 pb-7">
        <div className="flex flex-col items-center">
          <HeadlineWithIcon
            title="Affordable Packages"
            homeIcon
            alignment="center"
          />
          <SubHeadline title="PRICING PLANS" />
        </div>
        <div className="mx-[-16px] mt-10 flex flex-wrap justify-center lg:flex-nowrap">
          {AffordablePackageItems.map((item) => (
            <div
              key={item.id}
              className="mx-4 mb-10 basis-full overflow-hidden rounded-[0_70px] text-center shadow-[0px_0px_12px_0px_rgba(0,0,0,0.1)] md:basis-[calc(50%-32px)] lg:mb-0 lg:basis-1/3"
            >
              {item.type === true ? (
                <div className="relative overflow-hidden bg-primary px-7 py-11 text-center">
                  <span className="absolute left-[-64px] top-[22px] inline-block w-48 -rotate-45 bg-white text-[14px] font-medium text-primary">
                    Featured
                  </span>
                  <span className="mb-3 inline-block font-rokkitt text-[32px] font-semibold text-white">
                    {item.plan}
                  </span>
                  <h3 className="font-poppins text-4xl font-medium leading-none text-white">
                    ${item.price}.00
                  </h3>
                  <p className="mt-[15px] inline-block px-[15%] text-[15px] text-white">
                    {item.text}
                  </p>
                </div>
              ) : (
                <div className="bg-secondary px-7 py-11 text-center ">
                  <span className="mb-3 inline-block font-rokkitt text-[32px] font-semibold text-white">
                    {item.plan}
                  </span>
                  <h3 className="font-poppins text-4xl font-medium leading-none text-primary">
                    ${item.price}.00
                  </h3>
                  <p className="mt-[15px] inline-block px-[15%] text-[15px] text-white">
                    {item.text}
                  </p>
                </div>
              )}
              <div className="px-8 pb-10 pt-9">
                <ul className="pb-5 *:mb-3 *:text-[15px] *:font-normal *:text-primary-headline">
                  <li>{item.features1}</li>
                  <li>{item.features2}</li>
                  <li>{item.features3}</li>
                  <li>{item.features4}</li>
                  <li>{item.features5}</li>
                </ul>
                <Button href="#" title="Select Plan" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default AffordablePackageContent;
