import React from "react";
import BlogCard from "../Common/Blog/BlogCard";
import Pagination from "../Common/Pagination";

const BlogLayout = ({ blog }) => {
  const BlogData = blog?.data?.body[1]?.items;
  return (
    <>
      <section id="blog_area_page">
        <div className="container">
          <div className="row">
            {BlogData.map((data, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                <BlogCard
                  img={data?.img?.url}
                  date={data?.date}
                  heading={data?.heading}
                  para={data?.para}
                  name={data?.name}
                  comment={data?.comment}
                  month={data?.month}
                  day={data?.day}
                />
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogLayout;
