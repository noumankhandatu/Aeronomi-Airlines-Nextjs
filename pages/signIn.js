import React from "react";
import CommonBanner from "../component/Common/Banner";
import SignInForm from "../component/SignIn";
import OurPartner from "../component/Common/OurPartner";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";

const SignIn = ({ signin }) => {
  const bannerheading = signin?.data?.body[0]?.items[0]?.bannerheading;
  const bannerpage = signin?.data?.body[0]?.items[0]?.bannerpage;
  const bgimage = signin?.data?.body[0]?.items[0]?.bgimage?.url;
  const title = signin?.data?.title;
  return (
    <>
      <CommonBanner image={bgimage} heading={bannerheading} page={bannerpage} />
      <SignInForm heading={title} />
      <OurPartner />
    </>
  );
};

export default SignIn;
export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const signin = await client.getByUID("signin", "id-is-signin");
  return {
    props: {
      signin,
    },
  };
}
