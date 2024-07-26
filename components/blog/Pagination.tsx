import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <>
      <ul className="flex items-center justify-center *:size-12">
        <li className="mx-[5px] inline-block">
          <Link
            className="flex size-full items-center justify-center rounded-full border border-dotted border-[#101010] text-lg text-[#101010] transition-colors hover:border-primary hover:text-primary"
            href="#"
          >
            <ChevronLeft />
          </Link>
        </li>
        <li className="mx-[5px] inline-block">
          <Link
            className="flex size-full items-center justify-center rounded-full border border-dotted border-[#101010] text-lg text-[#101010] transition-colors hover:border-primary hover:text-primary"
            href="#"
          >
            1
          </Link>
        </li>
        <li className="mx-[5px] inline-block">
          <Link
            className="flex size-full items-center justify-center rounded-full border border-dotted border-[#101010] text-lg text-[#101010] transition-colors hover:border-primary hover:text-primary"
            href="#"
          >
            2
          </Link>
        </li>
        <li className="mx-[5px] inline-block">
          <Link
            className="flex size-full items-center justify-center rounded-full border border-dotted border-[#101010] text-lg text-[#101010] transition-colors hover:border-primary hover:text-primary"
            href="#"
          >
            ...
          </Link>
        </li>
        <li className="mx-[5px] inline-block">
          <Link
            className="flex size-full items-center justify-center rounded-full border border-dotted border-[#101010] text-lg text-[#101010] transition-colors hover:border-primary hover:text-primary"
            href="#"
          >
            4
          </Link>
        </li>
        <li className="mx-[5px] inline-block">
          <Link
            className="flex size-full items-center justify-center rounded-full border border-dotted border-[#101010] text-lg text-[#101010] transition-colors hover:border-primary hover:text-primary"
            href="#"
          >
            <ChevronRight />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
