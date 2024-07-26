import React from "react";

// import { BlobOptions } from "buffer";
import { StaticImageData } from "next/image";

export interface socialLinksProps {
  id: number;
  // icon: IconName;
  icon: React.ReactNode;
  link: string;
}
export interface contactinfoProps {
  id: number;
  icon: React.ReactNode | string;
  text: string;
  title: string;
}

export interface footerLinksProps {
  id: number;
  link: string;
  text: string;
}

export interface SpotIconProps {
  id: number;
  icon: React.ReactNode;
  // icon: string;
  title: string;
  text: string;
}

export interface NewsLetterProp {
  title: string;
  text: string;
  number: string;
}

export interface ButtonDataProps {
  label: string;
  filter: string;
}

export interface CardsContentProps {
  id: number;
  image: StaticImageData;
  date: string;
  admin: string;
  category: string;
  catogory: string;
  title: string;
  address: string;
  squarefit: number;
  bedroom: number;
  bathroom: number;
  garage: number;
  price: string;
  status: string;
  text: string;
  link: string;
  agent?: string;
}

export interface homeBannerItems {
  id: number;
  image: StaticImageData;
  title: string;
  address: string;
  bedroom: number;
  bathroom: number;
  livingroom: number;
  price: String;
}

export interface TestimonialSliderProps {
  id: number;
  testimonial: string;
  name: string;
  desingation: String;
}

export interface ImageWithTriangleProps {
  id: number;
  title: string;
}

export interface CardFilterData {
  id: number;
  category: string;
  // name: string;

  image: StaticImageData;
  date: string;
  admin: string;
  // catogory: string;
  title: string;
  address: string;
  squarefit: number;
  bedroom: number;
  bathroom: number;
  garage: number;
  price: string;
  status: string;
}
export interface LatestBlogProps {
  id: number;
  image: StaticImageData;
  date: string;
  month: string;
  author: string;
  comment: number;
  title: string;
  link: string;
}

export interface AboutWorkingStepsProps {
  id: number;
  icon: React.ReactNode;
  title: string;
  text: string;
}

export interface AboutAgentItemsProps {
  id: number;
  itemsPerPage?: number;
  image: StaticImageData;
  name: string;
  designation: string;
  link: string;
}

export interface FaqsProps {
  id: number;
  question: string;
  answer: string;
}

export interface CounterProps {
  id: number;
  icon: React.ReactNode;
  value: number;
  title: string;
}

export interface AffordablePackageProps {
  id: number;
  type?: boolean;
  plan: string;
  price: number;
  text: string;
  features1: string;
  features2: string;
  features3: string;
  features4: string;
  features5: string;
}

export interface LogosContentProps {
  id: number;
  image: StaticImageData;
}

export interface AgentCTAProp {
  title: string;
  text: string;
  link: string;
}
export interface AgencyContentProp {
  id: number;
  image: StaticImageData;
  title: string;
  address: string;
  text: string;
  email: string;
  phone: string;
  facebook: string;
  google: string;
}

export interface ProcessProp {
  id: number;
  image: StaticImageData;
  title: string;
  text: string;
  position: "left" | "right";
}

export interface TeamMembers {
  id: number;
  image: StaticImageData;
  name: string;
  designation: string;
  text: string;
  link: string;
  propertyName?: string;
  contact: {
    phone: number;
    email: string;
    address: string;
  };
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
  experience: {
    id: number;
    years: string;
    title: string;
  }[];
}

export interface ContactPageInfoProp {
  email1: string;
  email2: string;
  phone1: string;
  phone2: string;
  address1: string;
  address2: string;
}

export interface ContactMapAddressProp {
  id: number;
  address: string;
}

export interface URLParams {
  params: { id: string };
  searchParams?: { [key: string]: string };
}

export interface blogPostsProps {
  id: number;
  featuredImage: StaticImageData;
  title: string;
  linkHref: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  comments: number;
  batch?: string;
  singleContent: string;
  tag?: string;
}

export interface blogCategoriesProps {
  id: number;
  title: string;
}

export interface blogTagsProps {
  id: number;
  name: string;
}

export interface ServiceCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}

export interface ServiceDetail {
  id: string;
  name: string;
  mainImage: StaticImageData;
  text: string;
  image: StaticImageData;
  moreText?: string;
  text2?: string;
  text3?: string;
  text4?: string;
}
export interface propertyReviewProps {
  id: number;
  headshot: StaticImageData;
  name: string;
  date: string;
  text: String;
  image?: StaticImageData;
}

export interface StatsWithIconProps {
  id: number;
  amount: number;
  text: string;
  iconName: React.ReactNode;
}
