import React from "react";
import CommonBanner from "../component/Common/Banner";
import TestimonialSlider from "../component/Testimonial";
import OurPartner from "../component/Common/OurPartner";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";

const Testimonials = ({ testimonials }) => {
  const bannerheading = testimonials.data.body[0].items[0].bannerheading;
  const bannerpage = testimonials.data.body[0].items[0].bannerpage;
  const bgimage = testimonials.data.body[0].items[0].bgimage.url;
  return (
    <>
      <CommonBanner image={bgimage} heading={bannerheading} page={bannerpage} />
      <TestimonialSlider testimonials={testimonials} />
      <OurPartner />
    </>
  );
};

export default Testimonials;

export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const testimonials = await client.getByUID(
    "testimonials",
    "id-is-testimonial"
  );
  return {
    props: {
      testimonials,
    },
  };
}
