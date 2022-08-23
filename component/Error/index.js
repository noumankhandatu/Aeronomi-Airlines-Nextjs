import React from "react";
import Link from "next/link";

const ErrorMessages = () => {
  return (
    <>
      <section id="error_area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-img">
                <img src={"https://picsum.photos/200/300"} alt="Error Imgs" />
                <h3>Page Not Found</h3>
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
