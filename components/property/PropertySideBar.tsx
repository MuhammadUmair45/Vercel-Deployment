import Link from "next/link";
import { Search } from "lucide-react";
import { CardsContentInfo } from "@/lib/data";

const SideBar = () => {
  return (
    <>
      <div className="relative mb-14 flex bg-background-blue px-[30px] py-9">
        <input
          type="text"
          placeholder="Search"
          className="h-[60px] w-full border border-[#dddddd] py-[10px] pl-7 pr-[85px] text-lg text-primary-headline focus-visible:outline-none"
        />
        <Search className="absolute right-[60px] top-1/2 h-7 w-12 -translate-y-1/2 border-l border-[#dddddd] pl-6 text-black" />
      </div>
      <div className="bg-background-blue px-[30px] py-9">
        <h3 className="relative mb-[25px] pl-5 text-2xl font-semibold leading-5 text-[#101010] before:absolute before:left-0 before:top-1/2 before:size-2 before:-translate-y-1/2 before:bg-primary before:content-['']">
          Our Services
        </h3>
        <ul>
          {CardsContentInfo.map((item) => (
            <li key={item.id} className="mb-[10px]">
              <Link
                className="block border border-dotted border-primary-headline px-[30px] py-3 text-[17px] text-primary-headline transition-colors hover:border-primary hover:text-primary"
                href={`/properties/${item.link}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
