import React, { useState } from "react";
const Faq = ({ direction, faq, class_name, id, config, css }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

  return (
    <div
      className={
        "faq position-relative " +
        direction +
        " " +
        (class_name ? class_name : "")
      }
      id={id ? id : ""}
    >
      <div
        className={
          " position-relative " +
          (config && config.width ? config.width : "container")
        }
        style={{ zIndex: "2" }}
      >
        <div className="row">
          <div className="col-12">
            <h5 className="subtitle">{faq.smallTitle}</h5>
            <h2
              className="bigtitle"
              style={{ direction: "initial" }}
              dangerouslySetInnerHTML={{
                __html: faq.bigTitle ? faq.bigTitle : "",
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-8 col-11 mx-auto">
            <ul className="tab-list text-center mb-5 mt-1 p-0">
              {faq.item &&
                faq.item.map((item, index) => (
                  <li
                    key={index + 1}
                    className={`tabs ${getActiveClass(
                      index + 1,
                      "active-tabs"
                    )}`}
                    onClick={() => {
                      if (index + 1 != toggleState) {
                        toggleTab(index + 1);
                      } else {
                        toggleTab(null);
                      }
                    }}
                  >
                    <h3 className="mx-1 d-flex">
                      <span>{item.title}</span>
                      <span
                        className={`svg bi-dash ${getActiveClass(
                          index + 1,
                          "d-inline"
                        )}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-dash-lg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                          />
                        </svg>
                      </span>
                      <span
                        className={`svg bi-plus ${getActiveClass(
                          index + 1,
                          "svgactive"
                        )}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-plus-lg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                          />
                        </svg>
                      </span>
                    </h3>
                    <div className="content-container">
                      <div
                        className={`content ${getActiveClass(
                          index + 1,
                          "active-content"
                        )}`}
                      >
                        <p
                          style={{ direction: "initial", paddingTop: "30px" }}
                          dangerouslySetInnerHTML={{
                            __html: item.desc ? item.desc : "",
                          }}
                        />
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <a className="m-2 d-inline-block button" href={faq.buttomLink}>
              {faq.buttomTitle}
            </a>
          </div>
        </div>
      </div>
      <div
        className="bgsvg"
        dangerouslySetInnerHTML={{
          __html: config && config.bgsvg ? config.bgsvg : "",
        }}
      />
      <style jsx>
        {`
          .d-flex {
            display: flex !important;
            justify-content: space-between;
          }
          .svg.bi-dash {
            display: none;
          }
          div .svg.inline {
            display: inline !important;
          }
          .active-tabs .bi-plus.svgactive {
            display: none;
          }
          .button {
            background: var(--color2) !important;
          }
          .button {
            border-width: 0px;
            border-radius: 4px;
            font-size: 14px;
            padding: 8px 22px;
            min-width: 150px;
            height: 46px;
            display: flex !important;
            width: fit-content;
            margin: auto !important;
            align-items: center;
          }
          .tabs div {
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            position: relative;
          }
          .tabs {
            text-align: initial;
            border: 1px solid rgb(239, 242, 245);
            border-radius: 5px;
            margin-bottom: 5px;
            cursor: pointer;
            position: relative;
            text-shadow: rgb(0 0 0 / 0%) 1px 1px 1px;
            padding: 23px 30px;
          }
          ul {
            list-style: none;
          }
          .bgsvg {
            position: absolute;
            width: 100%;
            bottom: 0px;
            left: 0px;
            z-index: 0;
            pointer-events: none;
          }
          .content {
            display: none !important;
          }
          .content.active-content {
            display: block !important;
          }
          h3 {
            font-size: 16px;
            color: rgb(48, 43, 78);
            margin-bottom: 0px;
            margin-top: 0px;
            font-weight: 600;
          }
          @media screen and (min-width: 40em) {
            h3 {
              font-size: 19px;
            }
          }

          h2 {
            margin-bottom: 90px;
            color: var(--bs-dark-text);
            margin-bottom: 50px;
            text-align: center;
          }
          h5,
          h3 {
            color: var(--bs-body-color) !important;
          }
          h5 {
            text-align: center;
          }
          .faq {
            padding: 90px 0px 50px;
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
export default Faq;
