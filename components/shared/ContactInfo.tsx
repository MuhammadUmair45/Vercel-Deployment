import React from "react";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { IconName } from "@fortawesome/fontawesome-svg-core";

// interface contactInfoClassesProps {
//   type: string;
// }

interface ContactInfoItem {
  id: number;
  icon: React.ReactNode | string;
  title: string;
  text: string;
}

interface ContactInfoProps {
  type: string;
  data: ContactInfoItem[];
}

const ContactInfo = ({ type, data }: ContactInfoProps) => {
  // let iconClasses: string;
  let headlineClasses: string;
  let textClasses: string;
  let iconWrapperClasses: string;
  let extraClasses: string = "";
  let rowClasses: string = "";

  if (type === "1") {
    iconWrapperClasses =
      "flex w-12 h-12 border border-dashed border-secondary p-3 mr-5";
    // iconClasses =
    //   "p-3 border border-primary-headline border-dashed h-12 w-12 mr-5";
    headlineClasses = "text-[15px] font-poppins text-[#101010]";
    textClasses = "text-primary-headline text-[15px] font-poppins";
    rowClasses = "justify-start";
    extraClasses = "hidden";
  }

  if (type === "2") {
    iconWrapperClasses = "flex w-14 h-14 p-2 pt-0 mr-3";
    // iconClasses = "p-2 text-primary h-12 w-12 mr-3";
    headlineClasses = "text-[18px] font-poppins text-secondary";
    textClasses = "text-primary-headline text-[15px] font-poppins";
    rowClasses = "justify-end";
    extraClasses = "lg:w-[20%] xl:w-1/3";
  }

  return (
    <div className="flex grow">
      <div className={`${extraClasses}`}></div>
      <ul
        className={`flex grow flex-wrap lg:w-2/3 lg:flex-nowrap ${rowClasses} `}
      >
        {data.map((item) => {
          return (
            <li
              key={item.id}
              className="mb-4 flex basis-full items-start pl-6 md:basis-1/2 lg:mb-0"
            >
              {isEmail(item.text) ? (
                <>
                  <div className={`${iconWrapperClasses} `}>{item.icon}</div>
                  <div>
                    <h3 className={`${headlineClasses}`}>{item.title}</h3>
                    <Link
                      href={`mailto:${item.text}`}
                      className={`${textClasses} hover:text-primary`}
                    >
                      {item.text}
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className={`${iconWrapperClasses} `}>{item.icon}</div>
                  <div>
                    <h3 className={`${headlineClasses}`}>{item.title}</h3>
                    <div className={`${textClasses}`}>{item.text}</div>
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// Function to check if the text is an email address
const isEmail = (text: string) => {
  // Basic email pattern matching, you can adjust it based on your requirements
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
  return emailPattern.test(text);
};

export default ContactInfo;
