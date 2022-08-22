import React from "react";
import Link from "next/link";

// Blog Card
const BlogCard = (props) => {
  return (
    <>
      <div className="blog_wrapper zoom">
        <div className="news-img">
          <Link href="/blog_details">
            <img src={props.img} alt="img " />
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
            <Link href="/blog_details">{props.heading}</Link>
          </h5>
          <p>{props.para}</p>
          <a href="/blog_details" className="author_name">
            <i className="far fa-user"></i>
            {props.name}{" "}
          </a>
          <Link href="/blog_details" className="blog_comments">
            <i className="far fa-comment">{props.comment}</i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
