import React from "react";
import CommonBanner from "../component/Common/Banner";
import GalleryImages from "../component/Gallery";
import OurPartner from "../component/Common/OurPartner";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";

const Gallery = ({ gallery }) => {
  const bannerheading = gallery?.data?.body[0]?.items[0]?.bannerheading;
  const bannerpage = gallery?.data?.body[0]?.items[0]?.bannerpage;
  const bgimage = gallery?.data?.body[0]?.items[0]?.bgimage.url;
  return (
    <>
      <CommonBanner image={bgimage} heading={bannerheading} page={bannerpage} />
      <GalleryImages gallery={gallery} />
      <OurPartner />
    </>
  );
};

export default Gallery;

export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const gallery = await client.getByUID("gallery", "id-is-gallery");
  return {
    props: {
      gallery,
    },
  };
}
