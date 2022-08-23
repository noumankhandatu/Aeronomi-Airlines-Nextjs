import React, { useState, useEffect } from "react";
import ClientLogos from "../Testimonial/Client_Logo";
import SectionHeading from "../../Common/SectionHeading";
import Carousel from "react-elastic-carousel";
import Prismic from "prismic-javascript";
import { Client } from "../../../prismic-configuration";
const Testimonials = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
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
  const RealData = fetchData?.results?.map((items) => {
    return items.data.body[4].items;
  });
  const title = fetchData?.results?.map((items) => {
    return items.data.body[3].items[0].title;
  });
  const description = fetchData?.results?.map((items) => {
    return items.data.body[3].items[0].description;
  });
  const testimonialbg = fetchData?.results?.map((items) => {
    return items?.data?.testimonialbg.url;
  });
  const testimonialbutton = fetchData?.results?.map((items) => {
    return items?.data?.testimonialbutton;
  });
  useEffect(() => {
    getServerSideProps();
  }, []);
  return (
    <>
      <section
        id="client_review_area"
        style={{
          backgroundImage: `url(${testimonialbg})`,
        }}
      >
        <div className="container">
          <SectionHeading heading={title} para={description} />
          <div className="row">
            <div className="col-lg-12">
              <div className="client_sliders_wrappers">
                <Carousel
                  itemPadding={[5]}
                  enableAutoPlay={true}
                  autoPlaySpeed={2000}
                  showArrows={false}
                  breakPoints={breakPoints}
                >
                  {RealData &&
                    RealData[0]?.map((data, index) => (
                      <div className="client_items" key={index}>
                        <i className="fas fa-quote-right fa-3x"></i>
                        <div className="testimonial-box">
                          <span>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                          </span>
                          <p>{data.para}</p>
                          <div className="client-destination">
                            <div className="client-image">
                              <img
                                style={{
                                  borderRadius: "100%",
                                  width: "60px",
                                  height: "60px",
                                }}
                                src={data?.image?.url}
                                alt="Image_Client"
                              />
                            </div>
                            <div className="client-details">
                              <h5>{data.name}</h5>
                              <p>{data.dest}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </Carousel>
              </div>
              <div className="review_button">
                <a href="#!" className="btn btn-theme">
                  {testimonialbutton}
                </a>
              </div>
            </div>
          </div>
        </div>
        <ClientLogos />
      </section>
    </>
  );
};
export default Testimonials;
