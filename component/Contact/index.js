import React from "react";
import ContactForm from "../Contact/ContactForm";
import ContactInfo from "../Contact/ContactInfo";
import ContactMap from "../Contact/ContactMap";
const ContactDetails = ({ contact }) => {
  return (
    <>
      <section id="contact_area_main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_heading_center">
                <h2>Contact Info</h2>
              </div>
            </div>
          </div>
          <div className="contact_form_info_area">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact_form_main">
                  <ContactForm />
                </div>
              </div>
              <div className="col-lg-6">
                <ContactInfo contact={contact} />
              </div>
            </div>
          </div>
        </div>
        <div className="map_area">
          <ContactMap />
        </div>
      </section>
    </>
  );
};

export default ContactDetails;
