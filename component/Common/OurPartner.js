import React, { useState } from "react";
import Carousel from "react-elastic-carousel";

const OurPartnerData = [
  {
    img: "https://images.prismic.io/aeronomi-airlines-ltd/1ff875a2-3c06-4620-8bef-f0a7f7561ad8_download+%283%29.png?auto=compress,format",
  },
  {
    img: "https://images.prismic.io/aeronomi-airlines-ltd/1ff875a2-3c06-4620-8bef-f0a7f7561ad8_download+%283%29.png?auto=compress,format",
  },
  {
    img: "https://images.prismic.io/aeronomi-airlines-ltd/1ff875a2-3c06-4620-8bef-f0a7f7561ad8_download+%283%29.png?auto=compress,format",
  },
  {
    img: "https://images.prismic.io/aeronomi-airlines-ltd/1ff875a2-3c06-4620-8bef-f0a7f7561ad8_download+%283%29.png?auto=compress,format",
  },
  {
    img: "https://images.prismic.io/aeronomi-airlines-ltd/1ff875a2-3c06-4620-8bef-f0a7f7561ad8_download+%283%29.png?auto=compress,format",
  },
  {
    img: "https://images.prismic.io/aeronomi-airlines-ltd/1ff875a2-3c06-4620-8bef-f0a7f7561ad8_download+%283%29.png?auto=compress,format",
  },
];

const OurPartner = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <>
      <section id="partner_area_slider">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="partner_heading">
                <h2>Our Partners:</h2>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="partner_slider_wrapper">
                <div className="carousel-wrapper">
                  <Carousel
                    pagination={false}
                    loop={true}
                    enableAutoPlay={true}
                    autoPlaySpeed={2000}
                    showArrows={false}
                    breakPoints={breakPoints}
                  >
                    {OurPartnerData.map((data, index) => {
                      return (
                        <div>
                          <div className="partner_logo" key={index}>
                            <img src={data.img} alt="logo-img" />
                          </div>
                        </div>
                      );
                    })}
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

export default OurPartner;
