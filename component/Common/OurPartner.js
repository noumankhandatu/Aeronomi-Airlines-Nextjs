import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import Prismic from "prismic-javascript";
import { Client } from "../../prismic-configuration";
const OurPartner = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  //alert=> this is fetched inside component cos it is called 23 times its better to call once inside component to send props 23 times page

  const [toggleFn, setToggleFn] = useState(true);
  const [fetchData, setFetchData] = useState("");
  async function getServerSideProps() {
    const about = await Client().query(
      Prismic.Predicates.at("document.type", "about")
    );
    setFetchData(about);
    return {
      props: {
        about,
      },
    };
  }
  if (toggleFn) {
    getServerSideProps();
    setToggleFn(!toggleFn);
  }

  const firstimage = fetchData?.results?.map((items) => {
    return items.data.body[5].items[0].firstimage.url;
  });
  const secondimage = fetchData?.results?.map((items) => {
    return items.data.body[5].items[0].secondimage.url;
  });
  const thirdimage = fetchData?.results?.map((items) => {
    return items.data.body[5].items[0].thirdimage.url;
  });
  const fourthimage = fetchData?.results?.map((items) => {
    return items.data.body[5].items[0].fourthimage.url;
  });
  const fifthimage = fetchData?.results?.map((items) => {
    return items.data.body[5].items[0].fifthimage.url;
  });
  const OurPartnerData = [
    {
      img: firstimage,
    },
    {
      img: secondimage,
    },
    {
      img: thirdimage,
    },
    {
      img: fourthimage,
    },
    {
      img: fifthimage,
    },
  ];
  useEffect(() => {
    getServerSideProps();
  }, []);
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
                    {OurPartnerData.map((data, index) => (
                      <div className="partner_logo" key={index}>
                        <img src={data.img} alt="logo-img" />
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

export default OurPartner;
