import React from "react";
import CommonBanner from "../component/Common/Banner";
import TrackShipment from "../component/TrackYourShipment";
import OurPartner from "../component/Common/OurPartner";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
const TrackYourShip = ({ trackship }) => {
  const bannerheading = trackship.data.body[0].items[0].bannerheading;
  const bannerpage = trackship.data.body[0].items[0].bannerpage;
  const bgimage = trackship.data.body[0].items[0].bgimage.url;
  return (
    <>
      <CommonBanner image={bgimage} heading={bannerheading} page={bannerpage} />
      <TrackShipment trackship={trackship} />
      <OurPartner />
    </>
  );
};

export default TrackYourShip;

export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const trackship = await client.getByUID("trackship", "id-is-trackship");
  return {
    props: {
      trackship,
    },
  };
}
