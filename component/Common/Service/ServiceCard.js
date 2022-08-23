import React from "react";
import Link from "next/link";
// ServiceCard Area
const ServiceCard = (props) => {
  return (
    <>
      <div className="service-card">
        <img src={props.img} alt="image_service" />
        <div className="service-caption">
          <h3>{props.heading}</h3>
          <p>{props.para}</p>
          <a href="/service_details" className="read_more_btn">
            {props.button}
            <i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
