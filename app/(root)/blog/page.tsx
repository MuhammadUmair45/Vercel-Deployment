import InnerBanner from "@/components/global/inner-banner";
import propertybanner from "@/public/assets/images/property-banner.jpg";
import BlogPost from "@/components/blog/BlogPost";
import SideBar from "@/components/blog/SideBar";
import Pagination from "@/components/blog/Pagination";

const BlogPostContent = () => {
  return (
    <>
      <InnerBanner text="Blog" image={propertybanner} />
      <div className="container">
        <div className="flex flex-wrap gap-8 sm:py-24 py-16 lg:flex-nowrap">
          <div className="basis-full lg:basis-8/12">
            <BlogPost />
            <Pagination />
          </div>
          <div className="basis-full sm:pt-12 pt-8 lg:basis-4/12 lg:pt-0">
            <SideBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostContent;
