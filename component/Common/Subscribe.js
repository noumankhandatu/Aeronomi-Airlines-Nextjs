import React, { useState, useEffect } from "react";
import Prismic from "prismic-javascript";
import { Client } from "../../prismic-configuration";
const Subscribe = () => {
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

  const subbgimage = fetchData?.results?.map((items) => {
    return items.data.subbgimage.url;
  });
  const subimage = fetchData?.results?.map((items) => {
    return items.data.subimage.url;
  });
  const subbtntext = fetchData?.results?.map((items) => {
    return items.data.subbtntext;
  });
  const subtitle = fetchData?.results?.map((items) => {
    return items.data.subtitle;
  });
  useEffect(() => {
    getServerSideProps();
  }, []);

  return (
    <>
      <section
        id="subscribe_area"
        style={{ backgroundImage: `url(${subbgimage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="subscribe_img">
                <img src={subimage} alt="scribe_img" />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="subscribe-area-inner">
                <div className="heading-left-border">
                  <h2>{subtitle }</h2>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Recipient's email"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn  btn-theme"
                      type="button"
                      id="button-addon2"
                    >
                      {subbtntext}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
