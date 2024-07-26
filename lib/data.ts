import {
  footerLinksProps,
  socialLinksProps,
  contactinfoProps,
  NewsLetterProp,
  CardsContentProps,
  homeBannerItems,
  ImageWithTriangleProps,
  CardFilterData,
  ButtonDataProps,
  TestimonialSliderProps,
  LatestBlogProps,
  FaqsProps,
  AffordablePackageProps,
  LogosContentProps,
  AgentCTAProp,
  TeamMembers,
  AgencyContentProp,
  ProcessProp,
  ContactPageInfoProp,
  ContactMapAddressProp,
  blogPostsProps,
  blogTagsProps,
  blogCategoriesProps,
  ServiceDetail,
  propertyReviewProps,
} from "@/types";
import { ListWithImageProps } from "@/components/home/ListWithLeftImage";
import cardimage1 from "@/public/assets/images/card-img-1.png";
import cardimage2 from "@/public/assets/images/card-img-2.png";
import cardimage3 from "@/public/assets/images/card-img-3.png";
import propDetailImage from "@/public/assets/images/prop-detail-img.jpg";
// import propDetailImage1 from "@/public/assets/images/propImg1.jpg";
// import propDetailImage2 from "@/public/assets/images/propImg2.jpg";
// import propDetailImage3 from "@/public/assets/images/propImg3.jpg";
import propDetailImage4 from "@/public/assets/images/propImg4.jpg";
import propDetailImage5 from "@/public/assets/images/propImg5.jpg";
import banner1 from "@/public/assets/images/home-banner-1.jpg";
import banner2 from "@/public/assets/images/home-banner-2.jpg";
import banner3 from "@/public/assets/images/home-banner-3.jpg";
import blogcards1 from "@/public/assets/images/propImg1.jpg";
import blogcards2 from "@/public/assets/images/propImg2.jpg";
import blogcards3 from "@/public/assets/images/propImg3.jpg";
// import blogcards4 from "@/public/assets/images/home-blog-4.jpg";
// import blogcards5 from "@/public/assets/images/home-blog-5.jpg";
// import blogcards6 from "@/public/assets/images/home-blog-6.jpg";
import agentimg1 from "@/public/assets/images/about-agent-img-1.jpg";
import agentimg2 from "@/public/assets/images/about-agent-img-2.jpg";
import agentimg3 from "@/public/assets/images/about-agent-img-3.jpg";
import agentimg4 from "@/public/assets/images/about-agent-img-4.jpg";
import agentimg5 from "@/public/assets/images/about-agent-img-5.jpg";
import agentimg6 from "@/public/assets/images/about-agent-img-6.jpg";
import agentimg7 from "@/public/assets/images/about-agent-img-7.jpg";
import agentimg8 from "@/public/assets/images/about-agent-img-8.jpg";
import logoimg1 from "@/public/assets/images/about-logo-1.png";
import logoimg2 from "@/public/assets/images/about-logo-2.png";
import logoimg3 from "@/public/assets/images/about-logo-3.png";
import logoimg4 from "@/public/assets/images/about-logo-4.png";
import logoimg5 from "@/public/assets/images/about-logo-5.png";
import logoimg6 from "@/public/assets/images/about-logo-6.png";
import logoimg7 from "@/public/assets/images/about-logo-7.png";
import logoimg8 from "@/public/assets/images/about-logo-8.png";
import agencymg1 from "@/public/assets/images/agency-1.png";
import agencymg2 from "@/public/assets/images/agency-2.png";
import agencymg3 from "@/public/assets/images/agency-3.png";
// import processimg1 from "@/public/assets/images/propImg1.jpg";
// import processimg2 from "@/public/assets/images/propImg2.jpg";
import processimg3 from "@/public/assets/images/process-3.png";
import processimg4 from "@/public/assets/images/process-4.png";
import processimg5 from "@/public/assets/images/process-5.png";
import reviewheadshot1 from "@/public/assets/images/property-review-headshot-1.jpg";
import reviewheadshot2 from "@/public/assets/images/property-review-headshot-2.jpg";
import reviewheadshot3 from "@/public/assets/images/property-review-headshot-3.jpg";
import reviewimg1 from "@/public/assets/images/property-review-img-1.jpg";
// import reviewimg2 from "@/public/assets/images/property-review-img-2.jpg";
// import { string } from "zod";

export const filterCardData: CardFilterData[] = [
  {
    id: 1,
    category: "Farm",
    // category: 'cars',
    // name: 'BMW',
    image: cardimage1,
    date: "13 Jan",
    admin: "konstructo-admin",
    status: "For Rent",
    title: "Northwest Office",
    address: "134 F 87th St, New Zealand, PY-987534, USA",
    squarefit: 900,
    bedroom: 9,
    bathroom: 7,
    garage: 1,
    price: "580,0000",
  },
  {
    id: 2,
    category: "Farm Spa",
    // category: 'colors',
    // name: 'BMW',
    image: cardimage2,
    date: "13 Jan",
    admin: "konstructo-admin",
    status: "For Rent",
    title: "Northwest Office",
    address: "134 F 87th St, New Zealand, PY-987534, USA",
    squarefit: 900,
    bedroom: 9,
    bathroom: 7,
    garage: 1,
    price: "580,0000",
  },
  {
    id: 3,
    category: "Spa",
    // category: 'fruits',
    // name: 'BMW',
    image: cardimage3,
    date: "13 Jan",
    admin: "konstructo-admin",
    status: "For Rent",
    title: "Northwest Office",
    address: "134 F 87th St, New Zealand, PY-987534, USA",
    squarefit: 900,
    bedroom: 9,
    bathroom: 7,
    garage: 1,
    price: "580,0000",
  },
  {
    id: 4,
    category: "Farm",
    // category: 'cars colors',
    // name: 'BMW',
    image: cardimage1,
    date: "13 Jan",
    admin: "konstructo-admin",
    status: "For Rent",
    title: "Northwest Office",
    address: "134 F 87th St, New Zealand, PY-987534, USA",
    squarefit: 900,
    bedroom: 9,
    bathroom: 7,
    garage: 1,
    price: "580,0000",
  },
  {
    id: 5,
    category: "Bar",
    // category: 'cars fruits',
    // name: 'BMW',
    image: cardimage2,
    date: "13 Jan",
    admin: "konstructo-admin",
    status: "For Rent",
    title: "Northwest Office",
    address: "134 F 87th St, New Zealand, PY-987534, USA",
    squarefit: 900,
    bedroom: 9,
    bathroom: 7,
    garage: 1,
    price: "580,0000",
  },
  // { id: 1, category: 'cars', name: 'BMW' },
  // { id: 2, category: 'colors fruits', name: 'Orange' },
  // { id: 3, category: 'cars', name: 'Volvo' },
  // { id: 4, category: 'colors', name: 'Red' },
  // { id: 5, category: 'cars', name: 'Ford' },
  // { id: 6, category: 'colors', name: 'Blue' },
  // { id: 7, category: 'animals', name: 'Cat' },
  // { id: 8, category: 'animals', name: 'Dog' },
  // { id: 9, category: 'fruits', name: 'Melon' },
  // { id: 10, category: 'fruits animals', name: 'Kiwi' },
  // { id: 11, category: 'fruits', name: 'Banana' },
  // { id: 12, category: 'fruits', name: 'Lemon' },
  // { id: 13, category: 'animals', name: 'Cow' },
];

export const socialLinks: socialLinksProps[] = [
  {
    id: 1,
    icon: "facebook-f",
    link: "#",
  },
  {
    id: 2,
    icon: "twitter",
    link: "#",
  },
  {
    id: 3,
    icon: "pinterest",
    link: "#",
  },
  {
    id: 4,
    icon: "dribbble",
    link: "#",
  },
];

export const contactinfo: contactinfoProps[] = [
  {
    id: 1,
    icon: "fa-house",
    title: "Address",
    text: "908K, San Francisco",
  },
  {
    id: 2,
    icon: "fa-envelope",
    title: "Send Your Mail At",
    text: "realestate@email.com",
  },
  {
    id: 3,
    icon: "fa-clock",
    title: "Working Hours",
    text: "Mon-Fri: 8:30am To 5:00pm",
  },
];

export const footerContactInfo: contactinfoProps[] = [
  {
    id: 1,
    icon: "fa-phone",
    title: "Hot Line",
    text: "+123 456 7890",
  },
  {
    id: 2,
    icon: "fa-envelope",
    title: "E-mail",
    text: "realestate@email.com",
  },
  {
    id: 3,
    icon: "fa-location-dot",
    title: "Locations",
    text: "908K, San Francisco",
  },
];

export const footerLinks: footerLinksProps[] = [
  {
    id: 1,
    link: "/about-us",
    text: "About Us",
  },
  {
    id: 2,
    link: "/properties",
    text: "Properties",
  },
  {
    id: 3,
    link: "/our-agents",
    text: "Our Agents",
  },
  {
    id: 4,
    link: "/agency",
    text: "Agencies",
  },
  {
    id: 5,
    link: "/faqs",
    text: "FAQ's",
  },
  {
    id: 6,
    link: "/contact-us",
    text: "Contact Us",
  },
];

export const NewsLetterContent: NewsLetterProp = {
  title: "Call Now",
  text: "Sign Up for Updates",
  number: "+894 874 873",
};

export const buttonData: ButtonDataProps[] = [
  { label: "All Categories", filter: "all" },
  { label: "Bars", filter: "Bar" },
  { label: "Farms", filter: "Farm" },
  { label: "Spa", filter: "Spa" },
  { label: "Cafe", filter: "Cafe" },
  { label: "Restaurant", filter: "Restaurant" },
  { label: "Villa", filter: "Villa" },
];

export const CardsContentInfo: CardsContentProps[] = [
  {
    id: 1,
    image: propDetailImage,
    date: "13 Jan",
    admin: "konstructo-admin",
    status: "For Rent",
    category: "Bar Villa",
    catogory: "Bar, Farm, Spa",
    title: "Northwest Office",
    address: "134 F 87th St, New Zealand, PY-987534, USA",
    squarefit: 900,
    bedroom: 9,
    bathroom: 7,
    garage: 1,
    price: "580,0000",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit. <br/><br/><br/><br/> 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit. <br/>  <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit.",
    link: "northwest-office",
    agent: "atohi-diwali",
  },
  {
    id: 2,
    image: blogcards1,
    date: "13 Jan",
    admin: "konstructo-admin",
    status: "For Rent",
    category: "Cafe Bar",
    catogory: "Cafe",
    title: "Triple Story House",
    address: "180 Y 7th St, New Zealand, PY-987534, USA",
    squarefit: 540,
    bedroom: 8,
    bathroom: 6,
    garage: 2,
    price: "8M",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit. <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit. <br/>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit.",
    link: "triple-story-house",
    agent: "atohi-diwali",
  },
  {
    id: 3,
    image: blogcards3,
    date: "13 Jan",
    admin: "konstructo-admin",
    status: "For Rent",
    category: "Farm",
    catogory: "Farm, Restaurant, Villa",
    title: "Gorgeous Building",
    address: "100 A 76th St, New Zealand, PY-987534, USA",
    squarefit: 120,
    bedroom: 3,
    bathroom: 5,
    garage: 2,
    price: "2M",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit. <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit. <br/>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit.",
    link: "gorgeous-building",
    agent: "hana-kaisley",
  },
  {
    id: 4,
    image: blogcards3,
    date: "13 Jan",
    admin: "konstructo-admin",
    status: "For Rent",
    category: "Bar Villa",
    catogory: "Bar, Farm, Spa",
    title: "Northwest Office 2",
    address: "134 F 87th St, New Zealand, PY-987534, USA",
    squarefit: 900,
    bedroom: 9,
    bathroom: 7,
    garage: 1,
    price: "580,0000",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit. <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit. <br/>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit.",
    link: "northwest-office-2",
    agent: "noah-oliver",
  },
  {
    id: 5,
    image: propDetailImage4,
    date: "13 Jan",
    admin: "konstructo-admin",
    status: "For Rent",
    category: "Cafe Bar",
    catogory: "Cafe",
    title: "Triple Story House 2",
    address: "180 Y 7th St, New Zealand, PY-987534, USA",
    squarefit: 540,
    bedroom: 8,
    bathroom: 6,
    garage: 2,
    price: "8M",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum.\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit.\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum.\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit.\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum.\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit.",
    link: "triple-story-house-2",
    agent: "james-david",
  },
  {
    id: 6,
    image: propDetailImage5,
    date: "13 Jan",
    admin: "konstructo-admin",
    status: "For Rent",
    category: "Farm",
    catogory: "Farm, Restaurant, Villa",
    title: "Gorgeous Building 2",
    address: "100 A 76th St, New Zealand, PY-987534, USA",
    squarefit: 120,
    bedroom: 3,
    bathroom: 5,
    garage: 2,
    price: "2M",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit. <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit. <br/>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit.",
    link: "gorgeous-building-2",
    agent: "atohi-diwali",
  },
];

export const TestSlider: TestimonialSliderProps[] = [
  {
    id: 1,
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    name: "Liam Noah",
    desingation: "Frontend Developer",
  },
  {
    id: 2,
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    name: "Sheikh Sayyam",
    desingation: "Our Boss",
  },
  {
    id: 3,
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    name: "Sheikh Farhan",
    desingation: "Employee",
  },
];

export const HomeBanner: homeBannerItems[] = [
  {
    id: 1,
    image: banner1,
    title: "Luxury Mansion",
    address: "9086 West Canal 7th St, New Zealand",
    bedroom: 3,
    bathroom: 2,
    livingroom: 1,
    price: "580,0000",
  },
  {
    id: 2,
    image: banner2,
    title: "Luxury Mansion",
    address: "9086 West Canal 7th St, New Zealand",
    bedroom: 1,
    bathroom: 2,
    livingroom: 3,
    price: "2.5M",
  },
  {
    id: 3,
    image: banner3,
    title: "Luxury Mansion",
    address: "9086 West Canal 7th St, New Zealand",
    bedroom: 3,
    bathroom: 4,
    livingroom: 4,
    price: "890,0000",
  },
];

export const ListWithImageContent: ListWithImageProps[] = [
  {
    id: 1,
    title: "Bedrooms",
    value: "3",
  },
  {
    id: 2,
    title: "Security",
    value: "Paradox",
  },
  {
    id: 3,
    title: "Living Rooms",
    value: "2",
  },
  {
    id: 4,
    title: "Video Camera",
    value: "8",
  },
  {
    id: 5,
    title: "Bathrooms",
    value: "2",
  },
  {
    id: 6,
    title: "Heating",
    value: "by Gas",
  },
  {
    id: 7,
    title: "Swimming Pool",
    value: "2",
  },
  {
    id: 8,
    title: "Air Conditioning",
    value: "4AC",
  },
  {
    id: 9,
    title: "Parking Places",
    value: "2",
  },
  {
    id: 10,
    title: "Gym",
    value: "Yes",
  },
  {
    id: 11,
    title: "Garage places",
    value: "2",
  },
  {
    id: 12,
    title: "Lawn",
    value: "2A",
  },
  {
    id: 13,
    title: "Schools Nearby",
    value: "2",
  },
  {
    id: 14,
    title: "Fire Alarm",
    value: "Yes",
  },
];

export const ImageWithTriangleItems: ImageWithTriangleProps[] = [
  {
    id: 1,
    title: "Outstanding Property",
  },
  {
    id: 2,
    title: "Modern City Locations",
  },
  {
    id: 3,
    title: "Specialist Services",
  },
  {
    id: 4,
    title: "Market-leading Research",
  },
];

export const LatestBlogItems: LatestBlogProps[] = [
  {
    id: 1,
    image: blogcards1,
    date: "3",
    month: "Jan",
    author: "KONSTRUCTO-ADMIN",
    comment: 1,
    title: "Boutique Space Greenville at 2017",
    link: "/blog/1",
  },
  {
    id: 2,
    image: blogcards2,
    date: "3",
    month: "Feb",
    author: "KONSTRUCTO-ADMIN",
    comment: 2,
    title: "Your ideas are very important to us",
    link: "/blog/2",
  },
  {
    id: 3,
    image: blogcards3,
    date: "3",
    month: "May",
    author: "KONSTRUCTO-ADMIN",
    comment: 3,
    title: "Construction You Can Count On",
    link: "/blog/3",
  },
];

export const teamMembers: TeamMembers[] = [
  {
    id: 1,
    image: agentimg1,
    name: "Anika Lia",
    designation: "Representator",
    link: "anika-lia",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    propertyName: "northwest-office",
    contact: {
      phone: +1229807837,
      email: "realestate@email.com",
      address: "908K, San Francisco",
    },
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    experience: [
      {
        id: 1,
        years: "1963 - 1970",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 2,
        years: "1990 - 2003",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 3,
        years: "1970 - 1986",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 4,
        years: "2003 - 2019",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 5,
        years: "1986 - 1990",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 6,
        years: "2019 - Now",
        title: "Lorem ipsum, Real Estate Company",
      },
    ],
  },
  {
    id: 2,
    image: agentimg2,
    name: "Atohi Diwali",
    designation: "Counsler",
    link: "atohi-diwali",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    propertyName: "triple-story-house",
    contact: {
      phone: +1229807837,
      email: "realestate@email.com",
      address: "908K, San Francisco",
    },
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    experience: [
      {
        id: 1,
        years: "1963 - 1970",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 2,
        years: "1990 - 2003",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 3,
        years: "1970 - 1986",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 4,
        years: "2003 - 2019",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 5,
        years: "1986 - 1990",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 6,
        years: "2019 - Now",
        title: "Lorem ipsum, Real Estate Company",
      },
    ],
  },
  {
    id: 3,
    image: agentimg3,
    name: "Noah Oliver",
    designation: "Communicator",
    link: "noah-oliver",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    propertyName: "gorgeous-building",
    contact: {
      phone: +1229807837,
      email: "realestate@email.com",
      address: "908K, San Francisco",
    },
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    experience: [
      {
        id: 1,
        years: "1963 - 1970",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 2,
        years: "1990 - 2003",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 3,
        years: "1970 - 1986",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 4,
        years: "2003 - 2019",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 5,
        years: "1986 - 1990",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 6,
        years: "2019 - Now",
        title: "Lorem ipsum, Real Estate Company",
      },
    ],
  },
  {
    id: 4,
    image: agentimg4,
    name: "James David",
    designation: "Seller Specialist",
    link: "james-david",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    propertyName: "northwest-office-2",
    contact: {
      phone: +1229807837,
      email: "realestate@email.com",
      address: "908K, San Francisco",
    },
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    experience: [
      {
        id: 1,
        years: "1963 - 1970",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 2,
        years: "1990 - 2003",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 3,
        years: "1970 - 1986",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 4,
        years: "2003 - 2019",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 5,
        years: "1986 - 1990",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 6,
        years: "2019 - Now",
        title: "Lorem ipsum, Real Estate Company",
      },
    ],
  },
  {
    id: 5,
    image: agentimg5,
    name: "Hana Kaisley",
    designation: "Manager",
    link: "hana-kaisley",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    propertyName: "triple-story-house-2",
    contact: {
      phone: +1229807837,
      email: "realestate@email.com",
      address: "908K, San Francisco",
    },
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    experience: [
      {
        id: 1,
        years: "1963 - 1970",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 2,
        years: "1990 - 2003",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 3,
        years: "1970 - 1986",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 4,
        years: "2003 - 2019",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 5,
        years: "1986 - 1990",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 6,
        years: "2019 - Now",
        title: "Lorem ipsum, Real Estate Company",
      },
    ],
  },
  {
    id: 6,
    image: agentimg6,
    name: "Kelly Adalee",
    designation: "Risk Manager",
    link: "kelly-adalee",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    propertyName: "gorgeous-building-2",
    contact: {
      phone: +1229807837,
      email: "realestate@email.com",
      address: "908K, San Francisco",
    },
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    experience: [
      {
        id: 1,
        years: "1963 - 1970",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 2,
        years: "1990 - 2003",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 3,
        years: "1970 - 1986",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 4,
        years: "2003 - 2019",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 5,
        years: "1986 - 1990",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 6,
        years: "2019 - Now",
        title: "Lorem ipsum, Real Estate Company",
      },
    ],
  },
  {
    id: 7,
    image: agentimg7,
    name: "Naya Margo",
    designation: "Advisor",
    link: "naya-margo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    contact: {
      phone: +1229807837,
      email: "realestate@email.com",
      address: "908K, San Francisco",
    },
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    experience: [
      {
        id: 1,
        years: "1963 - 1970",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 2,
        years: "1990 - 2003",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 3,
        years: "1970 - 1986",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 4,
        years: "2003 - 2019",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 5,
        years: "1986 - 1990",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 6,
        years: "2019 - Now",
        title: "Lorem ipsum, Real Estate Company",
      },
    ],
  },
  {
    id: 8,
    image: agentimg8,
    name: "Lucas Henry",
    designation: "CEO",
    link: "lucas-henry",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    contact: {
      phone: +1229807837,
      email: "realestate@email.com",
      address: "908K, San Francisco",
    },
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    experience: [
      {
        id: 1,
        years: "1963 - 1970",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 2,
        years: "1990 - 2003",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 3,
        years: "1970 - 1986",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 4,
        years: "2003 - 2019",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 5,
        years: "1986 - 1990",
        title: "Lorem ipsum, Real Estate Company",
      },
      {
        id: 6,
        years: "2019 - Now",
        title: "Lorem ipsum, Real Estate Company",
      },
    ],
  },
];

export const FaqsPropsItems: FaqsProps[] = [
  {
    id: 1,
    question: "Who we are?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 2,
    question: "How can we help you?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    question: "How small are our commissions?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 4,
    question: "Who we are?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 5,
    question: "How can we help you?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const AffordablePackageItems: AffordablePackageProps[] = [
  {
    id: 1,
    type: false,
    plan: "Basic",
    price: 23.0,
    text: "Lorem Ipsum is simply dummy text of the printing.",
    features1: "Standard Listing",
    features2: "One Time Fee",
    features3: "90 Days Availability",
    features4: "Limited Support",
    features5: "24/7 Support",
  },
  {
    id: 2,
    type: true,
    plan: "Extended",
    price: 45.0,
    text: "Lorem Ipsum is simply dummy text of the printing.",
    features1: "Standard Listing",
    features2: "One Time Fee",
    features3: "90 Days Availability",
    features4: "Limited Support",
    features5: "24/7 Support",
  },
  {
    id: 3,
    type: false,
    plan: "Professional",
    price: 80.0,
    text: "Lorem Ipsum is simply dummy text of the printing.",
    features1: "Standard Listing",
    features2: "One Time Fee",
    features3: "90 Days Availability",
    features4: "Limited Support",
    features5: "24/7 Support",
  },
];

export const LogosContentItems: LogosContentProps[] = [
  {
    id: 1,
    image: logoimg1,
  },
  {
    id: 2,
    image: logoimg2,
  },
  {
    id: 3,
    image: logoimg3,
  },
  {
    id: 4,
    image: logoimg4,
  },
  {
    id: 5,
    image: logoimg5,
  },
  {
    id: 6,
    image: logoimg6,
  },
  {
    id: 7,
    image: logoimg7,
  },
  {
    id: 8,
    image: logoimg8,
  },
];

export const AgentCTAItems: AgentCTAProp = {
  title: "Become an Agent",
  text: "Agent hen an unknown printer took a galley scramble",
  link: "#",
};

export const AgencyContentItems: AgencyContentProp[] = [
  {
    id: 1,
    image: agencymg1,
    title: "King Agency",
    address: "310-Y, USA",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy te",
    email: "realestate@email.com",
    phone: "+896 675 897",
    facebook: "#",
    google: "#",
  },
  {
    id: 2,
    image: agencymg2,
    title: "Famous Agency",
    address: "280-Y, New York",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    email: "realestate@email.com",
    phone: "+896 897 520",
    facebook: "#",
    google: "#",
  },
  {
    id: 3,
    image: agencymg3,
    title: "Best Agency",
    address: "980-P, Australia",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    email: "realestate@email.com",
    phone: "+896 098 123",
    facebook: "#",
    google: "#",
  },
];

export const ProcessContent: ProcessProp[] = [
  {
    id: 1,
    image: blogcards1,
    title: "Choose What You Want",
    text: "Feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil.",
    position: "left",
  },
  {
    id: 2,
    image: blogcards2,
    title: "Find on the Map",
    text: "Feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil.",
    position: "right",
  },
  {
    id: 3,
    image: processimg3,
    title: "See in Details",
    text: "Feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil.",
    position: "left",
  },
  {
    id: 4,
    image: processimg4,
    title: "Schedule Watching",
    text: "Feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil.",
    position: "right",
  },
  {
    id: 5,
    image: processimg5,
    title: "Take the Keys",
    text: "Feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil.",
    position: "left",
  },
];

export const FaqsPropsPage: FaqsProps[] = [
  {
    id: 1,
    question: "Should I talk with a bank before looking at homes?						",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 2,
    question:
      "I own a home, should I buy another before selling my current home?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    question:
      "Do I really need a Realtor when buying a home before selling my current home?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 4,
    question:
      "Do I really need a Realtor when buying a home before selling my current home?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 5,
    question: "Should I buy or continue to rent?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

export const ContactPageInfoContent: ContactPageInfoProp = {
  email1: "realestate1@email.com",
  email2: "realestate2@email.com",
  phone1: "+876 8907 765",
  phone2: "+897 6754 098",
  address1: "908K, San Francisco",
  address2: "567B, America",
};

export const ContactMapAddressContent: ContactMapAddressProp[] = [
  {
    id: 1,
    address: "87-FM America, Apt. 897",
  },
  {
    id: 2,
    address: "Australia, JU 89760",
  },
  {
    id: 3,
    address: "908K, San Francisco",
  },
];

export const blogPostsContent: blogPostsProps[] = [
  {
    id: 1,
    featuredImage: blogcards1,
    linkHref: "/blog/1",
    title: "Boutique Space Greenville at 2017",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum…",
    category: "Uncategorized",
    date: "January 3, 2024",
    author: "Lawyero",
    comments: 1,
    batch: "popular",
    singleContent:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    tag: "spa",
  },
  {
    id: 2,
    featuredImage: blogcards2,
    linkHref: "/blog/2",
    title: "Your ideas are very important to us",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum…",
    category: "Restaurant",
    date: "Feb 3, 2024",
    author: "konstructo-admin",
    comments: 0,
    batch: "popular",
    singleContent:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    tag: "Restaurant",
  },
  {
    id: 3,
    featuredImage: blogcards3,
    linkHref: "/blog/3",
    title: "Construction You Can Count On",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum…",
    category: "Uncategorized",
    date: "March 3, 2024",
    author: "konstructo-admin",
    comments: 0,
    batch: "popular",
    singleContent:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    tag: "store",
  },
  {
    id: 4,
    featuredImage: blogcards1,
    linkHref: "/blog/4",
    title: "Boutique Space Greenville at 2023",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum…",
    category: "Uncategorized",
    date: "March 30, 2024",
    author: "konstructo-admin",
    comments: 0,
    batch: "popular",
    singleContent:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    tag: "store",
  },
];

export const blogTags: blogTagsProps[] = [
  {
    id: 1,
    name: "Apartment",
  },
  {
    id: 2,
    name: "Bar",
  },
  {
    id: 3,
    name: "Beautiful Villa",
  },
  {
    id: 4,
    name: "Cafe",
  },
  {
    id: 5,
    name: "Education",
  },
  {
    id: 6,
    name: "Farm",
  },
  {
    id: 7,
    name: "House",
  },
  {
    id: 8,
    name: "Real Estate",
  },
  {
    id: 9,
    name: "Spa",
  },
];

export const blogCategories: blogCategoriesProps[] = [
  {
    id: 1,
    title: "Apartment",
  },
  {
    id: 2,
    title: "Cafe",
  },
  {
    id: 3,
    title: "Farm",
  },
  {
    id: 4,
    title: "Real Estate",
  },
  {
    id: 5,
    title: "Restaurant",
  },
  {
    id: 6,
    title: "Spa",
  },
  {
    id: 7,
    title: "Store",
  },
  {
    id: 8,
    title: "Uncategorized",
  },
  {
    id: 9,
    title: "Villa",
  },
];

export const serviceDetail: ServiceDetail[] = [
  {
    id: "property-management",
    name: "Property Management",
    mainImage: blogcards1,
    text: "pm Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
    image: blogcards2,
    moreText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
  },
  {
    id: "mortgage-service",
    name: "Mortgage Services",
    mainImage: blogcards1,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
    image: blogcards2,
    moreText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "consulting-service",
    name: "Property Management",
    mainImage: blogcards1,
    text: "pm Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
    image: blogcards2,
    moreText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "home-buying",
    name: "Mortgage Services",
    mainImage: blogcards1,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
    image: blogcards2,
    moreText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "home-selling",
    name: "Property Management",
    mainImage: blogcards1,
    text: "pm Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
    image: blogcards2,
    moreText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "escrow-services",
    name: "Mortgage Services",
    mainImage: blogcards1,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
    image: blogcards2,
    moreText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const propertyReviewContent: propertyReviewProps[] = [
  {
    id: 1,
    headshot: reviewheadshot1,
    name: "Mary Smith",
    date: "May 30 2020",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed.",
    image: reviewimg1,
  },
  {
    id: 2,
    headshot: reviewheadshot2,
    name: "Abraham Tyron",
    date: "june 1 2020",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed.",
  },
  {
    id: 3,
    headshot: reviewheadshot3,
    name: "Lisa Williams",
    date: "jul 12 2020",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed.",
    image: reviewimg1,
  },
];

// menuData.js
const menuData = [
  {
    name: "Home",
    href: "/",
    subMenu: [],
  },
  {
    name: "Properties",
    href: "#",
    subMenu: [
      { name: "Property Index", href: "/properties" },
      { name: "Property Grid", href: "/property-grid" },
      { name: "Single Property", href: "/properties/northwest-office" },
    ],
  },
  {
    name: "Pages",
    href: "#",
    subMenu: [
      { name: "About Us", href: "/about-us" },
      { name: "Our Agents", href: "/our-agents" },
      { name: "Agent Details", href: "/our-agents/atohi-diwali" },
      { name: "Agencies", href: "/agency" },
      { name: "Pricing", href: "/pricing" },
      { name: "Process", href: "/process" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "404", href: "/404" },
    ],
  },
  {
    name: "Services",
    href: "/#",
    subMenu: [
      { name: "Service Index", href: "/services/" },
      { name: "Single Service", href: "/services/property-management" },
    ],
  },
  {
    name: "Blog",
    href: "#",
    subMenu: [
      { name: "Blog", href: "/blog" },
      { name: "Blog Grid", href: "/blog-grid" },
      { name: "Blog Post", href: "/blog/1" },
    ],
  },
  {
    name: "FAQ’s",
    href: "/faqs",
    subMenu: [],
  },
  {
    name: "Contact Us",
    href: "/contact-us",
    subMenu: [],
  },
];

export default menuData;
