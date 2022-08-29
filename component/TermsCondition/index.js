import React from "react";
// TermsCondition  Area
const TermsConditionContent = ({ termsandcondition }) => {
  const titleone = termsandcondition?.data?.titleone;
  const lableone = termsandcondition?.data?.lableone;
  const titletwo = termsandcondition?.data?.titletwo;
  const labletwo = termsandcondition?.data?.labletwo;
  const titlethree = termsandcondition?.data?.titlethree;
  const lablethree = termsandcondition?.data?.lablethree;
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

export default TermsConditionContent;
