import React from "react";
import TermsConditionContent from "../component/TermsCondition";
import CommonBanner from "../component/Common/Banner";
import OurPartner from "../component/Common/OurPartner";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
const TermsCondition = ({ termsandcondition }) => {
  const bannerheading = termsandcondition.data.body[0].items[0].bannerheading;
  const bannerpage = termsandcondition.data.body[0].items[0].bannerpage;
  const bgimage = termsandcondition.data.body[0].items[0].bgimage.url;
  return (
    <>
      <CommonBanner image={bgimage} heading={bannerheading} page={bannerpage} />
      <TermsConditionContent termsandcondition={termsandcondition} />
      <OurPartner />
    </>
  );
};

export default TermsCondition;
export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const termsandcondition = await client.getByUID(
    "termsandcondition",
    "id-is-terms"
  );
  return {
    props: {
      termsandcondition,
    },
  };
}
