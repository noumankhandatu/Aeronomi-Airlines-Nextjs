import React from "react";
import Link from "next/link";
const ServiceSideBar = ({ services }) => {
  const Service = services?.data?.service;
  const Finance = services?.data?.finance;
  const Healthcare = services?.data?.healthcare;
  const Strategic = services?.data?.strategic;
  const Contingency = services?.data?.contingency;
  const Mergers = services?.data?.mergers;
  const Marketing = services?.data?.marketing;
  const Brochures = services?.data?.brochures;
  const Brochur = services?.data?.brochur;
  const Compa = services?.data?.compa;
  const Contact = services?.data?.contact;
  const Visit = services?.data?.visit;
  const Cargo = services?.data?.cargo;
  const Call = services?.data?.call;
  const Office = services?.data?.office;
  const Tollfree = services?.data?.tollfree;
  const Mail = services?.data?.mail;
  const Mailus = services?.data?.mailus;
  return (
    <>
      <div className="col-lg-4">
        <div className="service_details_sidebar">
          <div className="sidebar_service_wrappers">
            <h3>{Service ? Service : `pending`}</h3>
            <ul>
              <li>
                <Link href="/service">{Finance}</Link>
              </li>
              <li>
                <Link href="/service">{Healthcare}</Link>
              </li>
              <li>
                <Link href="/service">{Strategic}</Link>
              </li>
              <li>
                <Link href="/service">{Contingency}</Link>
              </li>
              <li>
                <Link href="/service">{Mergers}</Link>
              </li>
              <li>
                <Link href="/service">{Marketing}</Link>
              </li>
            </ul>
          </div>
          <div className="sidebar_service_wrappers">
            <h3>{Brochures}</h3>
            <ul>
              <li>
                <a href="#!">
                  <i className="far fa-file-pdf"></i>
                  {Brochur}
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="far fa-file-word"></i>
                  {Compa}
                </a>
              </li>
            </ul>
          </div>
          <div className="sidebar_service_wrappers">
            <h3>{Contact}</h3>
            <div className="contact_sidebar">
              <h6>{Visit}</h6>
              <p>{Cargo}</p>
            </div>
            <div className="contact_sidebar">
              <h6>{Call}</h6>
              <p>{Office}</p>
              <p> {Tollfree}</p>
            </div>
            <div className="contact_sidebar">
              <h6>{Mail}</h6>
              <p>{Mailus}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSideBar;
