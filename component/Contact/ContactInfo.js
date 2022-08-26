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
          <h5>{labeladdress ? labeladdress : `pending`}</h5>
          <p>{address ? address : `pending`}</p>
        </div>
        <div className="contact_item">
          <h5>{call ? call : `pending`}</h5>
          <p>{phonenumber ? phonenumber : `pending`}</p>
          <p>{customercare ? customercare : `pending`}</p>
        </div>
        <div className="contact_item">
          <h5>{mail ? mail : `pending`}</h5>
          <p>{mailcom ? mailcom : `pending`}</p>
          <p>{yahoo ? yahoo : `pending`}</p>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
