"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import 'aos/src/js/aos.js';

const AOSWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize AOS settings
      once: true, // Whether animation should happen only once - while scrolling down
    });

    // Refresh AOS to detect changes in the DOM
    AOS.refresh();
  }, []);

  return <>{children}</>;
};

export default AOSWrapper;
