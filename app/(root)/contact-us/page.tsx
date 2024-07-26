import React from "react";
import ContactInfo from "@/components/contact/ContactPageInfo";
import ContactMap from "@/components/contact/Map";
import { ContactForm } from "@/components/contact/ContactForm";
import InnerBanner from "@/components/global/inner-banner";
import propertybanner from "@/public/assets/images/property-banner.jpg";


const Contact = () => {
  return (
    <>  
      <InnerBanner text="Contact Us" image={propertybanner} />
      <ContactInfo />
      <ContactMap/>
      <ContactForm/>
    </>
  ) ;
};

export default Contact;
