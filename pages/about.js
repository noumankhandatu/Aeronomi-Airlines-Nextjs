import React from "react";
import CommonBanner from "../component/Common/Banner";
import HomeTwoAbout from "../component/Home_Two/About";
import ServiceHomeTwo from "../component/Home_Two/Service";
import OurPartner from "../component/Common/OurPartner";
import TeamArea from "../component/Home_Two/Team";
import sm from "../sm.json";
import * as prismic from "@prismicio/client";

export default function About({ about }) {
  const bgimage = about.data.body[0].items[0].bgimage.url;
  const bannerheading = about.data.body[0].items[0].bannerheading;
  const bannerpage = about.data.body[0].items[0].bannerpage;
  return (
    <>
      <CommonBanner heading={bannerheading} page={bannerpage} image={bgimage} />
      <HomeTwoAbout about={about} />
      <ServiceHomeTwo about={about} />
      <TeamArea about={about} />
      <OurPartner />
    </>
  );
}

export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const about = await client.getByUID("about", "id-is-about");
  return {
    props: {
      about,
    },
  };
}
