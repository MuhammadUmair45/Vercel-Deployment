import Image from "next/image";
import Link from "next/link";
import { blogPostsContent } from "@/lib/data";
import { User, MessageCircle, Calendar } from "lucide-react";
import Button from "../shared/Button";

const BlogPost = () => {
  return (
    <>
      {blogPostsContent.map((item) => (
        <div key={item.id} className="mb-[60px] border-b border-[#909090] pb-9">
          <div className="group relative overflow-hidden">
            <div className="relative before:absolute before:left-0 before:top-0 before:hidden before:size-full before:bg-black before:opacity-0 before:content-[''] group-hover:before:block group-hover:before:opacity-35">
              <Image
                src={item.featuredImage}
                alt="Blog Card Image"
                className="relative z-[-1] w-full scale-100 transition-all group-hover:scale-110"
              />
            </div>
          </div>
          <div>
            <div className="mb-8 mt-10 flex">
              <Link
                className="mr-5 inline-block bg-primary px-[14px] py-[7px] font-poppins text-base font-medium text-white transition-colors hover:bg-secondary"
                href="#"
              >
                {item.category}
              </Link>
              <ul className="flex items-center">
                <li className="mr-5 flex items-center">
                  <User className="mr-1 size-4 font-normal text-primary-headline" />
                  <span className="inline-block pr-2 font-poppins text-base leading-none text-primary-headline">
                    by{" "}
                  </span>
                  <Link
                    className="inline-block font-poppins text-base leading-none text-primary-headline hover:text-primary"
                    href="#"
                  >
                    {item.author}
                  </Link>
                </li>
                <li className="mr-5 flex items-center font-poppins text-base leading-none text-primary-headline">
                  <Calendar className="mr-2 size-4 font-normal text-primary-headline" />
                  {item.date}
                </li>
                <li className="mr-5  flex items-center font-poppins text-base leading-none text-primary-headline">
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
