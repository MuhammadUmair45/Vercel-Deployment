import SocialIcons from "../shared/SocialIcons";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/lib/data";
import { footerContactInfo } from "@/lib/dataWithJSX";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../shared/Button";
import SubscribeForm from "../home/SubscribeForm";
import ContactInfo from "../shared/ContactInfo";

const Footer = () => {
  return (
    <footer className="overflow-hidden border-t border-[#eee]">
      <div className="container flex justify-end sm:pb-20 pb-28 sm:pt-10 pt-[60px] md:py-10">
        <ContactInfo type="2" data={footerContactInfo} />
      </div>
      <div className="h-full bg-background-footer pb-20 pt-24">
        <div className="container grid grid-cols-1 items-start justify-between gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <div className="mt-[-180px] rounded-tr-[50px] bg-primary px-8 py-12 text-white">
              <FontAwesomeIcon
                icon={["fas", "mail-bulk"]}
                className="mb-8 h-[80px] w-[90px]"
              />
              <h3 className="mb-8 font-normal leading-8">
                Sign up for company alert, news &amp; insights
              </h3>
              <SubscribeForm />
            </div>
          </div>
          <div className="">
            <h4 className="relative mb-10 pb-4 font-medium text-white before:absolute before:bottom-0 before:left-0 before:h-[4px] before:w-[50px] before:bg-primary before:content-['']">
              About Us
            </h4>
            <p className="mb-5 leading-[27px] text-primary-headline">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type.
            </p>
            <Button href="#" title="Book Visit" />
          </div>
          <div className="">
            <h4 className="relative mb-10 pb-4 font-medium text-white before:absolute before:bottom-0 before:left-0 before:h-[4px] before:w-[50px] before:bg-primary before:content-['']">
              Company Info
            </h4>
            <ul className="flex flex-col">
              {footerLinks.map((item) => {
                return (
                  <li key={item.id} className="pb-[10px]">
                    <Link
                      href={item.link}
                      className="flex text-[17px] text-primary-headline transition hover:text-primary"
                    >
                      <FontAwesomeIcon
                        icon={["fas", "chevron-right"]}
                        className="me-3 h-[22px] w-[9px]"
                      />{" "}
                      {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="">
            <h4 className="relative mb-10 pb-4 font-medium text-white before:absolute before:bottom-0 before:left-0 before:h-[4px] before:w-[50px] before:bg-primary before:content-['']">
              Quick Contact
            </h4>
            <p className="mb-5 text-[17px] leading-[27px] text-primary-headline">
              908K, San Francisco
            </p>
            <p className="mb-5 text-[17px] leading-[27px] text-primary-headline">
              If you have any questions or need help, feel free to contact with
              our team.
            </p>
            <Link href="tel:+1234567890" className="text-xl text-primary">
              +123 456 7890
            </Link>
          </div>
        </div>
        <div className="pt-20">
          <div className="container">
            <div className="relative overflow-hidden rounded-tl-[50px] before:absolute before:left-0 before:top-0 before:h-full before:w-screen before:rounded-tl-[50px] before:bg-black before:content-[''] md:overflow-visible">
              <div className="relative z-10 flex flex-wrap items-center justify-center rounded-tl-[50px] bg-black px-5 py-11 lg:flex-nowrap lg:justify-between">
                <p className="order-2 pt-4 text-primary-headline md:pt-0 lg:order-1">
                  ©2024, All Rights Reserved. With Love by OpusTech.
                </p>
                <Link href="#" className="px-14 lg:order-1">
                  <Image
                    src="/assets/images/logo-white.svg"
                    width={90}
                    height={90}
                    alt="Logo"
                  />
                </Link>
                <SocialIcons type="2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
