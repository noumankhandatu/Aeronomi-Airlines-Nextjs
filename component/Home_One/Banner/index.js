import React, { useState, useEffect } from "react";
import Link from "next/link";
import Carousel from "react-elastic-carousel";
import Prismic from "prismic-javascript";
import { Client } from "../../../prismic-configuration";
const HomeBanner = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];

  const [toggleFn, setToggleFn] = useState(true);
  const [fetchData, setFetchData] = useState("");
  async function getServerSideProps() {
    const home = await Client().query(
      Prismic.Predicates.at("document.type", "home")
    );
    setFetchData(home);
    return {
      props: {
        home,
      },
    };
  }
  if (toggleFn) {
    getServerSideProps();
    setToggleFn(!toggleFn);
  }
  const mapper = fetchData?.results?.map((items) => {
    return items?.data?.body[0]?.items;
  });
  const firstCaroBtnText = mapper?.map((items) => {
    return items[0].buttontext;
  });

  const firstCaroImageOne = mapper?.map((items) => {
    return items[0].image1.url;
  });
  const firstCaroBtnDes = mapper?.map((items) => {
    return items[0].description;
  });
  const firstCaroBtnTitle = mapper?.map((items) => {
    return items[0].title1;
  });

  const SecondCaroImageOne = mapper?.map((items) => {
    return items[1].image1.url;
  });
  const SecondCaroBtnText = mapper?.map((items) => {
    return items[1].buttontext;
  });
  const SecondCaroDes = mapper?.map((items) => {
    return items[1].description;
  });
  const SecondCaroTitle = mapper?.map((items) => {
    return items[1].title1;
  });

  const ThirdCaroImageOne = mapper?.map((items) => {
    return items[2].image1.url;
  });
  const ThirdCaroBtnText = mapper?.map((items) => {
    return items[2].buttontext;
  });
  const ThirdCaroDes = mapper?.map((items) => {
    return items[2].description;
  });
  const ThirdCaroTitle = mapper?.map((items) => {
    return items[2].title1;
  });
  useEffect(() => {
    getServerSideProps();
  }, []);
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
              className="banner-item "
              style={{
                backgroundImage: `url(${firstCaroImageOne})`,
              }}
            >
              <div className="container">
                <div className="banner_one_inner">
                  <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                      <div className="banner-text">
                        <h1>
                          {firstCaroBtnTitle}
                          <br />
                        </h1>
                        <p>{firstCaroBtnDes}</p>
                        <Link href="/contact">
                          <div className="btn btn-theme">
                            {`${firstCaroBtnText}`}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="banner-item "
              style={{
                backgroundImage: `url(${SecondCaroImageOne})`,
              }}
            >
              <div className="container">
                <div className="banner_one_inner">
                  <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                      <div className="banner-text">
                        <h1>
                          {SecondCaroTitle
                            ? SecondCaroTitle
                            : `Revolutionizing the way you charter!`}
                          <br />
                        </h1>
                        <p>{SecondCaroDes}</p>
                        <Link href="/contact">
                          <div className="btn btn-theme">
                            {`${SecondCaroBtnText}`}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="banner-item "
              style={{
                backgroundImage: `url(${ThirdCaroImageOne})`,
              }}
            >
              <div className="container">
                <div className="banner_one_inner">
                  <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                      <div className="banner-text">
                        <h1>
                          {ThirdCaroTitle}
                          <br />
                        </h1>
                        <p>{ThirdCaroDes}</p>
                        <Link className="btn btn-theme" href="/contact">
                          <div className="btn btn-theme">
                            {`${ThirdCaroBtnText}`}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
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
