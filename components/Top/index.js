import { useState } from "react";
import * as React from "react";
import Image from "next/image";
const Top = ({
  direction,
  top,
  changetheme,
  theme,
  class_name,
  id,
  css,
  config,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={
        " py-2 top " +
        direction +
        " " +
        (class_name ? class_name : "") +
        " " +
        (config && config.position ? config.position : "")
      }
      id={id ? id : ""}
    >
      <div className={config && config.width ? config.width : "container"}>
        <div className="row justify-space-between">
          <div className="col-12 d-flex p-sm-0">
            <div className="d-inline-block p-0 fit-content"></div>
            <div className="d-inline-flex p-0 fit-content position-relative">
              <ul
                className="m-0 py-0  px-2 d-inline-flex"
                style={{ alignItems: "center" }}
              >
                <li className="d-inline-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    onClick={changetheme}
                    className={theme == "dark" ? "d-none" : "d-block"}
                    viewBox="0 0 16 16"
                    style={{ cursor: "pointer", opacity: ".7" }}
                  >
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    onClick={changetheme}
                    className={theme == "light" ? "d-none" : "d-block"}
                    viewBox="0 0 16 16"
                    style={{ cursor: "pointer", opacity: ".7" }}
                  >
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                  </svg>
                </li>
                <li className="d-md-inline-block d-lg-inline-block en mx-2">
                  <a href="/indexen" style={{ height: "25px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-globe2"
                      viewBox="0 0 16 16"
                      style={{ cursor: "pointer", opacity: ".7" }}
                    >
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                    </svg>
                  </a>
                </li>
                <li className="d-md-inline-block d-lg-inline-block fa mx-2">
                  <a href="/" style={{ height: "25px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-globe2"
                      viewBox="0 0 16 16"
                      style={{ cursor: "pointer", opacity: ".7" }}
                    >
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                    </svg>
                  </a>
                </li>

                <li className="d-inline-block">
                  <a href={top.login_ink ? top.login_ink : ""}>
                    <div className="position-relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="bi bi-person"
                        viewBox="0 0 16 16"
                        style={{ cursor: "pointer", opacity: ".7" }}
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                      </svg>
                    </div>
                  </a>
                </li>
              </ul>
              <div
                className="d-inline-block"
                style={{ cursor: "pointer", opacity: ".9" }}
                onClick={() => setIsActive(!isActive)}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 288 288"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ cursor: "pointer" }}
                >
                  <g id="#000000ff">
                    <path
                      fill="#000000"
                      opacity="1"
                      d=" M 1.96 1.45 C 25.63 1.45 49.29 1.46 72.95 1.44 C 72.99 25.12 72.95 48.80 72.97 72.48 C 49.29 72.51 25.61 72.49 1.93 72.49 C 1.94 48.81 1.88 25.13 1.96 1.45 Z"
                    />
                    <path
                      fill="#000000"
                      opacity="1"
                      d=" M 108.49 1.46 C 132.17 1.44 155.84 1.45 179.52 1.46 C 179.52 25.14 179.56 48.82 179.50 72.51 C 155.83 72.48 132.17 72.49 108.50 72.50 C 108.46 48.82 108.49 25.14 108.49 1.46 Z"
                    />
                    <path
                      fill="#000000"
                      opacity="1"
                      d=" M 215.06 1.44 C 238.72 1.46 262.39 1.45 286.05 1.45 C 286.11 25.13 286.07 48.81 286.07 72.49 C 262.39 72.49 238.71 72.51 215.03 72.48 C 215.06 48.80 215.00 25.12 215.06 1.44 Z"
                    />
                    <path
                      fill="#000000"
                      opacity="1"
                      d=" M 1.93 107.73 C 25.61 107.72 49.29 107.72 72.97 107.73 C 72.96 131.41 72.98 155.09 72.96 178.77 C 49.28 178.76 25.61 178.77 1.93 178.77 C 1.92 155.09 1.92 131.41 1.93 107.73 Z"
                    />
                    <path
                      fill="#000000"
                      opacity="1"
                      d=" M 108.48 178.75 C 108.50 155.07 108.46 131.40 108.49 107.72 C 132.17 107.73 155.84 107.72 179.52 107.73 C 179.54 131.40 179.51 155.08 179.53 178.75 C 155.84 178.78 132.16 178.78 108.48 178.75 Z"
                    />
                    <path
                      fill="#000000"
                      opacity="1"
                      d=" M 215.04 107.73 C 238.71 107.72 262.39 107.72 286.07 107.73 C 286.09 131.41 286.07 155.09 286.08 178.76 C 262.40 178.78 238.73 178.76 215.05 178.77 C 215.02 155.09 215.04 131.41 215.04 107.73 Z"
                    />
                    <path
                      fill="#000000"
                      opacity="1"
                      d=" M 1.93 215.52 C 25.61 215.51 49.29 215.50 72.97 215.52 C 72.95 239.20 73.00 262.89 72.94 286.57 C 49.29 286.54 25.64 286.55 1.99 286.57 C 1.84 262.88 1.96 239.20 1.93 215.52 Z"
                    />
                    <path
                      fill="#000000"
                      opacity="1"
                      d=" M 108.49 286.55 C 108.49 262.86 108.45 239.18 108.51 215.50 C 132.17 215.52 155.84 215.52 179.50 215.50 C 179.55 239.18 179.52 262.86 179.52 286.54 C 155.84 286.56 132.17 286.56 108.49 286.55 Z"
                    />
                    <path
                      fill="#000000"
                      opacity="1"
                      d=" M 215.03 215.52 C 238.71 215.50 262.39 215.51 286.07 215.52 C 286.09 239.19 286.07 262.86 286.08 286.54 C 262.41 286.58 238.73 286.53 215.06 286.56 C 215.00 262.88 215.06 239.20 215.03 215.52 Z"
                    />
                  </g>
                </svg>
              </div>
              {isActive && (
                <div
                  className="bgtransparent"
                  onClick={() => setIsActive(!isActive)}
                ></div>
              )}
              {isActive && (
                <div className="drop">
                  <div className="innerTriangle"></div>
                  <div className="modal pt-4 px-3 pb-0">
                    <div className="container position-relative">
                      <div className="row g-3 gy-4">
                        <div className="col-12 border-bottom mb-3">
                          <h6 className="mb-4 text-white">
                            {top.top_items_head ? top.top_items_head : ""}
                          </h6>
                        </div>
                        {top.items.map(({ title, dsc, link, img }, index) => (
                          <div className="col-md-6 box" key={index + 1}>
                            <a href={link}>
                              <div className="d-flex">
                                <div className="img position-relative">
                                  <Image
                                    src={img}
                                    alt=""
                                    width={40}
                                    height={40}
                                    quality={70}
                                    layout="fixed"
                                    style={{ objectFit: "cover" }}
                                  />
                                </div>

                                <div>
                                  <strong className="d-block text-white">
                                    {title ? title : ""}
                                  </strong>
                                  <span>{dsc ? dsc : ""}</span>
                                </div>
                              </div>
                            </a>
                          </div>
                        ))}
                        <div className="col-12 footer">
                          <div className="row gy-2">
                            <div className="col-lg-12">
                              <h6 className=" mb-0 d-flex align-items-center">
                                <div className="position-relative d-inline footerimg text-white">
                                  {top.title ? top.title : ""}
                                </div>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          svg:hover {
            opacity: 1 !important;
          }
          .absolute {
            width: 100%;
            background: #08173754 !important;
          }
          .rtl .fa {
            display: none !important;
          }
          .ltr .en {
            display: none !important;
          }
          .text-white {
            color: #fff;
          }
          svg path {
            fill: #fff !important;
          }
          .bgtransparent {
            position: fixed;
            width: 100%;
            top: 0px;
            background: transparent;
            left: 0px;
            height: 100%;
            z-index: 102;
          }
          .align-items-center {
            align-items: center;
          }
          .footer .col-lg-6:nth-child(2) {
            text-align: end;
            font-weight: 300;
            font-size: 11px;
          }
          .footer .col-lg-6:nth-child(2) a {
            font-weight: 700;
            color: #f7b749;
          }
          .footer .footerimg {
            margin-inline-end: 10px;
          }

          @media (max-width: 991px) {
            .footer .col-lg-6 {
              text-align: center !important;
            }
          }
          .footer {
            border-top: 1px solid #dee2e6;
            padding: 30px 0px 30px;
          }
          .d-flex {
            align-items: center;
            justify-content: space-between;
          }
          .modal .box span {
            font-size: 9px !important;
            line-height: 13px !important;
            font-weight: 400;
            display: block;
            color: #a7a9ac;
          }
          .modal .box strong {
            font-size: 14px;
            line-height: 16px;
            font-weight: 700;
            margin-bottom: 8px;
          }
          .modal .box .img {
            height: 50px !important;
            width: 50px !important;
            min-width: 50px !important;
            // background: #ffffff;
            border-radius: 5px;
            margin-inline-end: 15px;
            // padding: 4px;
            overflow: hidden;
          }
          .drop {
            position: absolute !important;
            width: 520px;
            right: 0px;
            display: block;
            height: fit-content;
          }
          .rtl .drop {
            right: auto;
            left: 0px;
          }
          .innerTriangle {
            top: 13px;
            content: " ";
            position: relative;
            height: 0;
            width: 0;
            pointer-events: none;
            border: 19px solid rgba(23, 23, 23, 0);
            border-bottom-color: #161616;
            left: auto;
            right: -9px;
            margin-left: auto;
            z-index: 2;
          }
          .rtl .innerTriangle {
            left: -9px;
            right: auto;
            margin-left: 0px;
            margin-right: auto;
          }
          .modal {
            right: -9px;
            left: auto;
            background: #161616;
            display: block;
            position: absolute;
            z-index: 155;
            top: 50px;
            overflow: hidden;
            width: 520px;
            height: fit-content;
          }
          .rtl .modal {
            right: auto !important;
            left: -9px !important;
          }
          @media (max-width: 768px) {
            .modal {
              width: 80vw;
              right: -9px;
            }
            .rtl .modal {
              right: auto !important;
              left: -9px !important;
            }
          }
          @media (max-width: 450px) {
            .modal {
              width: calc(100vw - 13px);
            }
          }
          .fit-content {
            width: fit-content;
          }
          li {
            color: #fff;
            list-style: none;
            display: inline-block;
          }
          a {
            text-decoration: none !important;
            color: #fff;
            text-transform: uppercase;
          }
          .justify-space-between {
            justify-content: space-between;
          }
          .modal .d-flex {
            justify-content: flex-start !important;
          }
          .top {
            background: #202124;
            color: #ffffff;
            font-size: 0.8rem !important;
            border-bottom: 1px solid #ffffff12;
            z-index: 5;
          }
          ${css ? css : ""}
          .rtl {
            direction: rtl;
            font-family: "fontrtl";
          }
        `}
      </style>
    </div>
  );
};
export default Top;
