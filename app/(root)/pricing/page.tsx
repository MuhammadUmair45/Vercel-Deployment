import HeadlineWithIcon from "@/components/shared/HeadlineWithIcon";
import SubHeadline from "@/components/shared/SubHeadline";
import InnerBanner from "@/components/global/inner-banner";
import propertybanner from "@/public/assets/images/property-banner.jpg";
import AffordablePackageContent from "@/components/about/AffordablePackages";
import ServicesWithImage from "@/components/home/ServicesWithImage";
import ContactFormImage from "@/components/about/ContactFormImage";
import NewsLetter from "@/components/shared/NewsLetter";

const Pricing = () => {
  return (
    <>
      <InnerBanner text="Pricing" image={propertybanner} />
      <AffordablePackageContent />
      <div className="md:-mt-16 -mt-4 sm:mt-0">
        <ServicesWithImage />
      </div>
      <ContactFormImage />
      <div className="mb-12 flex flex-col items-center sm:pt-24 pt-16">
        <HeadlineWithIcon
          title="Feel Free to Contact"
          homeIcon
          alignment="center"
        />
        <SubHeadline title="SUBSCRIBE NEWSLETTER" />
      </div>
      <div className="container sm:pb-24 pb-16">
        <NewsLetter />
      </div>
    </>
  );
};

export default Pricing;
