import React from "react";
import ClientLogos from "../Testimonial/Client_Logo";
import SectionHeading from "../../Common/SectionHeading";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];
const Testimonials = ({ testi }) => {
  const RealData = testi.data.body[4].items;
  const title = testi.data.body[3].items[0].title;
  const description = testi.data.body[3].items[0].description;
  const testimonialbg = testi?.data?.testimonialbg.url;
  const testimonialbutton = testi?.data?.testimonialbutton;

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
                    RealData?.map((data, index) => (
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
