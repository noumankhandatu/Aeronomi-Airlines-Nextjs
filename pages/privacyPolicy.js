import React from "react";
import OurPolicies from "../component/PrivacyPolicy";
import CommonBanner from "../component/Common/Banner";
import OurPartner from "../component/Common/OurPartner";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";

const PrivacyPolicy = ({ privacypolicy }) => {
  const bannerheading = privacypolicy?.data?.body[0]?.items[0]?.bannerheading;
  const bannerpage = privacypolicy?.data?.body[0]?.items[0]?.bannerpage;
  const bgimage = privacypolicy?.data?.body[0]?.items[0]?.bgimage?.url;
  return (
    <>
      <CommonBanner image={bgimage} heading={bannerheading} page={bannerpage} />
      <OurPolicies privacypolicy={privacypolicy} />
      <OurPartner />
    </>
  );
};

export default PrivacyPolicy;
export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const privacypolicy = await client.getByUID(
    "privacypolicy",
    "id-is-privacypol"
  );
  return {
    props: {
      privacypolicy,
    },
  };
}
