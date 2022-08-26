import React from "react";
import CommonBanner from "../component/Common/Banner";
import BlogLayout from "../component/BlogGrid/index";
import OurPartner from "../component/Common/OurPartner";
import sm from "../sm.json";
import * as prismic from "@prismicio/client";

const BlogGrid = ({ blog }) => {
  const bannerheading = blog.data.body[0].items[0].bannerheading;
  const bannerpage = blog.data.body[0].items[0].bannerpage;
  const bgimage = blog.data.body[0].items[0].bgimage.url;

  return (
    <>
      <CommonBanner image={bgimage} heading={bannerheading} page={bannerpage} />
      <BlogLayout blog={blog} />
      <OurPartner />
    </>
  );
};

export default BlogGrid;
export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const blog = await client.getByUID("blog", "id-is-blog");
  return {
    props: {
      blog,
    },
  };
}
