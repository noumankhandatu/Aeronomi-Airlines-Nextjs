import React from "react";
import Link from "next/link";
const HomeTwoAbout = ({ about }) => {
  const hometwoimage = about?.data?.hometwoimage.url;
  const hometwotitle = about?.data?.hometwotitle;
  const hometwotext = about?.data?.hometwotext;
  const hometwobtntext = about?.data?.hometwobtntext;
  return (
    <>
      <section id="service_about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about_service_img">
                <img src={hometwoimage} alt="img-about" />
              </div>
            </div>
            <div className="col-lg-6  col-md-12 col-sm-12 col-12">
              <div className="about_service_text">
                <div className="heading-left-border">
                  <h2>{hometwotitle}</h2>
                </div>
                <p>{hometwotext}</p>

                <Link href="/about" className="btn btn-theme">
                  {hometwobtntext}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeTwoAbout;
