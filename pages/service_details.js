import React, { useState, useEffect } from "react";
import CommonBanner from "../component/Common/Banner";
import ServiceDetailsMain from "../component/ServiceDetails";
import OurPartner from "../component/Common/OurPartner";
import sm from "../sm.json";
import * as prismic from "@prismicio/client";

const ServiceDetails = ({ services }) => {
  const bannerheading = services.data.body[0].items[0].bannerheading;
  const bannerpage = services.data.body[0].items[0].bannerpage;
  const bgimage = services.data.body[0].items[0].bgimage.url;
  return (
    <>
      <CommonBanner image={bgimage} heading={bannerheading} page={bannerpage} />
      <ServiceDetailsMain services={services} />
      <OurPartner />
    </>
  );
};

export default ServiceDetails;
export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const services = await client.getByUID("services", "id-is-service");
  return {
    props: {
      services,
    },
  };
}
