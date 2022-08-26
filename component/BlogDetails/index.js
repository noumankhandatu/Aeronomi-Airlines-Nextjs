import React from "react";
import BlogSidebar from "../Common/BlogSidebar";
import AllComment from "../BlogDetails/AllComment";
import ReplayForm from "../BlogDetails/ReplayForm";

const BlogDetailsArea = ({ blog }) => {
  const image = blog?.data?.image.url;
  const owner = blog?.data?.owner;
  const date = blog?.data?.date;
  const month = blog?.data?.month;
  const label = blog?.data?.label;
  const para = blog?.data?.para;
  const blockquote = blog?.data?.blockquote;
  const tag = blog?.data?.tag;
  const tagone = blog?.data?.tagone;
  const tagtwo = blog?.data?.tagtwo;
  const tagthree = blog?.data?.tagthree;
  const tagfour = blog?.data?.tagfour;
  const tagfive = blog?.data?.tagfive;
  const share = blog?.data?.share;
  return (
    <>
      <section id="blog_area_sidebar">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="single_blog_wrappers">
                <div className="blog_single_item">
                  <div className="blog_single_text_area">
                    <div className="blog_single_top_img">
                      <img src={image} alt="Details_Img" />
                    </div>
                    <div className="blog_single_viewer_area ">
                      <ul>
                        <li>
                          <a href="#!">
                            <i className="far fa-user"></i>
                            {owner}
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="far fa-clock"></i>
                            {date}
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="far fa-comment"></i>
                            {month}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="blog_single_heading">
                      <h3>{label}</h3>
                    </div>
                    <div className="blog_single_text">
                      <p>{para}</p>
                      <blockquote>{blockquote}</blockquote>
                    </div>
                    <div className="blog_single_tags_bottom">
                      <ul>
                        <li>
                          <i className="fas fa-tags"></i> {tag}
                        </li>
                        <li>
                          <a href="!#">{tagone}</a>
                        </li>
                        <li>
                          <a href="!#">{tagtwo}</a>
                        </li>
                        <li>
                          <a href="!#">{tagthree}</a>
                        </li>
                        <li>
                          <a href="!#">{tagfour}</a>
                        </li>
                        <li>
                          <a href="!#">{tagfive}</a>
                        </li>
                      </ul>
                      <ul className="shared_post">
                        <li>
                          <a href="#!">
                            <i className="fas fa-share-alt"></i>
                            {share}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <AllComment blog={blog} />
                <ReplayForm />
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <BlogSidebar  blog={blog}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsArea;
