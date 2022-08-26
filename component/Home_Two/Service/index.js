import React from "react";
import Carousel from "react-elastic-carousel";
import SectionHeading from "../../Common/SectionHeading";
import ServiceCard from "../../Common/Service/ServiceCard";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];
const ServiceHomeTwo = ({ about }) => {
  const title = about.data.body[1].items[0].title;
  const description = about.data.body[1].items[0].description;
  const imageOne = about.data.body[2].items[0].image.url;
  const headingOne = about.data.body[2].items[0].name;
  const paraOne = about.data.body[2].items[0].dest;
  const buttonOne = about.data.body[2].items[0].para;
  const imageTwo = about.data.body[2].items[1].image.url;
  const headingTwo = about.data.body[2].items[1].name;
  const paraTwo = about.data.body[2].items[1].dest;
  const buttonTwo = about.data.body[2].items[1].para;
  const imageThree = about.data.body[2].items[2].image.url;
  const headingThree = about.data.body[2].items[2].name;
  const paraThree = about.data.body[2].items[2].dest;
  const buttonThree = about.data.body[2].items[2].para;
  const imageFour = about.data.body[2].items[3].image.url;
  const headingFour = about.data.body[2].items[3].name;
  const paraFour = about.data.body[2].items[3].dest;
  const buttonFour = about.data.body[2].items[3].para;
  const imageFive = about.data.body[2].items[4].image.url;
  const headingFive = about.data.body[2].items[4].name;
  const paraFive = about.data.body[2].items[4].dest;
  const buttonFive = about.data.body[2].items[4].para;
  const imageSix = about.data.body[2].items[5].image.url;
  const headingSix = about.data.body[2].items[5].name;
  const paraSix = about.data.body[2].items[5].dest;
  const buttonSix = about.data.body[2].items[5].para;
  const imageSeven = about.data.body[2].items[6].image.url;
  const headingSeven = about.data.body[2].items[6].name;
  const paraSeven = about.data.body[2].items[6].dest;
  const buttonSeven = about.data.body[2].items[6].para;
  const imageEight = about.data.body[2].items[7].image.url;
  const headingEight = about.data.body[2].items[7].name;
  const paraEight = about.data.body[2].items[7].dest;
  const buttonEight = about.data.body[2].items[7].para;

  // array
  const ServiceData = [
    {
      img: imageOne,
      heading: headingOne,
      para: paraOne,
      button: buttonOne,
    },
    {
      img: imageTwo,
      heading: headingTwo,
      para: paraTwo,
      button: buttonTwo,
    },
    {
      img: imageThree,
      heading: headingThree,
      para: paraThree,
      button: buttonThree,
    },
    {
      img: imageFour,
      heading: headingFour,
      para: paraFour,
      button: buttonFour,
    },
    {
      img: imageFive,
      heading: headingFive,
      para: paraFive,
      button: buttonFive,
    },
    {
      img: imageSix,
      heading: headingSix,
      para: paraSix,
      button: buttonSix,
    },
    {
      img: imageSeven,
      heading: headingSeven,
      para: paraSeven,
      button: buttonSeven,
    },
    {
      img: imageEight,
      heading: headingEight,
      para: paraEight,
      button: buttonEight,
    },
  ];
  return (
    <>
      <section id="home_two_service">
        <div className="container">
          <SectionHeading heading={title} para={description} />
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
