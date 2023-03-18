import React, { useState } from "react";
const Update = ({ direction, update, id, class_name, css, config }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

  return (
    <div
      className={
        "update position-relative " +
        direction +
        " " +
        (class_name ? class_name : "")
      }
      id={id ? id : ""}
      style={{
        background: `${
          config && config.bgColor ? config.bgColor : "var(--color1)"
        }`,
        zIndex: "2",
        padding: `${update.padding}`,
      }}
    >
      <div
        className={
          "position-relative " +
          (config && config.width ? config.width : "container")
        }
      >
        <div className="row">
          <div className="col-12 text-center">
            <h5 className="subtitle">{update.smallTitle}</h5>
            <h2
              className="bigtitle"
              style={{ direction: "initial" }}
              dangerouslySetInnerHTML={{
                __html: update.bigTitle ? update.bigTitle : "",
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="col-12">
              <ul className="tab-list col-12 text-center mb-5 mt-1 p-0">
                {update.item &&
                  update.item.map((item, index) => (
                    <li
                      key={index + 1}
                      className={`tabs ${getActiveClass(
                        index + 1,
                        "active-tabs"
                      )}`}
                      onClick={() => toggleTab(index + 1)}
                    >
                      <span
                        style={{ direction: "initial" }}
                        dangerouslySetInnerHTML={{
                          __html: item.svg
                            ? item.svg
                            : `<svg fill="currentColor" style="display:inline-block;vertical-align:middle" height="24" width="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path></svg>`,
                        }}
                      />
                      <span className="mx-1">{item.title}</span>
                    </li>
                  ))}
              </ul>
              <div className="content-container">
                {update.item &&
                  update.item.map((item, index) => (
                    <div
                      className={`content ${getActiveClass(
                        index + 1,
                        "active-content"
                      )}`}
                      key={index + 1}
                    >
                      <img src={item.img} className="border-radius" />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bgsvg"
        dangerouslySetInnerHTML={{
          __html:
            config && config.bgsvg
              ? config.bgsvg
              : '<svg width="1920" height="500" viewBox="0 0 1920 500"><defs><clipPath><rect width="1920" height="500"></rect></clipPath></defs><g data-name="Shape"><rect data-name="Rectangle 134" width="2356" height="781" transform="translate(-136.868 401.948) rotate(-11)" fill="var(--bs-body-bg)"></rect></g></svg>',
        }}
      />
      <style jsx>
        {`
          .tabs::before {
            background: rgba(0, 0, 0, 0.08);
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0px;
            left: 0px;
            display: block;
          }
          .tabs.active-tabs::before {
            background: #fff;
          }
          .tabs {
            font-size: 18px;
            color: rgb(220, 244, 232);
            font-weight: 400;
            min-width: 230px;
            padding: 0px 0px 27px;
            text-align: center;
            margin-right: 20px;
            transition: all 0.25s ease-in-out 0s;
            background: transparent;
            -webkit-box-pack: center;
            justify-content: center;
            cursor: pointer;
            position: relative;
          }
          @media (max-width: 1199px) {
            .tabs {
              font-size: 16px;
              padding: 0px 0px 20px;
              min-width: 170px;
            }
          }
          @media (max-width: 990px) {
            .tabs {
              min-width: auto;
              padding: 0px 10px 15px;
            }
          }
          @media (max-width: 767px) {
            .tabs {
              font-size: 14px;
              padding: 0px;
              max-width: 50%;
              margin: 0px;
              margin-bottom: 10px;
              display: flex;
              width: 50%;
              justify-content: flex-start;
            }
            .tabs::before {
              display: none;
            }
            ul {
              flex-wrap: wrap;
            }
          }

          .content {
            display: none;
          }
          .active-content {
            display: flex;
          }
          .active-tabs {
            color: #fff;
          }

          ul {
            list-style: none;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          img {
            border-radius: 10px;
            overflow: hidden;
            box-shadow: rgb(27 67 111 / 15%) 0px 5px 60px 0px;
            width: 100%;
            z-index: 5;
          }
          .bgsvg {
            position: absolute;
            width: 100%;
            bottom: 0px;
            left: 0px;
            z-index: 0;
            pointer-events: none;
          }
          h2 {
            margin-bottom: 50px;
            color: #fff;
          }

          h5 {
            color: #fff !important;
          }
          .update {
            padding: 90px 0px;
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
export default Update;
