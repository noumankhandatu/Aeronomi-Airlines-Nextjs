import React, { useState, useEffect } from "react";
import LogisticsCard from "./LogisticsCard";
import { LogisticsData } from "./Logistics_Data";
import SectionHeading from "../../Common/SectionHeading";
import Carousel from "react-elastic-carousel";
import { Client } from "../../../prismic-configuration";
import Prismic from "prismic-javascript";

const LogisticsService = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
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

  const title = fetchData?.results?.map((items) => {
    return items.data.body[2].items[0].title;
  });
  const description = fetchData?.results?.map((items) => {
    return items.data.body[2].items[0].description;
  });

  const itemCaroTextOne = fetchData?.results?.map((items) => {
    return items.data.itemcarotextone;
  });
  const itemCaroTextTwo = fetchData?.results?.map((items) => {
    return items.data.itemcarotexttwo;
  });
  const itemCaroTextThree = fetchData?.results?.map((items) => {
    return items.data.itemcarotextthree;
  });

  const itemImageOne = fetchData?.results?.map((items) => {
    return items.data.itemimageone.url;
  });
  const itemHeadingOne = fetchData?.results?.map((items) => {
    return items.data.itemheadingone;
  });
  const itemParaOne = fetchData?.results?.map((items) => {
    return items.data.itemparaone;
  });

  const itemImageTwo = fetchData?.results?.map((items) => {
    return items.data.itemimagetwo.url;
  });
  const itemHeadingTwo = fetchData?.results?.map((items) => {
    return items.data.itemheadingtwo;
  });
  const itemParaTwo = fetchData?.results?.map((items) => {
    return items.data.itemparatwo;
  });

  const itemImageThree = fetchData?.results?.map((items) => {
    return items.data.itemimagethree.url;
  });
  const itemHeadingThree = fetchData?.results?.map((items) => {
    return items.data.itemheadingthree;
  });
  const itemParaThree = fetchData?.results?.map((items) => {
    return items.data.itemparathree;
  });

  const LogisticsData = [
    [
      {
        img: itemImageOne,
        heading: itemHeadingOne,
        para: itemParaOne
          ? itemParaOne
          : `All our efforts and investments are geared towards offering better solutions.`,
      },
      {
        img: itemImageTwo,
        heading: itemHeadingTwo ? itemHeadingTwo : `Business Charter`,
        para: itemParaTwo
          ? itemParaTwo
          : `All our efforts and investments are geared towards offering better solutions.`,
      },
      {
        img: itemImageThree,
        heading: itemHeadingThree ? itemHeadingThree : `Air Cargo`,
        para: itemParaThree
          ? itemParaThree
          : `All our efforts and investments are geared towards offering better solutions.`,
      },
    ],
  ];

  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <>
      <section id="logistics_area">
        <div className="container">
          <SectionHeading
            heading="Logistics Services"
            para="Solving your supply chain needs from end to end, taking the
             complexity out of container shipping. We are at the forefront of developing innovation."
          />
          <div className="row">
            <div className="col-md-12">
              <div className="logistics_wrappers">
                <div className="logistic_tabs_button">
                  <ul>
                    <li>
                      <button
                        className={sliderIndex === 0 ? "active" : ""}
                        // onClick={() => setSliderIndex(0)}
                      >
                        Business Logistics
                      </button>
                    </li>
                    <li>
                      <button
                        className={sliderIndex === 1 ? "active" : ""}
                        // onClick={() => setSliderIndex(1)}
                      >
                        Military Logistics
                      </button>
                    </li>
                    <li>
                      <button
                        className={sliderIndex === 2 ? "active" : ""}
                        // onClick={() => setSliderIndex(2)}
                      >
                        Event Logistics
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="logistics_area_slider">
                  {sliderIndex === 0 && (
                    <div className="carousel-wrapper">
                      <Carousel
                        itemPadding={[5]}
                        enableAutoPlay={true}
                        autoPlaySpeed={2000}
                        showArrows={false}
                        breakPoints={breakPoints}
                      >
                        {LogisticsData[0].map((data, index) => (
                          <LogisticsCard
                            img={data.img}
                            heading={data.heading}
                            para={data.para}
                            key={index}
                          />
                        ))}
                      </Carousel>
                    </div>
                  )}

                  {sliderIndex === 1 && (
                    <Carousel
                      itemPadding={[5]}
                      enableAutoPlay={true}
                      autoPlaySpeed={2000}
                      showArrows={false}
                      breakPoints={breakPoints}
                    >
                      {LogisticsData[1].map((data, index) => (
                        <LogisticsCard
                          img={data.img}
                          heading={data.heading}
                          para={data.para}
                          key={index}
                        />
                      ))}
                    </Carousel>
                  )}

                  {sliderIndex === 2 && (
                    <Carousel
                      itemPadding={[5]}
                      enableAutoPlay={true}
                      autoPlaySpeed={2000}
                      showArrows={false}
                      breakPoints={breakPoints}
                    >
                      {LogisticsData[2].map((data, index) => (
                        <LogisticsCard
                          img={data.img}
                          heading={data.heading}
                          para={data.para}
                          key={index}
                        />
                      ))}
                    </Carousel>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogisticsService;
