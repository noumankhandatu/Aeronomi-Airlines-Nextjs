import React from "react";

const OurPolicies = ({ privacypolicy }) => {
  const titleone = privacypolicy.data.titleone;
  const lableone = privacypolicy.data.lableone;
  const titletwo = privacypolicy.data.titletwo;
  const labletwo = privacypolicy.data.labletwo;
  const titlethree = privacypolicy.data.titlethree;
  const lablethree = privacypolicy.data.lablethree;
  return (
    <>
      <section id="privacy_policy">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text_heading_para">
                <h3>{titleone}</h3>
                <p>{lableone}</p>
              </div>
              <div className="text_heading_para">
                <h3>{titletwo}</h3>
                <p>{labletwo}</p>
              </div>
              <div className="text_heading_para">
                <h3>{titlethree}</h3>
                <p>{lablethree}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPolicies;
