import React from "react";
import TeamCards from "../component/OurTeam";
import CommonBanner from "../component/Common/Banner";
import OurPartner from "../component/Common/OurPartner";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";

const OurTeam = ({ team }) => {
  const bannerheading = team.data.body[0].items[0].bannerheading;
  const bannerpage = team.data.body[0].items[0].bannerpage;
  const bgimage = team.data.body[0].items[0].bgimage.url;
  return (
    <>
      <CommonBanner image={bgimage} heading={bannerheading} page={bannerpage} />
      <TeamCards team={team} />
      <OurPartner />
    </>
  );
};

export default OurTeam;

export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const team = await client.getByUID("team", "id-is-team");
  return {
    props: {
      team,
    },
  };
}
