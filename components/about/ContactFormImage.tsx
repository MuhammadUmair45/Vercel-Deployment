import Image from "next/image";
import { ContactForm } from "@/components/shared/ContactForm";
import contactformimage from "@/public/assets/images/contact-form-image.jpg";
import contactformbg from "@/public/assets/images/contact-form-bg.jpg";
import HeadlineWithIcon from "@/components/shared/HeadlineWithIcon";

const ContactFormImage = () => {
  return (
    <>
      <div className="relative sm:pb-0 pb-9 before:absolute before:left-0 before:top-0 before:z-[1] before:size-full before:bg-black before:opacity-90 before:content-['']">
        <Image
          src={contactformbg}
          alt="Contact Form Bg"
          fill={true}
          className="z-0 object-cover"
        />
        <div className="container relative z-[3]">
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="basis-full sm:pt-24 sm:pb-24 pt-14 pb-12 lg:basis-1/2">
              <HeadlineWithIcon
                title="About Property"
                alignment="start"
                borderColor="primary"
                headlineColor="white"
                arrowColor="primary"
              />
              <div className="pt-7">
                <ContactForm />
              </div>
            </div>
            <div className="basis-full lg:basis-1/12"></div>
            <div className="relative mb-8 basis-full before:absolute before:inset-[22px] before:z-[2] before:border-[20px] before:border-primary before:content-[''] lg:mb-0 lg:basis-5/12">
              <Image
                src={contactformimage}
                alt="Contact Form Image"
                fill={true}
                className="object-cover relative-important-mbl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFormImage;
