import React, { useState, useRef } from "react";
//Import FormInput
import FormInput from "../Common/FormInput";
import emailjs from "@emailjs/browser";
// ContactForm Area
const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleTyping = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData({ ...data, [name]: value });
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_cplrvit", "template_fruv0xx", data, "XKOO7Wo-SqeYY16yc")
      .then(
        (result) => {
          alert("thanks for submitting");
        },
        (error) => {
          alert(error.text, "Site is down kindly try later");
        }
      );
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <FormInput
              handleTyping={handleTyping}
              forminputdata={true}
              tag={"input"}
              type={"text"}
              name={"name"}
              classes={"form-control"}
              placeholder={"Name"}
            />
          </div>
          <div className="col-lg-12">
            <FormInput
              handleTyping={handleTyping}
              forminputdata={true}
              tag={"input"}
              type={"email"}
              name={"email"}
              classes={"form-control"}
              placeholder={"Email"}
            />
          </div>
          <div className="col-lg-12">
            <FormInput
              handleTyping={handleTyping}
              forminputdata={true}
              tag={"input"}
              type={"text"}
              name={"subject"}
              classes={"form-control"}
              placeholder={"Subject"}
            />
          </div>
          <div className="col-lg-12">
            <FormInput
              handleTyping={handleTyping}
              forminputdata={true}
              tag={"textarea"}
              type={"text"}
              name={"message"}
              classes={"form-control"}
              placeholder={"Type Your Messages..."}
            />
          </div>
          <div className="col-lg-12">
            <div className="contact_form_submit">
              <FormInput
                tag={"button"}
                forminputdata={true}
                val={"Send"}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
