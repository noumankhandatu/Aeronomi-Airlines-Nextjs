import React from "react";
import Link from "next/link"; //import this
// CommonBanner Area
const CommonBanner = (props) => {
  return (
    <>
      <section id="inner_area_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner_banner_text">
                <h2>{props.heading}</h2>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <i className="fas fa-angle-right"></i>
                  </li>
                  <li className="active">{props.page}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonBanner;
