import React from "react";
import CommonBanner from "../component/Common/Banner";
import ContactDetails from "../component/Contact";
import OurPartner from "../component/Common/OurPartner";
import sm from "../sm.json";
import * as prismic from "@prismicio/client";

const Contact = ({ contact }) => {
  const bannerheading = contact.data.body[0].items[0].bannerheading;
  const bannerimage = contact.data.body[0].items[0].bgimage.url;
  const bannerpage = contact.data.body[0].items[0].bannerpage;

  return (
    <>
      <CommonBanner
        image={bannerimage}
        heading={bannerheading}
        page={bannerpage}
      />
      <ContactDetails contact={contact} />
      <OurPartner />
    </>
  );
};

export default Contact;

export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const contact = await client.getByUID("contact", "id-is-contact");
  return {
    props: {
      contact,
    },
  };
}
