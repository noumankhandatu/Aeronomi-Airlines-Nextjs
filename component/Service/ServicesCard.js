import React from "react";
import SectionHeading from "../Common/SectionHeading";
import ServiceCard from "../Common/Service/ServiceCard";
const ServicesCard = ({ services }) => {
  const title = services.data.body[1].items[0].title;
  const description = services.data.body[1].items[0].description;
  // array 1
  const imgOne = services.data.body[2].items[0].image.url;
  const paraOne = services.data.body[2].items[0].para;
  const nameOne = services.data.body[2].items[0].name;
  const destOne = services.data.body[2].items[0].dest;
  //   2
  const imgTwo = services.data.body[2].items[1].image.url;
  const paraTwo = services.data.body[2].items[1].para;
  const nameTwo = services.data.body[2].items[1].name;
  const destTwo = services.data.body[2].items[1].dest;
  // 3
  const imgThree = services.data.body[2].items[2].image.url;
  const paraThree = services.data.body[2].items[2].para;
  const nameThree = services.data.body[2].items[2].name;
  const destThree = services.data.body[2].items[2].dest;
  // 4
  const imgFour = services.data.body[2].items[3].image.url;
  const paraFour = services.data.body[2].items[3].para;
  const nameFour = services.data.body[2].items[3].name;
  const destFour = services.data.body[2].items[3].dest;
  //   5
  const imgFive = services.data.body[2].items[4].image.url;
  const paraFive = services.data.body[2].items[4].para;
  const nameFive = services.data.body[2].items[4].name;
  const destFive = services.data.body[2].items[4].dest;
  //   6
  const imgSix = services.data.body[2].items[5].image.url;
  const paraSix = services.data.body[2].items[5].para;
  const nameSix = services.data.body[2].items[5].name;
  const destSix = services.data.body[2].items[5].dest;
  //   7
  const imgSeven = services.data.body[2].items[6].image.url;
  const paraSeven = services.data.body[2].items[6].para;
  const nameSeven = services.data.body[2].items[6].name;
  const destSeven = services.data.body[2].items[6].dest7;
  //   8
  const imgEight = services.data.body[2].items[7].image.url;
  const paraEight = services.data.body[2].items[7].para;
  const nameEight = services.data.body[2].items[7].name;
  const destEight = services.data.body[2].items[7].dest;
  //   9
  const imgNine = services.data.body[2].items[8].image.url;
  const paraNine = services.data.body[2].items[8].para;
  const nameNine = services.data.body[2].items[8].name;
  const destNine = services.data.body[2].items[8].dest;
  //   end array
  const ServiceData = [
    {
      img: imgOne,
      heading: nameOne,
      para: paraOne,
      button: destOne,
    },
    {
      img: imgTwo,
      heading: nameTwo,
      para: paraTwo,
      button: destTwo,
    },
    {
      img: imgThree,
      heading: nameThree,
      para: paraThree,
      button: destThree,
    },
    {
      img: imgFour,
      heading: nameFour,
      para: paraFour,
      button: destFour,
    },
    {
      img: imgFive,
      heading: nameFive,
      para: paraFive,
      button: destFive,
    },
    {
      img: imgSix,
      heading: nameSix,
      para: paraSix,
      button: destSix,
    },
    {
      img: imgSeven,
      heading: nameSeven,
      para: paraSeven,
      button: destSeven,
    },
    {
      img: imgEight,
      heading: nameEight,
      para: paraEight,
      button: destEight,
    },
    {
      img: imgNine,
      heading: nameNine,
      para: paraNine,
      button: destNine,
    },
  ];
  return (
    <>
      <section id="services_page">
        <div className="container">
          <SectionHeading heading={title} para={description} />
          <div className="service_wrapper_top">
            <div className="row">
              {ServiceData.map((data, index) => (
                <div className="col-lg-4" key={index}>
                  <ServiceCard
                    img={data.img}
                    heading={data.heading}
                    para={data.para}
                    button={data.button}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesCard;
