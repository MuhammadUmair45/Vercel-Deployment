import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Twitter, User } from "lucide-react";
import { TeamMembers } from "@/types";

interface TopContentProps {
  data: TeamMembers[];
}

const TopContent = ({ data }: TopContentProps) => {
  return (
    <>
      {data.map((item) => (
        <>
          <div className="container sm:my-24 my-16">
            <div
              key={item.id}
              className="flex flex-wrap gap-16 bg-background-blue p-12 lg:flex-nowrap"
            >
              <div className="relative basis-full before:absolute before:left-[-50px] before:top-[-50px] before:z-0 before:h-[calc(100%+100px)] before:w-[calc(50%+50px)] before:bg-secondary before:content-[''] lg:basis-5/12">
                <Image
                  src={item.image}
                  alt="Agent Image"
                  className="relative z-[2] w-full"
                />
              </div>
              <div className="ml-[-22.5px] basis-full pt-12 md:-ml-0 lg:basis-7/12">
                <div className="relative z-[2] ml-0 flex w-[300px] items-center bg-primary p-5 lg:ml-[-135px]">
                  <User className="size-[60px] bg-white p-3 text-black" />
                  <div className="pl-4 *:text-white">
                    <h3 className="mb-2 text-[32px] font-semibold">
                      {item.name}
                    </h3>
                    <h4 className="font-poppins text-base font-normal leading-none">
                      {item.designation}
                    </h4>
                  </div>
                </div>
                <div className="pt-12">
                  <p className="w-full max-w-full text-base leading-7 text-primary-headline lg:w-[480px]">
                    {item.text}
                  </p>
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
                  <h3 className="my-6 inline-block font-rokkitt text-xl font-semibold leading-7 text-secondary">
                    Follow Me:
                  </h3>
                  <ul className="flex">
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
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default TopContent;
