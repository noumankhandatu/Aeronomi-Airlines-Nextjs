import React, { useState, useEffect } from "react";
import Link from "next/link";
import Prismic from "prismic-javascript";
import { Client } from "../../prismic-configuration";

const Footer = () => {
  const [toggleFn, setToggleFn] = useState(true);
  const [fetchData, setFetchData] = useState("");
  async function getServerSideProps() {
    const footer = await Client().query(
      Prismic.Predicates.at("document.type", "footer")
    );
    setFetchData(footer);
    return {
      props: {
        footer,
      },
    };
  }
  if (toggleFn) {
    getServerSideProps();
    setToggleFn(!toggleFn);
  }
  const titleone = fetchData?.results?.map((items) => {
    return items.data.titleone;
  });
  const titletwo = fetchData?.results?.map((items) => {
    return items.data.titletwo;
  });
  const titlethree = fetchData?.results?.map((items) => {
    return items.data.titlethree;
  });

  const firstLink = fetchData?.results?.map((items) => {
    console.log(items?.data?.body[0].items, "mine");
    return items?.data?.body[0]?.items;
  });

  const secondLink = fetchData?.results?.map((items) => {
    return items?.data?.body[1]?.items;
  });
  const FooterItems = [
    {
      title: titleone,
      links: firstLink ? firstLink : [],
    },
    {
      title: titletwo,
      links: secondLink ? secondLink : [],
    },
  ];

  const logo = fetchData?.results?.map((items) => {
    return items?.data?.logo.url;
  });
  const description = fetchData?.results?.map((items) => {
    return items?.data?.description;
  });

  const address = fetchData?.results?.map((items) => {
    return items?.data?.address;
  });
  const mail = fetchData?.results?.map((items) => {
    return items?.data?.mail;
  });
  const phone = fetchData?.results?.map((items) => {
    return items?.data?.phone;
  });
  const time = fetchData?.results?.map((items) => {
    return items?.data?.time;
  });
  useEffect(() => {
    getServerSideProps();
  }, []);
  return (
    <>
      <footer id="footer_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="footer_wedget">
                <img src={logo ? logo : `wait please`} alt="logo_img" />
                <p>{description ? description : `wait please`}</p>
                <div className="footer_social_icon">
                  <a href="#!">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#!">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#!">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#!">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 col-12">
              <div className="footer_wedget">
                {FooterItems?.slice(0, 1)?.map((data, index) => (
                  <FooterWidget data={data} key={index} />
                ))}
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="footer_wedget">
                {FooterItems?.slice(1, 2)?.map((data, index) => (
                  <FooterWidget data={data} key={index} />
                ))}
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="footer_wedget">
                <h4>{titlethree}</h4>
                <div className="contact-info-footer">
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      {address}
                    </li>
                    <li>
                      <i className="far fa-envelope"></i>
                      <a href="mailto:info@aeronomiairline.com">{mail}</a>
                    </li>
                    <li>
                      <i className="fas fa-phone-volume"></i>
                      <a href="tel:+0123-456-789">{phone}</a>
                    </li>
                    <li>
                      <i className="far fa-clock"></i>
                      {time}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

export const FooterWidget = ({ data }) => {
  return (
    <div>
      <h4>{data.title}</h4>
      <div className="contact-info-footer ">
        {data?.links[0]?.length > 1 ? (
          <ul>
            {data?.links[0]?.map((datas, index) => (
              <li
                style={{ cursor: "pointer" }}
                className="footer_wedget"
                key={index}
              >
                <a href={datas?.link}>{datas?.linktitle}</a>
              </li>
            ))}
          </ul>
        ) : (
          "pending"
        )}
      </div>
    </div>
  );
};
