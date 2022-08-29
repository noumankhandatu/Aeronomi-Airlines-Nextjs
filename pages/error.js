import React from "react";
import CommonBanner from "../component/Common/Banner";
import ErrorMessages from "../component/Error";
import OurPartner from "../component/Common/OurPartner";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";

const Error = ({ error }) => {
  const bannerheading = error.data.body[0]?.items[0]?.bannerheading;
  const bannerimage = error.data.body[0]?.items[0]?.bgimage.url;
  const bannerpage = error.data.body[0]?.items[0]?.bannerpage;
  return (
    <>
      <CommonBanner
        image={bannerimage}
        heading={bannerheading}
        page={bannerpage}
      />
      <ErrorMessages error={error} />
      <OurPartner />
    </>
  );
};

export default Error;
export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const error = await client.getByUID("error", "id-is-error");
  return {
    props: {
      error,
    },
  };
}
