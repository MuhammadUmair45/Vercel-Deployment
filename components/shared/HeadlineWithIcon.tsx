import React from "react";
import { ChevronUp, Home } from "lucide-react";

interface titleProps {
  title: string;
  homeIcon?: boolean;
  borderColor?: string;
  headlineColor?: string;
  arrowColor?: string;
  alignment?: string;
}

const HeadlineWithIcon = ({
  title,
  homeIcon,
  borderColor,
  headlineColor,
  arrowColor,
  alignment,
}: titleProps) => {
  return (
    <div className={`flex flex-col items-center`}>
      {homeIcon ? (
        <>
          <div data-aos="fade-up">
            <Home className="mb-5 size-10 text-primary" data-aos="fade-up" />
          </div>
          <h2 className="text-center leading-8" data-aos="fade-up">
            {title}
          </h2>
        </>
      ) : (
        <>
          <div
            className={`border-${borderColor} relative mb-6 flex flex-col items-center border-b-2 pb-5 before:absolute before:bottom-0 before:left-1/2 before:h-[2px] before:w-8/12 before:-translate-x-1/2 before:content-['']`}
          >
            <ChevronUp className={`text-${arrowColor} mb-2 size-10`} />
            <h2 className={`text-${headlineColor} leading-8`}>{title}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default HeadlineWithIcon;
