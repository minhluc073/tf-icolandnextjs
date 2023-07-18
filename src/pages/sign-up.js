import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Signnup(props) {
  const [dataTitle] = useState({
    title: "Sign Up",
    desc: "Create New ICOLand Account",
  });

  return (
    <section className="sign-in sign-up backgroup-body">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sign-in__top center">
              <Link href="/">
                <Image
                  src={require("../assets/images/logo/logo-main.png")}
                  alt="ICOLand"
                />
              </Link>
            </div>
            <div className="sign-in__main">
              <div className="top center">
                <h3 className="title">{dataTitle.title}</h3>
                <p className="fs-17">{dataTitle.desc}</p>
              </div>

              <form action="#">
                <div className="form-group">
                  <label>
                    Username or email address <span>*</span>{" "}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">
                    Password<span>*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">
                    Password<span>*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword2"
                    placeholder="Password"
                  />
                </div>
                <div className="form-check">
                  <div className="left">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      I agree href the <Link href="#">Terms of User</Link>
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn-action style-1">
                  <span>Sign Up</span>{" "}
                </button>
              </form>

              <div className="bottom center">
                <p className="with">Or Sign in With</p>
                <div className="group-btn">
                  <Link href="#" className="fb btn-action style-6">
                    <span className="icon-facebook"></span>Facebook
                  </Link>
                  <Link href="#" className="gg btn-action style-6">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.4285 8.11673H18.654V8.07683H10.0002V11.923H15.4343C14.6415 14.1619 12.5112 15.7691 10.0002 15.7691C6.81409 15.7691 4.23092 13.186 4.23092 9.99991C4.23092 6.81385 6.81409 4.23068 10.0002 4.23068C11.4708 4.23068 12.8088 4.78548 13.8276 5.69173L16.5473 2.97202C14.83 1.37154 12.5328 0.384521 10.0002 0.384521C4.69005 0.384521 0.384766 4.68981 0.384766 9.99991C0.384766 15.31 4.69005 19.6153 10.0002 19.6153C15.3102 19.6153 19.6155 15.31 19.6155 9.99991C19.6155 9.3552 19.5492 8.72587 19.4285 8.11673Z"
                        fill="white"
                      />
                      <path
                        d="M1.49414 5.52443L4.65328 7.84125C5.50808 5.72491 7.57828 4.23068 10.0009 4.23068C11.4715 4.23068 12.8095 4.78548 13.8283 5.69173L16.548 2.97202C14.8307 1.37154 12.5336 0.384521 10.0009 0.384521C6.3076 0.384521 3.10472 2.46962 1.49414 5.52443Z"
                        fill="white"
                      />
                      <path
                        d="M9.99955 19.6153C12.4832 19.6153 14.7399 18.6648 16.4462 17.1192L13.4702 14.6009C12.4724 15.3597 11.2531 15.7702 9.99955 15.7692C7.49859 15.7692 5.37503 14.1745 4.57503 11.949L1.43945 14.3648C3.0308 17.4788 6.26253 19.6153 9.99955 19.6153Z"
                        fill="white"
                      />
                      <path
                        d="M19.4284 8.11681H18.6538V8.0769H10V11.9231H15.4341C15.0549 12.9886 14.3718 13.9198 13.4692 14.6014L13.4707 14.6005L16.4466 17.1187C16.2361 17.3101 19.6154 14.8077 19.6154 9.99998C19.6154 9.35527 19.549 8.72594 19.4284 8.11681Z"
                        fill="white"
                      />
                    </svg>
                    Google
                  </Link>
                </div>
              </div>
            </div>

            <p className="bottom">
              You have an account? <Link href="/sign-in">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signnup;
