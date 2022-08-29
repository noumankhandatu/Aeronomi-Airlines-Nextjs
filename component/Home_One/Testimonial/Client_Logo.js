import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import Prismic from "prismic-javascript";
import { Client } from "../../../prismic-configuration";
const ClientLogos = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
  ];

  const [toggleFn, setToggleFn] = useState(true);
  const [fetchData, setFetchData] = useState("");
  async function getServerSideProps() {
    const home = await Client().query(
      Prismic.Predicates.at("document.type", "home")
    );
    setFetchData(home);
    return {
      props: {
        home,
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
  const ClientLogo = [
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
