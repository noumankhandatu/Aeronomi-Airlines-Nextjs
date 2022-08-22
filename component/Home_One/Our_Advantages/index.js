import React from "react";
import { OurAdventagesData } from "./Our_Advantage_Data";
import OurAdvantageCard from "./Our_Advantage_Card";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OurAdvantage = () => {
  let responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    960: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  };
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
                  <OwlCarousel
                    className="owl-theme"
                    responsive={responsive}
                    autoplay={true}
                    dots={true}
                    autoplayHoverPause={true}
                    autoplayTimeout={2500}
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
                  </OwlCarousel>
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
