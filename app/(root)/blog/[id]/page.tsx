import Image from "next/image";
import Link from "next/link";
import { URLParams } from "@/types";
import { blogPostsContent } from "@/lib/data";
import InnerBanner from "@/components/blog/BlogBanner";
import { ContactForm } from "@/components/blog/BlogContactForm";
import propertybanner from "@/public/assets/images/property-banner.jpg";

import Sidebar from "@/components/blog/SideBar";
import { Calendar, User, MessageCircle } from "lucide-react";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: URLParams): Promise<Metadata> {
  const blogTitle = blogPostsContent
    .filter((item) => item.id === +params.id)
    .map((filteredItem) => filteredItem.title);

  return {
    title: `${blogTitle} - Real Estate`,
  };
}

const Page = ({ params }: URLParams) => {
  return (
    <>
      <InnerBanner text="Blog" image={propertybanner} />

      <div className="container pb-16 sm:pt-24 pt-16 lg:pb-24">
        <div className="flex flex-wrap gap-8 lg:flex-nowrap">
          <div className="basis-full lg:basis-8/12">
            {blogPostsContent
              .filter((item) => item.id === +params.id)
              .map((filteredItem) => (
                <div key={filteredItem.id}>
                  <div className="group relative overflow-hidden">
                    <div className="relative before:absolute before:left-0 before:top-0 before:hidden before:size-full before:bg-black before:opacity-0 before:content-[''] group-hover:before:block group-hover:before:opacity-35">
                      <Image
                        src={filteredItem.featuredImage}
                        alt="Blog Card Image"
                        className="relative z-[-1] w-full scale-100 transition-all group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="mb-11 border-b border-[#909090] bg-white pb-16">
                    <div>
                      <div className="mb-7 mt-10 flex sm:mb-9">
                        <ul className="flex flex-wrap items-center sm:flex-nowrap">
                          <li className="mb-3 mr-5 flex basis-full items-center sm:mb-0 sm:basis-auto">
                            <User className="mr-1 size-4 font-normal text-primary-headline" />
                            <span className="inline-block pr-2 font-poppins text-base leading-none text-primary-headline">
                              by{" "}
                            </span>
                            <Link
                              className="inline-block font-poppins text-base leading-none text-primary-headline hover:text-primary"
                              href="#"
                            >
                              {filteredItem.author}
                            </Link>
                          </li>
                          <li className="mb-3 mr-5 flex basis-full items-center font-poppins text-base leading-none text-primary-headline sm:mb-0 sm:basis-auto">
                            <Calendar className="mr-2 size-4 font-normal text-primary-headline" />
                            {filteredItem.date}
                          </li>
                          <li className="sm:mr-5 mr-0 flex items-center sm:basis-auto font-poppins text-base leading-none text-primary-headline">
                            <MessageCircle className="mr-2 size-4 font-normal text-primary-headline" />
                            {filteredItem.comments}
                          </li>
                        </ul>
                      </div>
                      <h3>
                        <span className="mb-3 inline-block text-[32px] leading-none font-bold text-[#101010]">
                          {filteredItem.title}
                        </span>
                      </h3>
                    </div>
                    <div className="mt-4 leading-7 text-primary-headline">
                      {filteredItem.singleContent}
                    </div>
                    <div className="flex items-center pt-6">
                      <h3 className="relative mr-5 pl-5 font-poppins text-lg font-bold leading-5 text-[#101010] before:absolute before:left-0 before:top-1/2 before:size-2 before:-translate-y-1/2 before:bg-primary before:content-['']">
                        Tags :
                      </h3>
                      <Link
                        className="mr-[5px] inline-block rounded-[6px] bg-background-blue px-5 py-[10px] text-base font-semibold text-[#101010] hover:bg-primary hover:text-white"
                        href={filteredItem.linkHref}
                      >
                        {filteredItem.tag}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            <div>
              <ContactForm />
            </div>
          </div>
          <div className="basis-full pt-9 lg:basis-4/12 lg:pt-0">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
