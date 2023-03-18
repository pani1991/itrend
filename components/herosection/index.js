import Image from "next/image";
import React, { useState } from "react";
const Herosection = ({
  direction,
  herosection,
  id,
  class_name,
  config,
  css,
}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={
        "position-relative " + direction + " " + (class_name ? class_name : "")
      }
      id={id ? id : ""}
    >
      <div
        className="bgsvg"
        dangerouslySetInnerHTML={{
          __html:
            config && config.bgsvg
              ? config.bgsvg
              : '<svg width="1920" height="500" viewBox="0 0 1920 500"><defs><clipPath><rect width="1920" height="500"></rect></clipPath></defs><g data-name="Shape"><rect data-name="Rectangle 134" width="2356" height="781" transform="translate(-136.868 401.948) rotate(-11)" fill="var(--bs-body-bg)"></rect></g></svg>',
        }}
      />

      <div
        className={
          "position-relative " +
          (config && config.width ? config.width : "container")
        }
      >
        <div className="row">
          <div
            className={
              config && config.class1
                ? config.class1
                : "col-lg-10 col-md-10 mx-auto col-12 text-center"
            }
          >
            <div className="col-12">
              <span className={herosection.new == null ? "d-none" : "new"}>
                {herosection.new}
              </span>
            </div>
            <h1
              style={{ direction: "initial" }}
              dangerouslySetInnerHTML={{
                __html: herosection && herosection.head ? herosection.head : "",
              }}
            />
            <p
              className="mb-4"
              style={{ direction: "initial" }}
              dangerouslySetInnerHTML={{
                __html: herosection && herosection.dec ? herosection.dec : "",
              }}
            />
            <div className="">
              <button
                className={
                  herosection.buttomtitle == null
                    ? "d-none"
                    : "m-2 d-inline-block"
                }
              >
                {herosection.buttomtitle}
              </button>

              <strong
                className={
                  herosection.videotitle == null ? "d-none" : "d-inline-block"
                }
                onClick={() => setIsActive(!isActive)}
                style={{ cursor: "pointer" }}
              >
                <span
                  className=""
                  style={{ direction: "initial" }}
                  dangerouslySetInnerHTML={{
                    __html:
                      config && config.videoicone
                        ? config.videoicone
                        : '<svg fill="currentColor" height="30" width="30" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></svg>',
                  }}
                />
                <span className="mx-1">{herosection.videotitle}</span>
              </strong>
              {isActive && (
                <div className="modal">
                  <div
                    className="position-relative"
                    style={{ background: "#0e0e0eed", zIndex: "100" }}
                  >
                    <div
                      className="container site-nav-brand d-block "
                      onClick={() => setIsActive(!isActive)}
                    >
                      <div className="row">
                        <div className="col-12 p-sm-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            className="bi "
                            viewBox="0 0 16 16"
                            style={{
                              marginInlineStart: "auto",
                              marginTop: "56px",
                            }}
                          >
                            <path
                              fill="#fff"
                              d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container position-relative">
                    <div className="row pt-5">
                      <div className="col-12 d-block text-center">
                        <video className="p-0 back" controls>
                          <source src="./Hotransmitted.mp4" type="video/mp4" />
                          <source src="./Hotransmitted.ogg" type="video/ogg" />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            className={
              (config && config.class2
                ? config.class2
                : "col-lg-10 col-md-10 mx-auto col-12 text-center mt-4") +
              " " +
              (herosection.bigimg == null ? "d-none" : "")
            }
          >
            <div className="img">
              <Image
                src={herosection.bigimg ? herosection.bigimg : ""}
                alt=""
                quality={70}
                layout="fill"
                className=""
                objectFit={
                  config && config.objectFit ? config.objectFit : "contain"
                }
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
        video{
          max-height:calc(100vh - 170px);
          margin:0px auto;
          width:100%;
        }
        .modal{
          position: fixed;
          top: 0px;
          right: 0px;
          width: 100%;
          height: 100%;
          background: #000;
          z-index: 150;
          display: block;
        }
        .img{
          width:100%;
          position: relative;
          min-height:360px
        }
          button {
            background:rgb(237, 205, 55) !important;
          }
          a {
            color: #fff;
            color: ${
              config && config.textColor && config.textColor == "dark"
                ? "#000;"
                : "#fff;"
            }
            text-decoration: none;
          }

          button {
            background: var(--color1);
            border-width: 0px;
            border-radius: 4px;
            font-size: 14px;
            padding: 8px 22px;
            min-width: 150px;
            height: 46px;
          }
          .bgsvg {
            position: absolute;
            width: 100%;
            bottom: 0px;
            left: 0px;
            z-index: 0;
            pointer-events: none;
          }
          h1 {
            font-weight: 700;
            color: ${
              config && config.textColor && config.textColor == "dark"
                ? "#000;"
                : "#fff;"
            }
          }
          .new strong {
            color:#fff !important;
          }
          .new {
            display: inline-block;
            font-weight: 500;
            color: #fff;
            border-radius: 4em;
            padding: 9px 22px;
            margin-bottom: 22px;
            background-color: rgba(255, 255, 255, 0.15);
            color: ${
              config && config.textColor && config.textColor == "dark"
                ? "#000;"
                : "#fff;"
            }
          }
          .herosection {
            -webkit-font-smoothing: antialiased;
            text-shadow: rgb(0 0 0 / 0%) 1px 1px 1px;
            background-size: cover;
            background-position: center top;
            color: #fff;
            padding: 150px 0px 50px;
            background: ${
              config && config.backgroud ? config.background : "var(--color1)"
            };
            color: ${
              config && config.textColor && config.textColor == "dark"
                ? "#000;"
                : "#fff;"
            }
          }
          h1 {
            margin-bottom: 25px;
          }
          svg rect{
            fill:var(--bs-body-bg) !important;
          }
          ${css ? css : ""}
          .rtl {
            direction: rtl;
            font-family: "fontfa";
          }
        `}
      </style>
    </div>
  );
};
export default Herosection;
