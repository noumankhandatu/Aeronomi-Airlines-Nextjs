import React, { useEffect, useState } from "react";
import Counter from "./Counter";

const CounterData = [
  {
    countStart: 100,
    countEnd: 12345,
    heading: "COMPANY ESTABLISHED",
    icon: " fas fa-building",
  },
  {
    countStart: 100,
    countEnd: 12345,
    heading: "COUNTRIES SERVED",
    icon: "fas fa-globe",
  },
  {
    countStart: 100,
    countEnd: 12345,
    heading: "PORTS SERVED",
    icon: " fas fa-building",
  },
];

const HomeAbout = ({ homeAbout }) => {
  const countrytext = homeAbout.data.countrytext;
  const companytext = homeAbout.data.companytext;
  const portstext = homeAbout.data.portstext;
  const countrycounter = homeAbout?.data?.countrycounter;
  const companycounter = homeAbout?.data?.companycounter1;
  const portscounter1 = homeAbout.data.portscounter1;
  const globalimage = homeAbout.data.globalimage.url;
  const globaltext = homeAbout.data.globaltext;
  const allourefforts = homeAbout.data.allourefforts;
  const Solving = homeAbout.data.Solving;
  const Jonathon = homeAbout.data.Jonathon;
  const Chairman = homeAbout.data.Chairman;
  const signatureimage = homeAbout.data.signatureimage.url;

  const CounterData = [
    {
      countStart: 0,
      countEnd: companycounter,
      heading: companytext,
      icon: " fas fa-building",
    },
    {
      countStart: 0,
      countEnd: countrycounter,
      heading: countrytext,
      icon: "fas fa-globe",
    },
    {
      countStart: 0,
      countEnd: portscounter1,
      heading: portstext,
      icon: " fas fa-building",
    },
  ];

  return (
    <div>
      <section id="home_about_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about_img">
                <img src={globalimage} alt="About_Img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about_content">
                <div className="heading-left-border">
                  <h2>{globaltext}</h2>
                </div>
                <h3>{allourefforts}</h3>
                <p>{Solving}</p>
                <div className="about_sign_arae">
                  <div className="distaion_area">
                    <h5>{Jonathon}</h5>
                    <h6>{Chairman}</h6>
                  </div>
                  <div className="signature">
                    <img src={signatureimage} alt="About_Img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about_counter_area">
            <div className="row">
              {CounterData.map((data, index) => (
                <Counter
                  countStart={data.countStart}
                  countEnd={data.countEnd}
                  heading={data.heading}
                  icon={data.icon}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAbout;
