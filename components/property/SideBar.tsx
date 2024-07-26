import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { TeamMembers } from "@/types";

interface TopContentProps {
  data: TeamMembers[];
}

const PropertySideBar = ({ data }: TopContentProps) => {
  return (
    <>
      {data.map((item) => (
        <>
          <div key={item.id} className="mt-12 bg-background-blue p-6 ">
            <div className="flex items-center">
              <div className="relative size-[85px] shrink-0">
                <Image
                  src={item.image}
                  alt="Agent Image"
                  fill={true}
                  className="w-full rounded-full object-cover"
                />
              </div>
              <div className="pl-5">
                <h3 className="mb-2 text-[32px] font-semibold">
                  <Link href={`our-agents/${item.link}`}>{item.name}</Link>
                </h3>
                <h4 className="font-poppins text-base font-normal leading-none">
                  {item.designation}
                </h4>
              </div>
            </div>
            <ul className="pt-9">
              <li className="mb-4">
                <span className="inline-block w-[30%] font-rokkitt text-xl font-semibold text-secondary">
                  Phone :
                </span>
                <a
                  href="tel:{item.phone}"
                  className="font-poppins text-[15px] text-secondary hover:text-primary"
                >
                  {item.contact.phone}
                </a>
              </li>
              <li className="mb-4">
                <span className="inline-block w-[30%] font-rokkitt text-xl font-semibold text-secondary">
                  Email :
                </span>
                <a
                  href="mailto:{item.email}"
                  className="font-poppins text-[15px] text-secondary hover:text-primary"
                >
                  {item.contact.email}
                </a>
              </li>
              <li className="mb-4 flex">
                <span className="inline-block w-[30%] font-rokkitt text-xl font-semibold text-secondary">
                  Address :
                </span>
                <p className="font-poppins text-[15px] text-secondary">
                  {item.contact.address}
                </p>
              </li>
            </ul>
            <ul className="flex pt-5">
              <li className="flex items-center justify-center transition-transform hover:scale-90">
                <Link href={item.socialLinks.facebook}>
                  <Facebook
                    className="mr-3 size-[44px] cursor-pointer rounded-[8px] bg-primary
                        p-2 text-white hover:bg-secondary"
                  />
                </Link>
              </li>
              <li className="flex items-center justify-center transition-transform hover:scale-90">
                <Link href={item.socialLinks.twitter}>
                  <Twitter
                    className="mr-3 size-[44px] cursor-pointer rounded-[8px] bg-primary
                        p-2 text-white hover:bg-secondary"
                  />
                </Link>
              </li>
              <li className="flex items-center justify-center transition-transform hover:scale-90">
                <Link href={item.socialLinks.linkedin}>
                  <Linkedin
                    className="mr-3 size-[44px] cursor-pointer rounded-[8px] bg-primary
                        p-2 text-white hover:bg-secondary"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </>
      ))}
    </>
  );
};

export default PropertySideBar;
