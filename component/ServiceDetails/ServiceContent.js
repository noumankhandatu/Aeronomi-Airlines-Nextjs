import React from "react";

const ServiceContent = ({ services }) => {
  const servicesimage = services?.data?.servicesimage.url;
  const headingone = services?.data?.headingone;
  const paraone = services?.data?.paraone;
  const servicetwoimage = services?.data?.servicetwoimage.url;
  const paratwo = services?.data?.paratwo;
  return (
    <>
      <div className="col-lg-8">
        <div className="service_details_wrapper">
          <div className="service_details_items">
            <img src={servicesimage} alt="img" />
            <div className="service_details_para">
              <h3>{headingone}</h3>
              <p>{paraone}</p>
            </div>
          </div>
          <div className="service_details_items">
            <img src={servicetwoimage} alt="img" />
            <div className="service_details_para">
              <p>{paratwo}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceContent;
