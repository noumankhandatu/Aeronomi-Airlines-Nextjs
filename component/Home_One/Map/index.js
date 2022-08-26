import React from "react";
import Maps from "../../Common/Map";
const MapArea = ({ mapArea }) => {
  const mapheading = mapArea?.data?.mapheading;
  const maptitle = mapArea?.data?.maptitle;
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
