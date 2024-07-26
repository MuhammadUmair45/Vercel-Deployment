"use client";
// import { useRouter } from 'next/router';
import Link from "next/link";
import React, { useState } from "react";

import SocialIcons from "@/components/shared/SocialIcons";
import ContactInfo from "@/components/shared/ContactInfo";
import Image from "next/image";
import logo from "@/public/assets/logo-black.svg";
import logoWhite from "@/public/assets/logo-white.svg";
import menuData from "@/lib/data";
import { ArrowRight, Search, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

// import BlogSlug from "../shared/ActiveLink";
// import useActiveLink from "@/components/shared/ActiveLink";

// import BlogSlug from "../getRouter/getRouter";

import { contactinfo } from "@/lib/dataWithJSX";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  const currentPathname = usePathname();
  return (
    <header>
      <div className="hidden bg-secondary text-white md:block">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center pt-3 md:justify-between md:pt-5 lg:flex-nowrap lg:pt-0">
            <div className="md:basis-full md:text-center lg:basis-auto">
              Welcome to our Real Estate Company
            </div>
            <div className="relative z-10 py-3 font-medium text-secondary md:basis-full md:py-5 lg:basis-2/3 lg:translate-y-4 lg:pl-10 lg:pr-5 lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:h-full lg:before:w-screen lg:before:skew-x-[-25deg] lg:before:bg-primary lg:before:content-['']">
              <div className="relative flex flex-wrap justify-center text-white sm:flex-wrap md:flex-nowrap md:justify-between">
                <div className="basis-full pb-3 text-center md:basis-auto md:pb-0 md:text-left">
                  Have any question? +123 456 7890
                </div>
                <SocialIcons type="1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="relative z-[5] flex flex-wrap justify-between bg-secondary p-4 md:justify-start md:p-0">
          <div className="relative flex basis-full items-center pb-5 md:mr-5 lg:mr-0 lg:justify-center xl:justify-end">
            <div className="right-0 top-[58px] z-[3] w-full border-[3px] border-primary bg-white px-4 py-3 md:right-auto md:px-5 md:py-6">
              <input
                type="text"
                placeholder="Search"
                className="h-10 w-full border border-[#e0e0e0] bg-white py-[7px] pl-4 pr-10 text-black"
              />
            </div>
          </div>
          <div className="basis-1/2">
            <Link href="/">
              <Image src={logoWhite} alt="Logo" width={80} height={30} />
            </Link>
          </div>
          <div className="flex basis-1/2 items-center justify-end pl-0 md:pl-5 lg:hidden">
            <Sheet>
              <SheetTrigger className="bg-primary p-2">
                <span className="mb-1 block h-[3px] w-8 rounded-md bg-white"></span>
                <span className="mb-1 block h-[3px] w-8 rounded-md bg-white"></span>
                <span className="block h-[3px] w-8 rounded-md bg-white"></span>
              </SheetTrigger>
              <SheetContent className="border-none text-white">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/">
                      <Image
                        src={logoWhite}
                        alt="Logo"
                        width={100}
                        height={30}
                      />
                    </Link>
                  </SheetTitle>
                  <SheetDescription>
                    <ul className="flex flex-wrap">
                      <li className="w-full text-left">
                        <Link
                          className="relative block border-b border-[#37434b] py-[18px] font-poppins text-base font-normal leading-relaxed text-white lg:px-[14px] xl:px-7"
                          href="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="relative  w-full text-left">
                        <Link
                          className="relative block border-b border-[#37434b] py-[18px] font-poppins text-base font-normal leading-relaxed text-white lg:px-[14px] xl:px-7"
                          href="#"
                        >
                          <Collapsible>
                            <CollapsibleTrigger>
                              Properties
                              <ChevronDown
                                size="15"
                                className="absolute right-0 top-[21px]"
                              />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <ul className="mt-[18px] w-full border-t border-[#37434b] transition delay-100 duration-500">
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/property-grid"
                                  >
                                    Property Index
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/property-grid"
                                  >
                                    Property Grid
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block px-4 py-[10px] pb-0 text-[15px] text-white hover:text-primary"
                                    href="/properties/northwest-office"
                                  >
                                    Single Property
                                  </Link>
                                </li>
                              </ul>
                            </CollapsibleContent>
                          </Collapsible>
                        </Link>
                      </li>
                      <li className="relative  w-full text-left">
                        <Link
                          className="block border-b border-[#37434b] py-[18px] font-poppins text-base font-normal leading-relaxed text-white lg:px-[14px] xl:px-7"
                          href="#"
                        >
                          <Collapsible>
                            <CollapsibleTrigger>
                              Pages
                              <ChevronDown
                                size="15"
                                className="absolute right-0 top-[21px]"
                              />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <ul className="mt-[18px] w-full border-t border-[#37434b] transition delay-100 duration-500">
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/about-us"
                                  >
                                    About Uss
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/our-agents"
                                  >
                                    Our Agents
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/our-agents/atohi-diwali"
                                  >
                                    Agent Details
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block px-4 py-[10px] pb-0 text-[15px] text-white hover:text-primary"
                                    href="/agency"
                                  >
                                    Agencies
                                  </Link>
                                </li>
                              </ul>
                            </CollapsibleContent>
                          </Collapsible>
                        </Link>
                      </li>
                      <li className="relative w-full text-left">
                        <Link
                          className="block border-b border-[#37434b] py-[18px] font-poppins text-base font-normal leading-relaxed text-white lg:px-[14px] xl:px-7"
                          href="#"
                        >
                          <Collapsible>
                            <CollapsibleTrigger>
                              Services
                              <ChevronDown
                                size="15"
                                className="absolute right-0 top-[21px]"
                              />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <ul className="mt-[18px] w-full border-t border-[#37434b] transition delay-100 duration-500">
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/services"
                                  >
                                    Services Index
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block px-4 py-[10px] pb-0 text-[15px] text-white hover:text-primary"
                                    href="/services/property-management"
                                  >
                                    Single Service
                                  </Link>
                                </li>
                              </ul>
                            </CollapsibleContent>
                          </Collapsible>
                        </Link>
                      </li>
                      <li className="relative w-full text-left">
                        <Link
                          className="block border-b border-[#37434b] py-[18px] font-poppins text-base font-normal leading-relaxed text-white lg:px-[14px] xl:px-7"
                          href="#"
                        >
                          <Collapsible>
                            <CollapsibleTrigger>
                              Blog
                              <ChevronDown
                                size="15"
                                className="absolute right-0 top-[21px]"
                              />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <ul className="mt-[18px] w-full border-t border-[#37434b] transition delay-100 duration-500">
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/blog"
                                  >
                                    Blog
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/blog-grid"
                                  >
                                    Blog Grid
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block px-4 py-[10px] pb-0 text-[15px] text-white hover:text-primary"
                                    href="/blog/1"
                                  >
                                    Blog Post
                                  </Link>
                                </li>
                              </ul>
                            </CollapsibleContent>
                          </Collapsible>
                        </Link>
                      </li>
                      <li className="relative w-full text-left">
                        <Link
                          className="block border-b border-[#37434b] py-[18px] font-poppins text-base font-normal leading-relaxed text-white lg:px-[14px] xl:px-7"
                          href="#"
                        >
                          <Collapsible>
                            <CollapsibleTrigger>
                              FAQ’s
                              <ChevronDown
                                size="15"
                                className="absolute right-0 top-[21px]"
                              />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <ul className="mt-[18px] w-full border-t border-[#37434b] transition delay-100 duration-500">
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/faqs"
                                  >
                                    FAQ’s
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/pricing"
                                  >
                                    Pricing
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/process"
                                  >
                                    Process
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/privacy-policy"
                                  >
                                    Privacy Policy
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block px-4 py-[10px] pb-0 text-[15px] text-white hover:text-primary"
                                    href="/dbsvjgvfs"
                                  >
                                    404
                                  </Link>
                                </li>
                              </ul>
                            </CollapsibleContent>
                          </Collapsible>
                        </Link>
                      </li>
                      <li className="w-full  text-left">
                        <Link
                          className="block border-b border-[#37434b] py-[18px] font-poppins text-base font-normal leading-relaxed text-white lg:px-[14px] xl:px-7"
                          href="/contact-us"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <div className="container px-4 pb-14 pt-8 md:px-8 lg:py-14">
        <div className="flex flex-wrap items-center md:flex-wrap md:justify-center lg:flex-nowrap lg:justify-start">
          <div className="mb-5 hidden md:block lg:mb-0 lg:basis-[15%] xl:basis-1/4">
            <div className="">
              <Link href="/">
                <Image src={logo} alt="Logo" width={120} height={30} />
              </Link>
            </div>
          </div>
          <div className="flex justify-end md:-ml-6 md:pr-0 lg:ml-0 lg:basis-[85%] lg:pr-6 xl:basis-3/4">
            <ContactInfo type="1" data={contactinfo} />
          </div>
        </div>
      </div>
      <div className="container -mt-7 hidden md:block">
        <div className="relative z-[5] flex justify-between bg-secondary p-4 md:justify-start md:p-0">
          <div className="flex basis-2/3 items-center pl-0 md:pl-5 lg:hidden">
            <Sheet>
              <SheetTrigger className="bg-primary p-2">
                <span className="mb-1 block h-[3px] w-8 rounded-md bg-white"></span>
                <span className="mb-1 block h-[3px] w-8 rounded-md bg-white"></span>
                <span className="block h-[3px] w-8 rounded-md bg-white"></span>
              </SheetTrigger>
              <SheetContent className="border-none text-white">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/">
                      <Image
                        src={logoWhite}
                        alt="Logo"
                        width={100}
                        height={30}
                      />
                    </Link>
                  </SheetTitle>
                  <SheetDescription>
                    <ul className="flex flex-wrap">
                      <li className="w-full text-left">
                        <Link
                          className="relative block border-b border-[#37434b] py-[18px] font-poppins text-base font-normal leading-relaxed text-white lg:px-[14px] xl:px-7"
                          href="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="relative  w-full text-left">
                        <Link
                          className="relative block border-b border-[#37434b] py-[18px] font-poppins text-base font-normal leading-relaxed text-white lg:px-[14px] xl:px-7"
                          href="#"
                        >
                          <Collapsible>
                            <CollapsibleTrigger>
                              Properties
                              <ChevronDown
                                size="15"
                                className="absolute right-0 top-[21px]"
                              />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <ul className="mt-[18px] w-full border-t border-[#37434b] transition delay-100 duration-500">
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/property-grid"
                                  >
                                    Property Index
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/property-grid"
                                  >
                                    Property Grid
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block px-4 py-[10px] pb-0 text-[15px] text-white hover:text-primary"
                                    href="/properties/northwest-office"
                                  >
                                    Single Property
                                  </Link>
                                </li>
                              </ul>
                            </CollapsibleContent>
                          </Collapsible>
                        </Link>
                      </li>
                      <li className="relative  w-full text-left">
                        <Link
                          className="block border-b border-[#37434b] py-[18px] font-poppins text-base font-normal leading-relaxed text-white lg:px-[14px] xl:px-7"
                          href="#"
                        >
                          <Collapsible>
                            <CollapsibleTrigger>
                              Pages
                              <ChevronDown
                                size="15"
                                className="absolute right-0 top-[21px]"
                              />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <ul className="mt-[18px] w-full border-t border-[#37434b] transition delay-100 duration-500">
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/about-us"
                                  >
                                    About Us
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/our-agents"
                                  >
                                    Our Agents
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/our-agents/atohi-diwali"
                                  >
                                    Agent Details
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block px-4 py-[10px] pb-0 text-[15px] text-white hover:text-primary"
                                    href="/agency"
                                  >
                                    Agencies
                                  </Link>
                                </li>
                              </ul>
                            </CollapsibleContent>
                          </Collapsible>
                        </Link>
                      </li>
                      <li className="relative w-full text-left">
                        <Link
                          className="block border-b border-[#37434b] py-[18px] font-poppins text-base font-normal leading-relaxed text-white lg:px-[14px] xl:px-7"
                          href="#"
                        >
                          <Collapsible>
                            <CollapsibleTrigger>
                              Services
                              <ChevronDown
                                size="15"
                                className="absolute right-0 top-[21px]"
                              />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <ul className="mt-[18px] w-full border-t border-[#37434b] transition delay-100 duration-500">
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/services"
                                  >
                                    Services Index
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block px-4 py-[10px] pb-0 text-[15px] text-white hover:text-primary"
                                    href="/services/property-management"
                                  >
                                    Single Service
                                  </Link>
                                </li>
                              </ul>
                            </CollapsibleContent>
                          </Collapsible>
                        </Link>
                      </li>
                      <li className="relative w-full text-left">
                        <Link
                          className="block border-b border-[#37434b] py-[18px] font-poppins text-base font-normal leading-relaxed text-white lg:px-[14px] xl:px-7"
                          href="#"
                        >
                          <Collapsible>
                            <CollapsibleTrigger>
                              Blog
                              <ChevronDown
                                size="15"
                                className="absolute right-0 top-[21px]"
                              />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <ul className="mt-[18px] w-full border-t border-[#37434b] transition delay-100 duration-500">
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/blog"
                                  >
                                    Blog
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/blog-grid"
                                  >
                                    Blog Grid
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block px-4 py-[10px] pb-0 text-[15px] text-white hover:text-primary"
                                    href="/blog/1"
                                  >
                                    Blog Post
                                  </Link>
                                </li>
                              </ul>
                            </CollapsibleContent>
                          </Collapsible>
                        </Link>
                      </li>
                      <li className="relative w-full text-left">
                        <Link
                          className="block border-b border-[#37434b] py-[18px] font-poppins text-base font-normal leading-relaxed text-white lg:px-[14px] xl:px-7"
                          href="#"
                        >
                          <Collapsible>
                            <CollapsibleTrigger>
                              FAQ’s
                              <ChevronDown
                                size="15"
                                className="absolute right-0 top-[21px]"
                              />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <ul className="mt-[18px] w-full border-t border-[#37434b] transition delay-100 duration-500">
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/faqs"
                                  >
                                    FAQ’s
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/pricing"
                                  >
                                    Pricing
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/process"
                                  >
                                    Process
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block border-b border-[#37434b] px-4 py-[10px] text-[15px] text-white hover:text-primary"
                                    href="/privacy-policy"
                                  >
                                    Privacy Policy
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="block px-4 py-[10px] pb-0 text-[15px] text-white hover:text-primary"
                                    href="/dbsvjgvfs"
                                  >
                                    404
                                  </Link>
                                </li>
                              </ul>
                            </CollapsibleContent>
                          </Collapsible>
                        </Link>
                      </li>
                      <li className="w-full  text-left">
                        <Link
                          className="block border-b border-[#37434b] py-[18px] font-poppins text-base font-normal leading-relaxed text-white lg:px-[14px] xl:px-7"
                          href="/contact-us"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden basis-2/3 lg:block">
            <ul className="flex">
              {menuData.map((item, index) => (
                <li className="group relative" key={index}>
                  <Link
                    className={`relative inline-block border-b-[3px] border-transparent bg-transparent py-[18px] font-poppins text-base font-normal leading-relaxed text-white hover:border-primary hover:bg-[#ffffff1a] lg:px-[14px] xl:px-7 ${
                      item.href === currentPathname ? "active" : "" // Add active class if href matches current pathname
                    }`}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                  {item.subMenu.length > 0 && (
                    <ul className="absolute top-full z-10 w-60 origin-top-left scale-y-0 border-t-[3px] border-primary bg-white opacity-0 transition delay-100 duration-500 group-hover:scale-y-100 group-hover:opacity-100">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            className="block border-b border-[#0000001a] bg-white px-4 py-[10px] text-[15px] text-[#101010] hover:border-primary hover:bg-primary hover:text-white"
                            href={subItem.href}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex basis-1/12 items-center md:mr-5 lg:mr-0 lg:justify-center xl:justify-end">
            <Search
              className="size-12 cursor-pointer rounded-full border-2 border-dotted border-primary p-3 text-white"
              onClick={handleSearchClick}
            />
            {isSearchVisible && (
              <>
                <div className="absolute top-[58px] z-[3] border-[3px] border-primary bg-white px-5 py-6">
                  <input
                    type="text"
                    placeholder="Search"
                    className="h-10 border border-[#e0e0e0] bg-white py-[7px] pl-4 pr-10 text-black"
                  />
                  <Search className="absolute inset-y-0 right-8 m-auto size-5 text-black" />
                </div>
              </>
            )}
          </div>
          <div className="hidden basis-1/4 md:block">
            <div className="flex justify-end">
              <Link
                href="#"
                className='relative flex w-64 items-center overflow-hidden bg-primary py-5 pe-[90px] ps-8 font-medium text-white transition-all before:absolute before:right-[-12px] before:top-0 before:h-full before:w-[75px] before:skew-x-[-20deg] before:bg-secondary before:content-[""] hover:bg-black'
              >
                Book Visit
                <ArrowRight className="absolute inset-y-0 right-5 m-auto size-5 text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
