import React from "react";
import CommonBanner from "../component/Common/Banner";
import SignUpForm from "../component/SignUp";
import OurPartner from "../component/Common/OurPartner";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";

const SignUp = ({ signup }) => {
  const bannerheading = signup.data.body[0].items[0].bannerheading;
  const bannerpage = signup.data.body[0].items[0].bannerpage;
  const bgimage = signup.data.body[0].items[0].bgimage.url;
  const title = signup.data.title;
  return (
    <>
      <CommonBanner image={bgimage} heading={bannerheading} page={bannerpage} />
      <SignUpForm heading={title} />
      <OurPartner />
    </>
  );
};

export default SignUp;
export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const signup = await client.getByUID("signup", "id-is-signin");
  return {
    props: {
      signup,
    },
  };
}
