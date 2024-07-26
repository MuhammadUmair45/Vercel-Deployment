import { LogosContentItems } from "@/lib/data";
import Image from "next/image";
import HeadlineWithIcon from "@/components/shared/HeadlineWithIcon";
import SubHeadline from "@/components/shared/SubHeadline";

const LogosContent = () => {
  return (
    <>
      <div className="sm:mb-24 mb-16 bg-background-blue sm:py-24 py-16">
        <div className="container">
          <div className="flex flex-col items-center">
            <HeadlineWithIcon
              title="Trusted Big Partners"
              homeIcon
              alignment="center"
            />
            <SubHeadline title="OUR CLIENTS" />
          </div>
          <ul className="mt-8 flex flex-wrap bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.07)]">
            {LogosContentItems.map((item) => (
              <li
                key={item.id}
                className="group flex basis-full items-center justify-center border-b border-r border-[#E7E7E7] p-5 md:basis-1/2 lg:basis-1/4"
              >
                <Image
                  src={item.image}
                  alt="Logo Image"
                  className="h-[105px] scale-100 transition-transform ease-in group-hover:scale-110 group-hover:grayscale"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default LogosContent;
