import React from "react";
import { SpotIconProps } from "@/types";

interface iconPostition {
  data: SpotIconProps[];
  position?: "left" | "right";
}

const SpotlightWithLeftIcon = ({ data, position }: iconPostition) => {
  return (
    <div className="">
      <div className="hidden xl:block" data-aos="fade-left">
        {data.map((item) => {
          return (
            <div key={item.id} className="mb-10 flex items-start">
              {position === "left" && (
                <span className="inline-block size-[74px] shrink-0 overflow-hidden rounded-full border-2 border-primary">
                  {item.icon}
                </span>
              )}
              <div
                className={`${position === "left" ? "pl-5" : "pr-5"} ${position === "right" ? "text-right" : ""}`}
              >
                <h3 className="mb-[10px] text-[26px] font-semibold text-secondary">
                  {item.title}
                </h3>
                <div className="text-primary-headline">{item.text}</div>
              </div>
              {position === "right" && (
                <span className="inline-block size-[74px] shrink-0 overflow-hidden rounded-full border-2 border-primary">
                  {item.icon}
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="xl:hidden" data-aos="fade-left">
        {data.map((item) => {
          return (
            <div key={item.id} className="mb-10 flex items-start">
              <span className="inline-block size-[74px] shrink-0 overflow-hidden rounded-full border-2 border-primary">
                {item.icon}
              </span>
              <div className={`pl-5`}>
                <h3 className="mb-[10px] text-[26px] font-semibold text-secondary">
                  {item.title}
                </h3>
                <div className="text-primary-headline">{item.text}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpotlightWithLeftIcon;
