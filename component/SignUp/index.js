import React from "react";
import Link from "next/link";
// Import FormInput
import FormInput from "../Common/FormInput";

const SignUpForm = (props) => {
  return (
    <>
      <section id="signIn_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
              <div className="user_area_wrapper">
                <h2>{props.heading}</h2>
                <div className="user_area_form ">
                  <form action="#!" id="form_signIn">
                    <div className="row">
                      <div className="col-lg-12">
                        <FormInput
                          tag={"input"}
                          type={"text"}
                          name={"f_name"}
                          classes={"form-control my-2"}
                          placeholder={"First Name"}
                        />
                      </div>
                      <div className="col-lg-12">
                        <FormInput
                          tag={"input"}
                          type={"text"}
                          name={"l_name"}
                          classes={"form-control my-2"}
                          placeholder={"Last Name"}
                        />
                      </div>
                      <div className="col-lg-12">
                        <FormInput
                          tag={"input"}
                          type={"text"}
                          name={"user_name"}
                          classes={"form-control my-2"}
                          placeholder={"User Name"}
                        />
                      </div>
                      <div className="col-lg-12">
                        <FormInput
                          tag={"input"}
                          type={"text"}
                          name={"email"}
                          classes={"form-control my-2"}
                          placeholder={"Email Address"}
                        />
                      </div>
                      <div className="col-lg-12">
                        <FormInput
                          tag={"input"}
                          type={"password"}
                          name={"password"}
                          classes={"form-control my-2"}
                          placeholder={"Password"}
                        />
                      </div>
                      <div className="col-lg-12">
                        <FormInput
                          tag={"input"}
                          type={"password"}
                          name={"c_password"}
                          classes={"form-control my-2"}
                          placeholder={"Confirm Password"}
                        />
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group form-check my-3">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            I agree with Terms & Conditions
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="submit_button ">
                          <FormInput tag={"button"} val={"Sign Up"} />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="not_remember_area">
                          <p>
                            Already have an account?
                            <Link href="/signIn"> Sign Up</Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpForm;
