import React from "react";
import { ClientLogo } from "./TestimonialData";
import Carousel from "react-elastic-carousel";

const ClientLogos = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
  ];
  return (
    <>
      <div id="client_logo_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="client_logo_slider">
                <Carousel
                  itemPadding={[5]}
                  enableAutoPlay={true}
                  autoPlaySpeed={2000}
                  showArrows={false}
                  breakPoints={breakPoints}
                >
                  {ClientLogo.map((data, index) => (
                    <a href="#!" key={index}>
                      <img src={data.img} alt="logo img" />
                    </a>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientLogos;
