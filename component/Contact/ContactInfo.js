import React from "react";
const ContactInfo = ({ contact }) => {
  const labeladdress = contact.data.labeladdress;
  const address = contact.data.address;
  const call = contact.data.call;
  const phonenumber = contact.data.phonenumber;
  const customercare = contact.data.customercare;
  const mail = contact.data.mail;
  const mailcom = contact.data.mailcom;
  const yahoo = contact.data.yahoo;
  return (
    <>
      <div className="contact_info_wrapper">
        <div className="contact_item">
          <h5>{labeladdress}</h5>
          <p>{address}</p>
        </div>
        <div className="contact_item">
          <h5>{call}</h5>
          <p>{phonenumber}</p>
          <p>{customercare}</p>
        </div>
        <div className="contact_item">
          <h5>{mail}</h5>
          <p>{mailcom}</p>
          <p>{yahoo}</p>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
