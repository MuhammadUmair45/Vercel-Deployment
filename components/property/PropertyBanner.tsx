import Image, { StaticImageData } from "next/image";
import innerbanner from "@/public/assets/images/property-banner.jpg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface URLProps {
  name: string;
}

const InnerBanner = ({
  text,
  image,
}: {
  text?: string;
  image?: StaticImageData;
  name?: URLProps;
}) => {
  return (
    <div className="relative mt-[-32.5px] overflow-hidden py-[70px] pb-32 pt-44 before:absolute before:left-0 before:top-0 before:z-[2] before:size-full before:bg-black before:opacity-60 before:content-['']">
      <Image
        src={image || innerbanner}
        alt="Page Banner With Title"
        fill={true}
        className="object-cover"
      />
      <div className="container relative z-[3]">
        <h1 className="block text-center font-rokkitt text-[66px] font-bold leading-none text-white">
          {text}
        </h1>
      </div>
      <div className="container relative z-[3]">
        Property Details
        <Breadcrumb>
          <BreadcrumbList className="mb-9 mt-3 justify-center">
            <BreadcrumbItem>
              <BreadcrumbLink
                className="relative mr-1 inline-block pl-5 text-lg font-medium uppercase text-white before:absolute before:left-0 before:top-[10px] before:size-2 before:bg-primary before:content-[''] hover:text-primary"
                href="/properties"
              >
                PROPERTIES
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="relative pl-5 text-lg font-medium uppercase text-primary before:absolute before:left-0 before:top-[10px] before:size-2 before:bg-primary before:content-['']">
                {text}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default InnerBanner;
