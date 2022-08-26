import React from "react";
import Link from "next/link";

// Blog Card
const BlogCard = (props) => {
  return (
    <>
      <div className="blog_wrapper zoom">
        <div className="news-img">
          <Link href="/blog_details">
            <img src={props.img} alt="img"  />
          </Link>
          <div className="date">
            <small>{props.month}</small>
            <span>{props.day}</span>
          </div>
        </div>
        <div className="blog_text">
          <h6>
            <i className="far fa-clock"></i>
            {props.date}
          </h6>
          <h5>
            <a href="/blog_details">{props.heading}</a>
          </h5>
          <p>{props.para}</p>
          <Link href="/blog_details">
            <div className="author_name">
              <i className="far fa-user"></i>
              {props.name}
            </div>
          </Link>
          <Link href="/blog_details" className="">
            <i className="far fa-comment blog_comments">{props.comment}</i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
