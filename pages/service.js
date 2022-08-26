import React from "react";
import CommonBanner from "../component/Common/Banner";
import ServicesCard from "../component/Service/ServicesCard";
import Counter from "../component/Common/Counter";
import OurPartner from "../component/Common/OurPartner";
import sm from "../sm.json";
import * as prismic from "@prismicio/client";

const Service = ({ services }) => {
  const bannerheading = services.data.body[0].items[0].bannerheading;
  const bannerpage = services.data.body[0].items[0].bannerpage;
  const bgimage = services.data.body[0].items[0].bgimage.url;
  return (
    <>
      <CommonBanner image={bgimage} heading={bannerheading} page={bannerpage} />
      <ServicesCard services={services} />
      <Counter />
      <OurPartner />
    </>
  );
};

export default Service;

export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const services = await client.getByUID("services", "id-is-service");
  return {
    props: {
      services,
    },
  };
}
