import React from "react";
import ServiceSideBar from "./ServiceSideBar";
import ServiceContent from "./ServiceContent";

const ServiceDetailsMain = ({ services }) => {
  return (
    <>
      <section id="service_details_area">
        <div className="container">
          <div className="row">
            <ServiceContent services={services} />
            <ServiceSideBar services={services} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsMain;
