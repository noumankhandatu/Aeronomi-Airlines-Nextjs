import React from "react";
import Link from "next/link";

const ErrorMessages = ({ error }) => {
  const image = error?.data?.image?.url;
  const text = error?.data?.text;
  return (
    <>
      <section id="error_area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-img">
                <img src={image} alt="Error Imgs" />
                <h3>{text}</h3>
                <Link href="/" className="btn btn-theme">
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorMessages;
