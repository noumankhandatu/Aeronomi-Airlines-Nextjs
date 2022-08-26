import React, { useState } from "react";
import LogisticsCard from "./LogisticsCard";
import SectionHeading from "../../Common/SectionHeading";
import Carousel from "react-elastic-carousel";

const LogisticsService = ({ logData }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const title = logData.data.body[2].items[0].title;
  const description = logData.data.body[2].items[0].description;
  const itemCaroTextOne = logData.data.itemcarotextone;
  const itemCaroTextTwo = logData.data.itemcarotexttwo;
  const itemCaroTextThree = logData.data.itemcarotextthree;
  const itemImageOne = logData.data.itemimageone.url;
  const itemHeadingOne = logData.data.itemheadingone;
  const itemParaOne = logData.data.itemparaone;
  const itemImageTwo = logData.data.itemimagetwo.url;
  const itemHeadingTwo = logData.data.itemheadingtwo;
  const itemParaTwo = logData.data.itemparatwo;
  const itemImageThree = logData.data.itemimagethree.url;
  const itemHeadingThree = logData.data.itemheadingthree;
  const itemParaThree = logData.data.itemparathree;

  const LogisticsData = [
    [
      {
        img: itemImageOne,
        heading: itemHeadingOne,
        para: itemParaOne,
      },
      {
        img: itemImageTwo,
        heading: itemHeadingTwo,
        para: itemParaTwo,
      },
      {
        img: itemImageThree,
        heading: itemHeadingThree,
        para: itemParaThree,
      },
    ],
  ];

  return (
    <>
      <section id="logistics_area">
        <div className="container">
          <SectionHeading heading={title} para={description} />
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
                        {itemCaroTextOne}
                      </button>
                    </li>
                    <li>
                      <button
                        className={sliderIndex === 1 ? "active" : ""}
                        // onClick={() => setSliderIndex(1)}
                      >
                        {itemCaroTextTwo}
                      </button>
                    </li>
                    <li>
                      <button
                        className={sliderIndex === 2 ? "active" : ""}
                        // onClick={() => setSliderIndex(2)}
                      >
                        {itemCaroTextThree}
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
