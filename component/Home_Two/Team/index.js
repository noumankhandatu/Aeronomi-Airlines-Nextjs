import React from "react";
import SectionHeading from "../../Common/SectionHeading";
import TeamCard from "../../Common/Team/TeamCard";
import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];
const TeamArea = ({ about }) => {
  const title = about.data.body[3].items[0].title;
  const description = about.data.body[3].items[0].description;
  //   array
  const imageOne = about.data.body[4].items[0].image.url;
  const headingOne = about.data.body[4].items[0].name;
  const paraOne = about.data.body[4].items[0].dest;
  const buttonOne = about.data.body[4].items[0].para;
  // 2
  const imageTwo = about.data.body[4].items[1].image.url;
  const headingTwo = about.data.body[4].items[1].name;
  const paraTwo = about.data.body[4].items[1].dest;
  const buttonTwo = about.data.body[4].items[1].para;
  //   3
  const imageThree = about.data.body[4].items[2].image.url;
  const headingThree = about.data.body[4].items[2].name;
  const paraThree = about.data.body[4].items[2].dest;
  const buttonThree = about.data.body[4].items[2].para;
  //   4
  const imageFour = about.data.body[4].items[3].image.url;
  const headingFour = about.data.body[4].items[3].name;
  const paraFour = about.data.body[4].items[3].dest;
  const buttonFour = about.data.body[4].items[3].para;
  //   5
  const imageFive = about.data.body[4].items[4].image.url;
  const headingFive = about.data.body[4].items[4].name;
  const paraFive = about.data.body[4].items[4].dest;
  const buttonFive = about.data.body[4].items[4].para;
  //   6
  const imageSix = about.data.body[4].items[5].image.url;
  const headingSix = about.data.body[4].items[5].name;
  const paraSix = about.data.body[4].items[5].dest;
  const buttonSix = about.data.body[4].items[5].para;
  const TeamData = [
    {
      img: imageOne,
      name: headingOne,
      para: paraOne,
      des: buttonOne,
    },
    {
      img: imageTwo,
      name: headingTwo,
      para: paraTwo,
      des: buttonTwo,
    },
    {
      img: imageThree,
      name: headingThree,
      para: paraThree,
      des: buttonThree,
    },
    {
      img: imageFour,
      name: headingFour,
      para: paraFour,
      des: buttonFour,
    },
    {
      img: imageFive,
      name: headingFive,
      para: paraFive,
      des: buttonFive,
    },
    {
      img: imageSix,
      name: headingSix,
      para: paraSix,
      des: buttonSix,
    },
  ];
  return (
    <>
      <section id="team_area">
        <div className="container">
          <SectionHeading heading={title} para={description} />
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
                    {TeamData.map((data, index) => (
                      <TeamCard
                        img={data.img}
                        heading={data.heading}
                        para={data.para}
                        name={data.name}
                        des={data.des}
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

export default TeamArea;
