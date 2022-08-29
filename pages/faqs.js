import React from "react";
import CommonBanner from "../component/Common/Banner";
import AllFaqs from "../component/Faqs";
import OurPartner from "../component/Common/OurPartner";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
const Faqs = ({ faq }) => {
  const bannerheading = faq?.data?.body[0]?.items[0]?.bannerheading;
  const bannerpage = faq?.data?.body[0]?.items[0]?.bannerpage;
  const bgimage = faq?.data?.body[0]?.items[0]?.bgimage.url;
  return (
    <>
      <CommonBanner image={bgimage} heading={bannerheading} page={bannerpage} />
      <AllFaqs faq={faq} />
      <OurPartner />
    </>
  );
};

export default Faqs;
export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const faq = await client.getByUID("faq", "id-is-faq");
  return {
    props: {
      faq,
    },
  };
}
