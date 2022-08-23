import React, { useState, useEffect } from "react";
import OurAdvantageCard from "./Our_Advantage_Card";
import Carousel from "react-elastic-carousel";
import Prismic from "prismic-javascript";
import { Client } from "../../../prismic-configuration";
const OurAdvantage = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 2 },
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
  const advimage = fetchData?.results?.map((items) => {
    return items.data.advimage.url;
  });

  const advheading = fetchData?.results?.map((items) => {
    return items.data.advheading;
  });

  const advlogoone = fetchData?.results?.map((items) => {
    return items.data.advlogoone.url;
  });

  const advtitileone = fetchData?.results?.map((items) => {
    return items.data.advtitileone;
  });
  const advdesone = fetchData?.results?.map((items) => {
    return items.data.advdesone;
  });

  const advlogotwo = fetchData?.results?.map((items) => {
    return items.data.advimagetwo.url;
  });

  const advtitiletwo = fetchData?.results?.map((items) => {
    return items.data.advtitiletwo;
  });
  const advdestwo = fetchData?.results?.map((items) => {
    return items.data.advdestwo;
  });

  const advlogothree = fetchData?.results?.map((items) => {
    return items.data.advimagethree.url;
  });

  const advtitilethree = fetchData?.results?.map((items) => {
    return items.data.advtitilethree;
  });
  const advdesthree = fetchData?.results?.map((items) => {
    return items.data.advdesthree;
  });

  const OurAdventagesData = [
    [
      {
        img: advlogoone,
        heading: advtitileone,
        para: advdesone,
      },
      {
        img: advlogotwo,
        heading: advtitiletwo,
        para: advdestwo,
      },
      {
        img: advlogothree,
        heading: advtitilethree,
        para: advdesthree,
      },
    ],
    [
      {
        img: advlogoone,
        heading: advtitileone,
        para: advdesone,
      },
      {
        img: advlogotwo,
        heading: advtitiletwo,
        para: advdestwo,
      },
      {
        img: advlogothree,
        heading: advtitilethree,
        para: advdesthree,
      },
    ],
    [
      {
        img: advlogoone,
        heading: advtitileone,
        para: advdesone,
      },
      {
        img: advlogotwo,
        heading: advtitiletwo,
        para: advdestwo,
      },
      {
        img: advlogothree,
        heading: advtitilethree,
        para: advdesthree,
      },
    ],
  ];

  useEffect(() => {
    getServerSideProps();
  }, []);
  return (
    <>
      <section
        id="our_advantages_area"
        style={{ backgroundImage: `url(${advimage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="our_advantages_inner">
                <div className="heading-left-border">
                  <h2>{advheading}</h2>
                </div>
                <div className="advantages_slider">
                  <Carousel
                    itemPadding={[5]}
                    enableAutoPlay={true}
                    autoPlaySpeed={2000}
                    showArrows={false}
                    breakPoints={breakPoints}
                  >
                    {OurAdventagesData.map((advantages, index) => (
                      <div className="our_advantages_item" key={index}>
                        {advantages.map((data, index) => (
                          <OurAdvantageCard
                            key={index}
                            img={data.img}
                            heading={data.heading}
                            para={data.para}
                          />
                        ))}
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurAdvantage;
