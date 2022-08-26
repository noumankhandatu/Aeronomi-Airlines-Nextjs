import React from "react";
import BlogCard from "./BlogCard";
import SectionHeading from "../SectionHeading";

const BlogHome = ({ blogData }) => {
  const title = blogData.data.body[8].items[0].title;
  const description = blogData.data.body[8].items[0].description;
  const blogimage = blogData.data.body[9].items[0].blogimage.url;
  const blogheading = blogData.data.body[9].items[0].blogheading;
  const blogpara = blogData.data.body[9].items[0].blogpara;
  const blogname = blogData.data.body[9].items[0].blogname;
  const blogcomment = blogData.data.body[9].items[0].blogcomment;
  const blogdate = blogData.data.body[9].items[0].blogdate;
  const blogmonth = blogData.data.body[9].items[0].blogmonth;
  const blogday = blogData.data.body[9].items[0].blogday;
  const blogimages = blogData.data.body[10].items[0].blogimage.url;
  const blogheadings = blogData.data.body[10].items[0].blogheading;
  const blogparas = blogData.data.body[10].items[0].blogpara;
  const blognames = blogData.data.body[10].items[0].blogname;
  const blogcomments = blogData.data.body[10].items[0].blogcomment;
  const blogdates = blogData.data.body[10].items[0].blogdate;
  const blogmonths = blogData.data.body[10].items[0].blogmonth;
  const blogdays = blogData.data.body[10].items[0].blogday;
  const blogimaget = blogData.data.body[11].items[0].blogimage.url;
  const blogheadingt = blogData.data.body[11].items[0].blogheading;
  const blogparat = blogData.data.body[11].items[0].blogpara;
  const blognamet = blogData.data.body[11].items[0].blogname;
  const blogcommentt = blogData.data.body[11].items[0].blogcomment;
  const blogdatet = blogData.data.body[11].items[0].blogdate;
  const blogmontht = blogData.data.body[11].items[0].blogmonth;
  const blogdaytt = blogData.data.body[11].items[0].blogday;
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
