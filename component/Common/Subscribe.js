import React from "react";
const Subscribe = ({ subData }) => {
  const subbgimage = subData.data.subbgimage.url;
  const subimage = subData.data.subimage.url;
  const subbtntext = subData.data.subbtntext;
  const subtitle = subData.data.subtitle;
  return (
    <>
      <section
        id="subscribe_area"
        style={{ backgroundImage: `url(${subbgimage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="subscribe_img">
                <img src={subimage} alt="scribe_img" />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="subscribe-area-inner">
                <div className="heading-left-border">
                  <h2>{subtitle}</h2>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Recipient's email"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn  btn-theme"
                      type="button"
                      id="button-addon2"
                    >
                      {subbtntext}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
