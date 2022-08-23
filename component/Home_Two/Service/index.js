import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import SectionHeading from "../../Common/SectionHeading";
import ServiceCard from "../../Common/Service/ServiceCard";
import { ServiceData } from "../../Common/Service/ServiceData";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];
const ServiceHomeTwo = () => {
  return (
    <>
      <section id="home_two_service">
        <div className="container">
          <SectionHeading
            heading="Taking care of you and your business all the way"
            para="Solving your supply chain needs from end to end, taking the
        complexity out of container shipping. We are at the forefront of developing innovation."
          />
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="service_slider_home_two">
                <Carousel
                  itemPadding={[5]}
                  enableAutoPlay={true}
                  autoPlaySpeed={2000}
                  showArrows={false}
                  breakPoints={breakPoints}
                >
                  {ServiceData.map((data, index) => (
                    <ServiceCard
                      img={data.img}
                      heading={data.heading}
                      para={data.para}
                      button={data.button}
                      key={index}
                    />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHomeTwo;
