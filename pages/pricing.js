import React from "react";
import PricingTable from "../component/Common/PricingTable";
import CommonBanner from "../component/Common/Banner";
import OurPartner from "../component/Common/OurPartner";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";

const PricingContent = ({ pricing }) => {
  const bannerheading = pricing.data.body[0].items[0].bannerheading;
  const bannerpage = pricing.data.body[0].items[0].bannerpage;
  const bgimage = pricing.data.body[0].items[0].bgimage.url;
  return (
    <>
      <CommonBanner
        image={bgimage ? bgimage : bgall}
        heading={bannerheading ? bannerheading : `Our Pricing Plan`}
        page={bannerpage ? bannerpage : `Our Pricing Plan`}
      />
      <PricingTable />
      <OurPartner />
    </>
  );
};

export default PricingContent;
export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const pricing = await client.getByUID("pricing", "id-is-pricing");
  return {
    props: {
      pricing,
    },
  };
}
