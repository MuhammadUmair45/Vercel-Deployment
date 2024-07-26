import Image from "next/image";
import Link from "next/link";
import { blogPostsContent } from "@/lib/data";
import { User, MessageCircle, Calendar } from "lucide-react";
import Button from "../shared/Button";

const BlogPost = () => {
  return (
    <>
      {blogPostsContent.map((item) => (
        <div
          key={item.id}
          className="mb-[60px] basis-1/2 border-b border-[#909090] pb-9"
        >
          <div className="group relative overflow-hidden">
            <div className="relative before:absolute before:left-0 before:top-0 before:hidden before:size-full before:bg-black before:opacity-0 before:content-[''] group-hover:before:block group-hover:before:opacity-35">
              <Image
                src={item.featuredImage}
                alt="Blog Card Image"
                className="relative z-[-1] w-full scale-100 transition-all group-hover:scale-110"
              />
              <Link
                className="absolute left-1/2 top-1/2 inline-block -translate-x-1/2 -translate-y-1/2  scale-0 rounded bg-primary px-4 py-2 text-lg font-semibold text-white transition delay-200 ease-in group-hover:scale-100"
                href={item.linkHref}
              >
                Read More
              </Link>
            </div>
          </div>
          <div>
            <div className="mb-8 mt-10 flex flex-wrap sm:flex-nowrap">
              <Link
                className="mr-5 inline-block bg-primary px-[14px] py-[7px] font-poppins text-base font-medium text-white transition-colors hover:bg-secondary"
                href="#"
              >
                {item.category}
              </Link>
              <ul className="flex basis-full flex-wrap items-center pt-7 *:mt-2 sm:basis-auto sm:flex-nowrap sm:pt-0 sm:*:mt-0 ">
                <li className="sm:mr-5 mr-0 flex items-center basis-[60%] sm:basis-auto">
                  <User className="mr-1 size-4 font-normal text-primary-headline" />
                  <span className="inline-block pr-2 font-poppins sm:text-base text-[14px] leading-none text-primary-headline">
                    by{" "}
                  </span>
                  <Link
                    className="inline-block font-poppins sm:text-base text-[14px] leading-none text-primary-headline hover:text-primary"
                    href="#"
                  >
                    {item.author}
                  </Link>
                </li>
                <li className="sm:mr-5 mr-0 flex items-center font-poppins sm:text-base text-[14px] leading-none text-primary-headline basis-[40%] sm:basis-auto">
                  <Calendar className="mr-2 size-4 font-normal text-primary-headline" />
                  {item.date}
                </li>
                <li className="mr-5  flex items-center font-poppins text-base leading-none text-primary-headline basis-[44%] sm:basis-auto">
                  <MessageCircle className="mr-2 size-4 font-normal text-primary-headline" />
                  {item.comments}
                </li>
              </ul>
            </div>
            <h3>
              <Link
                className="mb-3 inline-block text-[32px] font-bold text-[#101010] hover:text-primary"
                href={item.linkHref}
              >
                {item.title}
              </Link>
            </h3>
            <p className="leading-7 text-primary-headline">{item.excerpt}</p>
            <div className="mt-6">
              <Button href={item.linkHref} title="Read More" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogPost;
