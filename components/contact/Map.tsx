import { ContactMapAddressContent } from "@/lib/data";
import HeadlineWithIcon from "@/components/shared/HeadlineWithIcon";
import Image from "next/image";
import ourofficeimg from "@/public/assets/images/contact-our-office.jpg";

const ContactMap = () => {
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="basis-full md:basis-3/5 lg:basis-[70%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5464675032367!2d-0.12209412414505072!3d51.503189711011885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2s!4v1715684068790!5m2!1sen!2s"
            width="100%"
            height="420"
          ></iframe>
        </div>
        <div className="relative flex basis-full items-center justify-center py-10 before:absolute before:left-0 before:top-0 before:z-[2] before:size-full before:bg-[#101010] before:opacity-80 before:content-[''] md:basis-2/5 md:py-0 lg:basis-[30%]">
          <Image
            src={ourofficeimg}
            alt=""
            fill={true}
            className="w-full object-cover"
          />
          <div className="relative z-[3]">
            <HeadlineWithIcon
              title="Our Offices"
              alignment="center"
              borderColor="white"
              headlineColor="white"
              arrowColor="white"
            />
            <ul className="pt-2">
              {ContactMapAddressContent.map((item) => (
                <li key={item.id} className="text-center leading-7 text-white">
                  {item.address}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMap;
