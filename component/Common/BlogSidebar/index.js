import React from "react";
import Link from "next/link";

const BlogSidebar = ({ blog }) => {
  const RealData = blog?.data?.body[4]?.items;
  const Category = blog?.data?.body[5]?.items;
  const search = blog?.data?.search;
  const popular = blog?.data?.popular;
  const catogery = blog?.data?.catogery;
  return (
    <>
      <div className="blog_sidebar_wrapper">
        <div className="blog_sidebar_item">
          <div className="blog_sidebar_heading">
            <h3>{search}</h3>
          </div>
          <div className="blog-search">
            <input type="text" className="form-control" />
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="blog_sidebar_item">
          <div className="blog_sidebar_heading">
            <h3>{catogery}</h3>
          </div>
          <div className="sidebar-categorie-list">
            <ul>
              {Category &&
                Category?.map((data, index) => (
                  <li key={index}>
                    <a href="#!">
                      <span>{data.list}</span>
                      <span>{data.count}</span>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="blog_sidebar_item">
          <div className="blog_sidebar_heading">
            <h3>{popular}</h3>
          </div>
          <div className="popular_post_wrapper">
            {RealData &&
              RealData.map((data, index) => (
                <div className="popular_post_item" key={index}>
                  <div className="populer_post_img">
                    <Link href="/blog_details">
                      <img src={data.bgimage} alt="img" />
                    </Link>
                  </div>
                  <div className="popular_post_text">
                    <h4>
                      <Link href="/blog_details">{data.bannerheading}</Link>
                    </h4>
                    <p>
                      <i className="far fa-clock"></i>
                      {data.bannerpage}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
