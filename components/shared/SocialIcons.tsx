import React from "react";
import { socialLinks } from "@/lib/dataWithJSX";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface socialIconsClassesProps {
  type: string;
}

const SocialIcons = ({ type }: socialIconsClassesProps) => {
  let customClasses = "";
  let listClasses = "";

  if (type === "1") {
    customClasses =
      "text-white hover:text-secondary transition h-[24px] w-[24px]";
    listClasses = "mt-0 lg:mt-0";
  } else if (type === "2") {
    customClasses =
      "text-white hover:bg-primary hover:border-primary transition border border-border border-solid p-3 h-[48px] w-[48px] flex";
    listClasses = "mt-5 lg:mt-0";
  }

  return (
    <ul className={`order-2 flex ${listClasses} lg:order-2`}>
      {socialLinks.map((item) => (
        <li key={item.id} className="px-1.5">
          <Link
            href={item.link}
            className={`block ${customClasses} size-[24px]`}
          >
            {item.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
