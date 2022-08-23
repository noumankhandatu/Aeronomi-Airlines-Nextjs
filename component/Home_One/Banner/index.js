import React from "react";
import Link from "next/link";
import Carousel from "react-elastic-carousel";

const HomeBanner = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];
  return (
    <div>
      <section id="homeOne_banner">
        <div className="banner-slider">
          <Carousel
            enableAutoPlay={true}
            autoPlaySpeed={2000}
            showArrows={false}
            breakPoints={breakPoints}
          >
            <div
              className="banner-item"
              style={{
                backgroundImage: `url(${"https://picsum.photos/200/300"})`,
              }}
            >
              <div className="container">
                <div className="banner_one_inner">
                  <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                      <div className="banner-text">
                        <h1>
                          Shipping Products <br />
                          Worldwide
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua quis ipsum suspendisse.
                        </p>
                        <Link className="btn btn-theme" href="/request_quote">
                          Get A Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${"https://picsum.photos/200/300"})`,
              }}
              className="banner-item banner-img-two"
            >
              <div className="container">
                <div className="banner_one_inner">
                  <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                      <div className="banner-text">
                        <h1>
                          Shipping Products <br />
                          Worldwide
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua quis ipsum suspendisse.
                        </p>
                        <Link className="btn btn-theme" href="/request_quote">
                          Get A Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${"https://picsum.photos/200/300"})`,
              }}
              className="banner-item banner-img-three"
            >
              <div className="container">
                <div className="banner_one_inner">
                  <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                      <div className="banner-text">
                        <h1>
                          Shipping Products <br />
                          Worldwide
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua quis ipsum suspendisse.
                        </p>
                        <Link className="btn btn-theme" href="/request_quote">
                          Get A Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
          <h1>ladk</h1>
        </div>
        <div className="banner_social_icon">
          <ul>
            <li>
              <a href="#!">
                <i className="fab facebook fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fab twitter fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fab instagram fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fab linkedin fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;
