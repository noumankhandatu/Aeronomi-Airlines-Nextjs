import React from "react";
import { OurAdventagesData } from "./Our_Advantage_Data";
import OurAdvantageCard from "./Our_Advantage_Card";
import Carousel from "react-elastic-carousel";

const OurAdvantage = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 2 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];
  return (
    <>
      <section id="our_advantages_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="our_advantages_inner">
                <div className="heading-left-border">
                  <h2>Our Advantages</h2>
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
