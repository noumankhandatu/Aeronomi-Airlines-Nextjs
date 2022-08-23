import React from "react";

const AllComment = () => {
  return (
    <>
      <div className="blog_single_item">
        <div className="blog_sidebar_heading">
          <h3>All Comments</h3>
        </div>
        <div className="all_comment_wrappers">
          <div className="comment_item">
            <img src={"https://picsum.photos/200/300"} alt="Blogger_Img" />
            <div className="comments_text">
              <div className="comment_heading_flex">
                <h5>Saiful Kazi</h5>
                <a href="#!">
                  <i className="fas fa-share"></i> Reply
                </a>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent vehicula mauris ac facilisis congue. Fusce sem enim,
                rhoncus volutpat condimentum ac.
              </p>
            </div>
          </div>
          <div className="comment_item replay_comment">
            <img src={"https://picsum.photos/200/300"} alt="Blogger_Img" />
            <div className="comments_text">
              <div className="comment_heading_flex">
                <h5>Suddipta Dor</h5>
                <a href="#!">
                  <i className="fas fa-share"></i> Reply
                </a>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent vehicula mauris ac facilisis congue. Fusce sem enim,
                rhoncus volutpat condimentum ac.
              </p>
            </div>
          </div>
          <div className="comment_item">
            <img src={"https://picsum.photos/200/300"} alt="Blogger_Img" />
            <div className="comments_text">
              <div className="comment_heading_flex">
                <h5>Natasha Lawes</h5>
                <a href="#!">
                  <i className="fas fa-share"></i> Reply
                </a>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent vehicula mauris ac facilisis congue. Fusce sem enim,
                rhoncus volutpat condimentum ac.
              </p>
            </div>
          </div>
          <div className="comment_item replay_comment">
            <img src={"https://picsum.photos/200/300"} alt="Blogger_Img" />
            <div className="comments_text">
              <div className="comment_heading_flex">
                <h5>Hadayet Ali</h5>
                <a href="#!">
                  <i className="fas fa-share"></i> Reply
                </a>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent vehicula mauris ac facilisis congue. Fusce sem enim,
                rhoncus volutpat condimentum ac.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllComment;
