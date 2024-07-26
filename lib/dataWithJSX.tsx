import {
  socialLinksProps,
  contactinfoProps,
  SpotIconProps,
  AboutWorkingStepsProps,
  // CounterProps,
  StatsWithIconProps,
  ServiceCardProps,
} from "@/types";

import {
  Clock,
  Facebook,
  Home,
  Instagram,
  Linkedin,
  MailMinus,
  Phone,
  // Pin,
  MapPin,
  // Twitch,
  Twitter,
  Bolt,
  Building,
  ClipboardList,
  DollarSign,
  HandCoins,
  HeadsetIcon,
  LandPlot,
  Map,
  Scroll,
  UsersRound,
} from "lucide-react";

export const footerContactInfo: contactinfoProps[] = [
  {
    id: 1,
    icon: <Phone size="48" className="size-full text-primary" />,
    title: "Hot Line",
    text: "+123 456 7890",
  },
  {
    id: 2,
    icon: <MailMinus size="48" className="size-full text-primary" />,
    title: "E-mail",
    text: "realestate@email.com",
  },
  {
    id: 3,
    icon: <MapPin size="48" className="size-full text-primary" />,
    title: "Locations",
    text: "908K, San Francisco",
  },
];

export const socialLinks: socialLinksProps[] = [
  {
    id: 1,
    icon: <Facebook size="30" className="size-full" />,
    link: "#",
  },
  {
    id: 2,
    icon: <Twitter size="30" className="size-full" />,
    link: "#",
  },
  {
    id: 3,
    icon: <Linkedin size="30" className="size-full" />,
    link: "#",
  },
  {
    id: 4,
    icon: <Instagram size="30" className="size-full" />,
    link: "#",
  },
];

export const contactinfo: contactinfoProps[] = [
  {
    id: 1,
    icon: <Home size="48" className="size-full text-secondary" />,
    title: "Address",
    text: "908K, San Francisco",
  },
  {
    id: 2,
    icon: <MailMinus className="size-full text-secondary" size="24" />,
    title: "Mail At",
    text: "realestate@email.com",
  },
  {
    id: 3,
    icon: <Clock className="size-full text-secondary" size="24" />,
    title: "Working Hours",
    text: "Mon-Fri: 8:30am To 5:00pm",
  },
];

export const SpotWithLeftIcon: SpotIconProps[] = [
  {
    id: 1,
    icon: (
      <Building size="60" className="size-full bg-white p-4 text-primary" />
    ),
    title: "Buliding for Buy",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus. Ut elit tellus.",
  },
  {
    id: 2,
    icon: (
      <DollarSign size="60" className="size-full bg-white p-4 text-primary" />
    ),
    title: "Office for Work",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus. Ut elit tellus.",
  },
  {
    id: 3,
    icon: (
      <Building size="60" className="size-full bg-white p-4 text-primary" />
    ),
    title: "Buliding for Buy",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus. Ut elit tellus.",
  },
  {
    id: 4,
    icon: (
      <Building size="60" className="size-full bg-white p-4 text-primary" />
    ),
    title: "Buliding for Buy",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus. Ut elit tellus.",
  },
];

export const SpotWithRightIcon: SpotIconProps[] = [
  {
    id: 1,
    icon: <Home size="60" className="size-full bg-white p-4 text-primary" />,
    title: "Buliding for Buy 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus. Ut elit tellus.",
  },
  {
    id: 2,
    icon: <Bolt size="60" className="size-full bg-white p-4 text-primary" />,
    title: "Office for Work 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus. Ut elit tellus.",
  },
  {
    id: 3,
    icon: <Home size="60" className="size-full bg-white p-4 text-primary" />,
    title: "Buliding for Buy 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus. Ut elit tellus.",
  },
  {
    id: 4,
    icon: <Home size="60" className="size-full bg-white p-4 text-primary" />,
    title: "Buliding for Buy 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus. Ut elit tellus.",
  },
];

export const ServiesContent: SpotIconProps[] = [
  {
    id: 1,
    icon: <Home size="60" className="size-full bg-white p-4 text-primary" />,
    title: "Renting Services",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: 2,
    icon: <Bolt size="60" className="size-full bg-white p-4 text-primary" />,
    title: "Property Management",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: 3,
    icon: (
      <Building size="60" className="size-full bg-white p-4 text-primary" />
    ),
    title: "Property Listing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

export const AboutWorkingSteps: AboutWorkingStepsProps[] = [
  {
    id: 1,
    icon: <Map size="60" className="h-12 w-14 text-primary" />,
    title: "Renting Services",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have Ipsum available.",
  },
  {
    id: 2,
    icon: <UsersRound size="60" className="h-12 w-14 text-primary" />,
    title: "Meet Your Agent",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have Ipsum available.",
  },
  {
    id: 3,
    icon: <ClipboardList size="60" className="h-12 w-14 text-primary" />,
    title: "Close the Deal",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have Ipsum available.",
  },
];

// export const CounterContent: CounterProps[] = [
//   {
//     id: 1,
//     icon: <Map size="60" className="h-16 w-14 text-primary" />,
//     value: 87,
//     title: "Property Locations",
//   },
//   {
//     id: 2,
//     icon: <Building size="60" className="h-16 w-14 text-primary" />,
//     value: 75,
//     title: "Property for Sell",
//   },
//   {
//     id: 3,
//     icon: <Home size="60" className="h-16 w-14 text-primary" />,
//     value: 546,
//     title: "Property for Rent",
//   },
// ];

// Data for Stats Counter
export const StatsWithIcon: StatsWithIconProps[] = [
  {
    id: 1,
    amount: 87,
    text: "Property Locations",
    iconName: <Map size={60} className="h-16 w-14 text-primary" />,
  },
  {
    id: 2,
    amount: 75,
    text: "Property for Sell",
    iconName: <Building size={60} className="h-16 w-14 text-primary" />,
  },
  {
    id: 3,
    amount: 546,
    text: "Property for Rent",
    iconName: <Home size={60} className="h-16 w-14 text-primary" />,
  },
];

export const services: ServiceCardProps[] = [
  {
    id: "property-management",
    icon: <LandPlot size="60" className="h-16 w-14 text-primary" />,
    title: "Property Management",
    text: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
  },
  {
    id: "mortgage-service",
    icon: <HandCoins size="60" className="h-16 w-14 text-primary" />,
    title: "Mortgage Service",
    text: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
  },
  {
    id: "consulting-service",
    icon: <HeadsetIcon size="60" className="h-16 w-14 text-primary" />,
    title: "Consulting Service",
    text: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
  },
  {
    id: "home-buying",
    icon: <Home size="60" className="h-16 w-14 text-primary" />,
    title: "Home Buying",
    text: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
  },
  {
    id: "home-selling",
    icon: <Home size="60" className="h-16 w-14 text-primary" />,
    title: "Home Selling",
    text: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
  },
  {
    id: "escrow-services",
    icon: <Scroll size="60" className="h-16 w-14 text-primary" />,
    title: "Escrow Services",
    text: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
  },
];
