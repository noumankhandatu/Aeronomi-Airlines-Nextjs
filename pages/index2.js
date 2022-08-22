import React from "react";
import HomeBannerTwo from "../src/component/Home_Two/Banner";
import HomeTwoAbout from "../src/component/Home_Two/About";
import ServiceHomeTwo from "../src/component/Home_Two/Service";
import HomeTwoCounter from "../src/component/Common/Counter";
import HomeTwoMap from "../src/component/Home_Two/Map";
import TeamArea from "../src/component/Home_Two/Team";
import HomeTwoClient from "../src/component/Home_Two/Client";
import Subscribe from "../src/component/Common/Subscribe";
import BlogHome from "../src/component/Common/Blog";

const index2 = () => {
  return (
    <>
      <HomeBannerTwo />
      <HomeTwoAbout />
      <ServiceHomeTwo />
      <HomeTwoCounter />
      <HomeTwoMap />
      <TeamArea />
      <HomeTwoClient />
      <BlogHome />
      <Subscribe />
    </>
  );
};

export default index2;
