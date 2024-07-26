import React from "react";
import HeadlineWithIcon from "@/components/shared/HeadlineWithIcon";
import SubHeadline from "@/components/shared/SubHeadline";
import { LatestBlogItems } from "@/lib/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Button from "../shared/Button";

const LatestBlog = () => {
  return (
    <>
      <div
        className="pb-10:mb-20 container mb-0 sm:pt-24 pt-16 sm:pb-24 pb-10"
        data-aos="zoom-in"
      >
        <div className="flex flex-col items-center">
          <HeadlineWithIcon
            title="Latest Blog & Posts"
            homeIcon
            alignment="center"
          />
          <SubHeadline title="NEW TRENDING" />
        </div>
        <div className="flex flex-wrap justify-center pt-12 lg:flex-nowrap">
          {LatestBlogItems.map((item) => (
            <div
              key={item.id}
              className="mb-6 basis-full px-0 md:basis-1/2 md:px-4 lg:mb-0 lg:basis-1/3"
            >
              <div className="group p-6 shadow-[0_4px_18px_0_rgba(194,200,213,0.3)]">
                <div className="relative h-[218px] overflow-hidden">
                  <Link
                    href={item.link}
                    className="relative before:absolute before:left-0 before:top-0 before:hidden before:size-full before:bg-black before:opacity-0 before:content-[''] group-hover:before:block group-hover:before:opacity-25"
                  >
                    <Image
                      src={item.image}
                      alt="Blog Card Image"
                      className="relative z-[-1] w-full scale-100 transition-all duration-500 group-hover:scale-110"
                    />
                  </Link>
                </div>
                <div>
                  <div className="relative z-[2] -mt-8 inline-block rounded-[0_4px_4px_4px] bg-primary px-4 py-3 text-center">
                    <span className="inline-block font-poppins text-2xl font-semibold leading-none text-white">
                      {item.date}
                    </span>
                    <span className="block text-lg font-medium leading-none text-white">
                      {item.month}
                    </span>
                  </div>
                  <ul className="flex flex-wrap items-center py-6 xl:flex-nowrap">
                    <li className="my-2 mr-5 flex basis-full items-center xl:my-0 xl:basis-auto">
                      <FontAwesomeIcon
                        icon={["fas", "user"]}
                        className="h-3 w-4 pr-1 font-normal text-primary-headline"
                      />
                      <Link
                        className="inline-block font-poppins text-[13px] font-semibold leading-none text-primary-headline hover:text-primary"
                        href={item.link}
                      >
                        {item.author}
                      </Link>
                    </li>
                    <li className="my-1 flex basis-full items-center font-poppins text-[13px] font-semibold  leading-none text-primary-headline xl:my-0 xl:basis-auto">
                      <FontAwesomeIcon
                        icon={["fas", "comment"]}
                        className="h-3 w-4 pr-1 text-primary-headline"
                      />
                      {item.comment} COMMENTS
                    </li>
                  </ul>
                  <h3>
                    <Link
                      className="mb-4 inline-block font-rokkitt text-[26px] font-bold text-secondary hover:text-primary"
                      href={item.link}
                    >
                      {item.title}
                    </Link>
                  </h3>
                </div>
                <div className="mb-[10px] mt-3">
                  <Button href={item.link} title="Read More" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestBlog;
