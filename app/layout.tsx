import type { Metadata } from "next";
import { Poppins, Rokkitt } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import AOSWrapper from "@/components/aos/AOSWrapper";
import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faPinterest,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
// import Footer from "@/components/global/Footer";
// import { Toaster } from "@/components/ui/toaster";
// library.add(faFacebookF, faTwitter, faPinterest, faDribbble);

import {
  faChevronRight,
  faArrowRight,
  faMailBulk,
  faHome,
  faScrewdriver,
  faHeadphones,
  faCalendar,
  faUserTie,
  faVectorSquare,
  faBed,
  faBath,
  faCar,
  faLocationDot,
  faCouch,
  faAngleUp,
  faBuilding,
  faQuoteLeft,
  faStar,
  faUser,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/global/Footer";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const rokkitt = Rokkitt({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rokkitt",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

library.add(
  faFacebookF,
  faTwitter,
  faPinterest,
  faDribbble,
  faChevronRight,
  faArrowRight,
  faMailBulk,
  faHome,
  faScrewdriver,
  faHeadphones,
  faCalendar,
  faUserTie,
  faVectorSquare,
  faBed,
  faBath,
  faCar,
  faLocationDot,
  faCouch,
  faAngleUp,
  faBuilding,
  faQuoteLeft,
  faStar,
  faUser,
  faComment
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rokkitt.variable}`}>
        <AOSWrapper>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </AOSWrapper>
      </body>
    </html>
  );
}
