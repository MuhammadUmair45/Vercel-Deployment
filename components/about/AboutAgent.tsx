import Image from "next/image";
import Link from "next/link";
import { AboutAgentItemsProps } from "@/types/index";

interface AgentCount {
  data: AboutAgentItemsProps[];
  itemsPerPage?: number;
}

const AboutAgent = ({ data = [], itemsPerPage = 0 }: AgentCount) => {
  const slicedData = data.slice(0, itemsPerPage);
  return (
    <>
      {slicedData.map((item) => (
        <div
          key={item.id}
          className="group shadow-[0px_0px_10px_0px_rgba(0,0,0,0.09)]"
          data-aos="zoom-in"
        >
          <div className="relative before:absolute before:bottom-0 before:left-0 before:size-full before:bg-gradient-to-b before:from-transparent before:via-transparent before:to-orange-500 before:opacity-0 before:transition-opacity before:content-[''] group-hover:before:opacity-100">
            <Image src={item.image} alt="Card Image" className="w-full" />
            <Link
              className="absolute left-1/2 top-1/2 inline-block w-[150px] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-[6px] bg-primary px-4 py-2 text-lg font-semibold text-white transition delay-200 ease-in group-hover:scale-100"
              href={`our-agents/${item.link}`}
            >
              View Profile
            </Link>
          </div>
          <div className="relative bg-white p-7 text-center">
            <h4 className="mb-1 font-semibold text-secondary">
              <Link href={`our-agents/${item.link}`}>{item.name}</Link>
            </h4>
            <h5 className="font-normal text-primary-headline">
              {item.designation}
            </h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutAgent;
