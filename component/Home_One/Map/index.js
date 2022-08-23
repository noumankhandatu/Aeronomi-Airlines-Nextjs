import React, { useState, useEffect } from "react";
import Maps from "../../Common/Map";
import Prismic from "prismic-javascript";
import { Client } from "../../../prismic-configuration";
const MapArea = () => {
  const [toggleFn, setToggleFn] = useState(true);
  const [fetchData, setFetchData] = useState("");

  async function getServerSideProps() {
    const home = await Client().query(
      Prismic.Predicates.at("document.type", "home")
    );
    setFetchData(home);
    return {
      props: {
        home,
      },
    };
  }
  if (toggleFn) {
    getServerSideProps();
    setToggleFn(!toggleFn);
  }

  if (toggleFn) {
    getServerSideProps();
    setToggleFn(!toggleFn);
  }
  const mapheading = fetchData?.results?.map((items) => {
    return items?.data?.mapheading;
  });
  const maptitle = fetchData?.results?.map((items) => {
    return items?.data?.maptitle;
  });
  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <>
      <section id="maps_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="heading-left-border">
                <h2>{mapheading}</h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="maps-right-side-text">
                <p>{maptitle}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="maps-area">
                <Maps />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MapArea;
