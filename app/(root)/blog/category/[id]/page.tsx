import BlogPost from "@/components/blog/BlogPost";
import SideBar from "@/components/blog/SideBar";
import InnerBanner from "@/components/global/inner-banner";
import { blogCategories } from "@/lib/data";
import { URLParams } from "@/types";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: URLParams): Promise<Metadata> {
  const blogCategoriesTitle = blogCategories
    .filter((item) => item.id === +params.id)
    .map((filteredItem) => filteredItem.title);

  return {
    title: `${blogCategoriesTitle} - Lawyero`,
  };
}

const Page = ({ params }: URLParams) => {
  return (
    <>
      {blogCategories
        .filter((item) => item.id === +params.id)
        .map((item) => (
          <InnerBanner text={item.title} key={item.id} />
        ))}
      <div className="container">
        <div className="flex flex-wrap gap-8 sm:py-24 py-16 lg:flex-nowrap">
          <div className="basis-full lg:basis-8/12">
            <BlogPost />
          </div>
          <div className="basis-full pt-12 lg:basis-4/12 lg:pt-0">
            <SideBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
