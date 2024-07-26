"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Cards from "@/components/shared/Cards";
import { CardsContentInfo, buttonData } from "@/lib/data";

const FilterableDivs = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  useEffect(() => {
    AOS.init({
      duration: 600, // Set the animation duration here
    });
  }, []);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS on filter change
  }, [activeFilter]);

  const filterDivs = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="mt-12">
      <div
        id="myBtnContainer"
        className="flex flex-wrap justify-center *:mr-4 *:text-base *:font-semibold lg:flex-nowrap"
      >
        {buttonData.map((buttonItem, index) => (
          <button
            key={index}
            className={
              activeFilter === buttonItem.filter
                ? "btn active mb-3 border border-primary px-3 py-2 text-primary"
                : "btn mb-3 border-spacing-2 border border-secondary px-3 py-2 text-secondary hover:border-primary hover:text-primary"
            }
            onClick={() => filterDivs(buttonItem.filter)}
          >
            {buttonItem.label}
          </button>
        ))}
      </div>

      <TransitionGroup className="flex flex-wrap pt-12">
        {CardsContentInfo.filter(
          (item) =>
            activeFilter === "all" || item.category.includes(activeFilter)
        ).map((item) => (
          <CSSTransition key={item.id} timeout={300} classNames="zoom">
            <div
              className="filterDiv basis-full md:basis-1/2 lg:basis-1/3"
              // data-aos="zoom-in"
            >
              <Cards data={[item]} showStatus showIconWithBg squareSizeWithBg />
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default FilterableDivs;
