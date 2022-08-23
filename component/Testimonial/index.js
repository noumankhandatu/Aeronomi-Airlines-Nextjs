import React from "react";
import ClientCard from "../Common/Client/ClientCard";
import { ClientsData } from "../Common/Client/ClientData";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const TestimonialSlider = () => {
  return (
    <>
      <section id="testimonial_homeTwo">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12 col-12">
              <div className="client_review_two ">
                <div className="carousel-wrapper">
                  <Carousel
                    itemPadding={[5]}
                    enableAutoPlay={true}
                    autoPlaySpeed={2000}
                    showArrows={false}
                    breakPoints={breakPoints}
                  >
                    {ClientsData.map((data, index) => (
                      <ClientCard
                        img={data.img}
                        name={data.name}
                        des={data.des}
                        para={data.para}
                        key={index}
                      />
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

export default TestimonialSlider;
