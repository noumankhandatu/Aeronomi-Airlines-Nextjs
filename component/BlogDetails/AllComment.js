import React from "react";

const AllComment = ({ blog }) => {
  const Data = blog?.data?.body[8]?.items;
  
  return (
    <div className="blog_single_item">
      <div className="blog_sidebar_heading">
        <h3>All Comments</h3>
      </div>
      <div className="all_comment_wrappers">
        {/* question */}
        {Data &&
          Data?.map((items, i) => {
            const { image1, person, comment } = items;
            return (
              <>
                <div className="comment_item">
                  <img
                    src={image1.url ? image1.url : `pending`}
                    alt="Blogger_Img"
                  />
                  <div className="comments_text">
                    <div className="comment_heading_flex">
                      <h5>{person ? person : `pending`} </h5>
                      <a href="#!">
                        <i className="fas fa-share"></i>
                      </a>
                    </div>
                    <p>{comment ? comment : `pending`}</p>
                  </div>
                </div>
              </>
            );
          })}

        {/* answer */}
        {/* <div className="comment_item replay_comment">
        <img src={""} alt="Blogger_Img" />
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
      </div> */}
      </div>
    </div>
  );
};

export default AllComment;
