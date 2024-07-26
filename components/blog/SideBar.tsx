import Link from "next/link";
import { blogCategories, blogPostsContent, blogTags } from "@/lib/data";
import { Calendar, Search } from "lucide-react";

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
          Blog Catagories
        </h3>
        <ul>
          {blogCategories.map((item) => (
            <li key={item.id} className="mb-[10px]">
              <Link
                className="block border border-dotted border-primary-headline px-[30px] py-3 text-[17px] text-primary-headline transition-colors hover:border-primary hover:text-primary"
                href={`/blog/category/${item.id}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-14 bg-background-blue px-[30px] pb-0 pt-9">
        <h3 className="relative mb-[25px] pl-5 text-2xl font-semibold leading-5 text-[#101010] before:absolute before:left-0 before:top-1/2 before:size-2 before:-translate-y-1/2 before:bg-primary before:content-['']">
          Popular Post
        </h3>
        <ul>
          {blogPostsContent.map((item) => (
            <>
              {item.batch === "popular" && (
                <li
                  key={item.id}
                  className="mb-7 border-b border-[#dddddd] pb-7 last-of-type:border-b-0"
                >
                  <Link
                    className="font-poppins text-[17px] font-medium leading-5 text-[#101010] hover:text-primary"
                    href={item.linkHref}
                  >
                    {item.title}
                  </Link>
                  <span className="relative block pl-6 text-sm leading-6 text-primary-headline">
                    <Calendar className="absolute left-0 mt-[2px] h-5 w-[14px] text-primary" />
                    {item.date}
                  </span>
                </li>
              )}
            </>
          ))}
        </ul>
      </div>

      <div className="mt-14 bg-background-blue px-[30px] py-9">
        <h3 className="relative mb-[25px] pl-5 text-2xl font-semibold leading-5 text-[#101010] before:absolute before:left-0 before:top-1/2 before:size-2 before:-translate-y-1/2 before:bg-primary before:content-['']">
          Tags
        </h3>
        <ul>
          {blogTags.map((item) => (
            <>
              <li key={item.id} className="inline-block">
                <Link
                  className="mb-2 mr-[5px] inline-block rounded-[6px] bg-secondary px-5 py-[10px] font-poppins text-base font-semibold text-white hover:bg-primary hover:text-white"
                  href={`/blog/tag/${item.id}`}
                >
                  {item.name}
                </Link>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
