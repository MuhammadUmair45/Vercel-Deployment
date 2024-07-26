import React from "react";

interface subHeadlineProp {
  title: string;
}

const SubHeadline = ({ title }: subHeadlineProp) => {
  return (
    <span
      data-aos="fade-up"
      className="relative block px-16 py-3 text-[15px] font-medium uppercase text-primary-headline before:absolute before:inset-y-0 before:left-0 before:m-auto before:h-[2px] before:w-[50px] before:bg-primary before:content-[''] after:absolute after:inset-y-0 after:right-0 after:m-auto after:h-[2px] after:w-[50px] after:bg-primary after:content-[''] md:text-[18px]"
    >
      {title}
    </span>
  );
};

export default SubHeadline;
