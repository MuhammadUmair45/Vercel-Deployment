import { Mail, MapPin, Phone } from "lucide-react";
import { ContactPageInfoContent } from "@/lib/data";

const ContactPageInfo = () => {
  return (
    <>
      <div className="container sm:py-24 py-16">
        <div className="grid gap-7 md:grid-cols-2  xl:grid-cols-3">
          <div className="group border border-transparent bg-background-blue p-10  transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:border-primary md:p-5  lg:p-10">
            <div className="flex">
              <div className="flex size-[70px] items-center justify-center rounded-full bg-white text-secondary group-hover:bg-secondary group-hover:text-white">
                <Mail />
              </div>
              <div className="ml-6">
                <h3 className="mb-1 text-[26px] leading-7 text-primary">
                  Email Address
                </h3>
                <p className="w-44 text-primary-headline">
                  Sent mail asap anytime
                </p>
              </div>
            </div>
            <ul className="pt-5">
              <li>
                <a
                  className="leading-7 text-primary"
                  href={`mailto:{ContactPageInfoContent.email1}`}
                >
                  {ContactPageInfoContent.email1}
                </a>
              </li>
              <li>
                <a
                  className="leading-7 text-primary"
                  href={`mailto:{ContactPageInfoContent.email2}`}
                >
                  {ContactPageInfoContent.email2}
                </a>
              </li>
            </ul>
          </div>
          <div className="group border border-transparent bg-background-blue p-10  transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:border-primary md:p-5  lg:p-10">
            <div className="flex">
              <div className="flex size-[70px] items-center justify-center rounded-full bg-white text-secondary group-hover:bg-secondary group-hover:text-white">
                <Phone />
              </div>
              <div className="ml-6">
                <h3 className="mb-1 text-[26px] leading-7 text-primary">
                  Phone Number
                </h3>
                <p className="w-44 text-primary-headline">
                  help/call us asap anytime
                </p>
              </div>
            </div>
            <ul className="pt-5">
              <li>
                <a
                  className="leading-7 text-primary"
                  href={`mailto:{ContactPageInfoContent.phone1}`}
                >
                  {ContactPageInfoContent.phone1}
                </a>
              </li>
              <li>
                <a
                  className="leading-7 text-primary"
                  href={`mailto:{ContactPageInfoContent.phone2}`}
                >
                  {ContactPageInfoContent.phone2}
                </a>
              </li>
            </ul>
          </div>
          <div className=" group border border-transparent bg-background-blue p-10  transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:border-primary md:p-5  lg:p-10">
            <div className="flex">
              <div className="flex size-[70px] items-center justify-center rounded-full bg-white text-secondary group-hover:bg-secondary group-hover:text-white">
                <MapPin />
              </div>
              <div className="ml-6">
                <h3 className="mb-1 text-[26px] leading-7 text-primary">
                  Office Address
                </h3>
                <p className="w-44 text-primary-headline">
                  Sent mail asap anytime
                </p>
              </div>
            </div>
            <ul className="pt-5">
              <li className="leading-7 text-primary-headline">
                {ContactPageInfoContent.address1}
              </li>
              <li className="leading-7 text-primary-headline">
                {ContactPageInfoContent.address2}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPageInfo;
