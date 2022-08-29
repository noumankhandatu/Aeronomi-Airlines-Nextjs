import React, { useState, useEffect } from "react";
import Prismic from "prismic-javascript";
import { Client } from "../../prismic-configuration";
const CopyRight = () => {
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
  const copyright = fetchData?.results?.map((items) => {
    return items.data.copyright[0].text;
  });
  useEffect(() => {
    getServerSideProps();
  }, []);
  return (
    <>
      <div id="copy_right">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copy-right-area">
                <p>{copyright}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyRight;
