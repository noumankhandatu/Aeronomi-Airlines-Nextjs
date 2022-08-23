import React from "react";
import SectionHeading from "../../Common/SectionHeading";
import TeamCard from "../../Common/Team/TeamCard";
import { TeamData } from "../../Common/Team/TeamData";

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Carousel from "react-elastic-carousel";

const TeamArea = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <>
      <section id="team_area">
        <div className="container">
          <SectionHeading
            heading="Our Team"
            para="Solving your supply chain needs from end to end, taking the
complexity out of container shipping. We are at the forefront of developing innovation."
          />
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="team-slider">
                <div className="carousel-wrapper">
                  <Carousel
                    itemPadding={[5]}
                    enableAutoPlay={true}
                    autoPlaySpeed={2000}
                    showArrows={false}
                    breakPoints={breakPoints}
                  >
                    {TeamData.map((data, index) => {
                      return (
                        <div>
                          <TeamCard
                            img={data.img}
                            heading={data.heading}
                            para={data.para}
                            name={data.name}
                            des={data.des}
                            key={index}
                          />
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

export default TeamArea;
