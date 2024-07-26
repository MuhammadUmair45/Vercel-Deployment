"use client";
import InnerBanner from "@/components/global/inner-banner";
import propertybanner from "@/public/assets/images/property-banner.jpg";
import BlogPost from "@/components/blog/BlogPostGrid";
import { usePathname } from "next/navigation";
import Pagination from "@/components/blog/Pagination";

const capitalizeEachWord = (string: string) => {
  return string
    .split(" ")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const BlogPostContent = () => {
  const pathname = usePathname().replace(/\//g, ""); // Remove slashes
  const formattedText = capitalizeEachWord(pathname.replace(/-/g, " ")); // Replace hyphens with spaces and capitalize each word

  return (
    <>
      <InnerBanner text={formattedText} image={propertybanner} />
      <div className="container sm:py-24 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <BlogPost />
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default BlogPostContent;
