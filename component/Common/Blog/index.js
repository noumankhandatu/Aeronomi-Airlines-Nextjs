import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import SectionHeading from "../SectionHeading";
import { Client } from "../../../prismic-configuration";
import Prismic from "prismic-javascript";
const BlogHome = () => {
  const [toggleFn, setToggleFn] = useState(true);
  const [fetchData, setFetchData] = useState("");
  async function getServerSideProps() {
    const home = await Client().query(
      Prismic.Predicates.at("document.type", "home")
    );
    setFetchData(home);
    return {
      props: {
        home,
      },
    };
  }
  if (toggleFn) {
    getServerSideProps();
    setToggleFn(!toggleFn);
  }
  const title = fetchData?.results?.map((items) => {
    return items.data.body[8].items[0].title;
  });

  const description = fetchData?.results?.map((items) => {
    return items.data.body[8].items[0].description;
  });

  const blogimage = fetchData?.results?.map((items) => {
    return items.data.body[9].items[0].blogimage.url;
  });

  const blogheading = fetchData?.results?.map((items) => {
    return items.data.body[9].items[0].blogheading;
  });

  const blogpara = fetchData?.results?.map((items) => {
    return items.data.body[9].items[0].blogpara;
  });

  const blogname = fetchData?.results?.map((items) => {
    return items.data.body[9].items[0].blogname;
  });
  const blogcomment = fetchData?.results?.map((items) => {
    return items.data.body[9].items[0].blogcomment;
  });

  const blogdate = fetchData?.results?.map((items) => {
    return items.data.body[9].items[0].blogdate;
  });
  const blogmonth = fetchData?.results?.map((items) => {
    return items.data.body[9].items[0].blogmonth;
  });
  const blogday = fetchData?.results?.map((items) => {
    return items.data.body[9].items[0].blogday;
  });

  const blogimages = fetchData?.results?.map((items) => {
    return items.data.body[10].items[0].blogimage.url;
  });

  const blogheadings = fetchData?.results?.map((items) => {
    return items.data.body[10].items[0].blogheading;
  });

  const blogparas = fetchData?.results?.map((items) => {
    return items.data.body[10].items[0].blogpara;
  });

  const blognames = fetchData?.results?.map((items) => {
    return items.data.body[10].items[0].blogname;
  });
  const blogcomments = fetchData?.results?.map((items) => {
    return items.data.body[10].items[0].blogcomment;
  });

  const blogdates = fetchData?.results?.map((items) => {
    return items.data.body[10].items[0].blogdate;
  });
  const blogmonths = fetchData?.results?.map((items) => {
    return items.data.body[10].items[0].blogmonth;
  });
  const blogdays = fetchData?.results?.map((items) => {
    return items.data.body[10].items[0].blogday;
  });

  const blogimaget = fetchData?.results?.map((items) => {
    return items.data.body[11].items[0].blogimage.url;
  });

  const blogheadingt = fetchData?.results?.map((items) => {
    return items.data.body[11].items[0].blogheading;
  });

  const blogparat = fetchData?.results?.map((items) => {
    return items.data.body[11].items[0].blogpara;
  });

  const blognamet = fetchData?.results?.map((items) => {
    return items.data.body[11].items[0].blogname;
  });
  const blogcommentt = fetchData?.results?.map((items) => {
    return items.data.body[11].items[0].blogcomment;
  });

  const blogdatet = fetchData?.results?.map((items) => {
    return items.data.body[11].items[0].blogdate;
  });
  const blogmontht = fetchData?.results?.map((items) => {
    return items.data.body[11].items[0].blogmonth;
  });
  const blogdaytt = fetchData?.results?.map((items) => {
    return items.data.body[11].items[0].blogday;
  });

  const BlogData = [
    {
      img: blogimage,
      heading: blogheading,
      para: blogpara,
      name: blogname,
      comment: blogcomment,
      date: blogdate,
      month: blogmonth,
      day: blogday,
    },
    {
      img: blogimages,
      heading: blogheadings,
      para: blogparas,
      name: blognames,
      comment: blogcomments,
      date: blogdates,
      month: blogmonths,
      day: blogdays,
    },
    {
      img: blogimaget,
      heading: blogheadingt,
      para: blogparat,
      name: blognamet,
      comment: blogcommentt,
      date: blogdatet,
      month: blogmontht,
      day: blogdaytt,
    },
  ];

  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <>
      <section id="news_blog_area">
        <div className="container">
          <SectionHeading heading={title} para={description} />
          <div className="row">
            {BlogData.slice(0, 3).map((data, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                <BlogCard
                  img={data.img}
                  date={data.date}
                  heading={data.heading}
                  para={data.para}
                  name={data.name}
                  comment={data.comment}
                  month={data.month}
                  day={data.day}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogHome;
