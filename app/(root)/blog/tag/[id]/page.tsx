import BlogPost from "@/components/blog/BlogPost";
import SideBar from "@/components/blog/SideBar";
import InnerBanner from "@/components/global/inner-banner";
import { blogTags } from "@/lib/data";
import { URLParams } from "@/types";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: URLParams): Promise<Metadata> {
  const blogTagsTitle = blogTags
    .filter((item) => item.id === +params.id)
    .map((filteredItem) => filteredItem.name);

  return {
    title: `${blogTagsTitle} - Lawyero`,
  };
}
const Page = ({ params }: URLParams) => {
  return (
    <>
      {blogTags
        .filter((item) => item.id === +params.id)
        .map((item) => (
          <InnerBanner text={item.name} key={item.id} />
        ))}
      <div className="container">
        <div className="flex flex-wrap sm:gap-8 gap-0 sm:py-24 py-16 pb-14 lg:flex-nowrap">
          <div className="basis-full lg:basis-8/12">
            <BlogPost />
          </div>
          <div className="basis-full sm:pt-12 pt-0 lg:basis-4/12 lg:pt-0">
            <SideBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
