import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import useWindowSize from "../../hook/windowDimensions";

const MarketplaceCategoryContent = ({
  direction,
  marketplace,
  class_name,
  id,
  css,
}) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

  const [dropState, setdropState] = useState(1);

  const drop = (index) => {
    if (size.width <= 991) setdropState(index);
  };

  const getActiveClass2 = (index, className) =>
    dropState === index ? className : "";
  const size = useWindowSize();

  const [item, setItem] = useState(marketplace.item);

  const menuItems = [...new Set(marketplace.item.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = marketplace.item.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <div
      className={
        "marketplace position-relative " +
        direction +
        " " +
        (class_name ? class_name : "")
      }
      id={id ? id : ""}
      style={{
        zIndex: "2",
      }}
    >
      <div className="position-relative container ">
        <div className="row">
          <div className="col-12">
            <div className="row g-4">
              <div className="col-lg-3 ">
                <div
                  className="col-12 box-tabs d-block pt-1 pb-1 px-3 boxhover box-slid"
                  style={{
                    height: "inherit",
                    boxShadow: "-2px 4px 4px 0 rgb(0 0 0 / 7%)",
                    border: "2.5px solid transparent",
                  }}
                >
                  <div
                    className={`py-3 tabs ${getActiveClass2(1, "active-tabs")}`}
                    onClick={() => {
                      if (1 != dropState) {
                        drop(1);
                      } else {
                        drop(null);
                      }
                    }}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <h6 className="mx-1 d-inline">
                        {marketplace.sideFilterTitle}
                      </h6>
                    </div>

                    <span
                      className={`svg bi-dash ${getActiveClass2(
                        1,
                        "d-inline"
                      )}`}
                    >
                      <svg
                        width="12pt"
                        height="12pt"
                        viewBox="0 0 981 981"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="#000000ff">
                          <path
                            fill="#000000"
                            opacity="1.00"
                            d=" M 51.84 210.87 C 78.76 201.49 110.48 209.25 130.26 229.74 C 248.74 348.26 367.26 466.74 485.75 585.25 C 487.49 586.87 488.94 588.89 491.00 590.14 C 493.05 588.88 494.51 586.87 496.25 585.25 C 614.42 467.08 732.58 348.92 850.75 230.75 C 862.18 218.75 877.53 210.40 893.98 208.03 C 917.08 204.00 941.97 211.77 958.77 228.23 C 970.45 239.56 977.67 254.90 981.00 270.62 L 981.00 294.39 C 978.06 308.86 971.76 322.71 961.76 333.76 C 822.75 472.74 683.74 611.74 544.76 750.77 C 522.84 773.32 486.53 779.55 458.33 765.69 C 448.97 761.32 440.82 754.71 433.76 747.25 C 297.42 610.92 161.08 474.59 24.75 338.25 C 10.32 325.04 0.94 305.79 0.96 286.12 C 0.72 285.69 0.24 284.83 0.00 284.39 L 0.00 280.59 C 0.24 280.16 0.72 279.30 0.95 278.87 C 0.94 248.37 23.04 220.08 51.84 210.87 Z"
                          />
                        </g>
                      </svg>
                    </span>
                    <span
                      className={`svg bi-plus ${getActiveClass2(
                        1,
                        "svgactive"
                      )}`}
                    >
                      <svg
                        width="12pt"
                        height="12pt"
                        viewBox="0 0 981 981"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="#000000ff">
                          <path
                            fill="#000000"
                            opacity="1.00"
                            d=" M 471.59 209.56 C 496.49 202.48 524.60 209.91 543.26 227.74 C 682.74 367.26 822.26 506.75 961.75 646.25 C 971.77 657.31 978.10 671.15 981.00 685.70 L 981.00 709.30 C 978.14 722.85 972.52 735.93 963.57 746.60 C 952.35 759.93 936.21 769.10 918.99 771.83 C 896.01 776.12 871.33 768.66 854.26 752.74 C 735.24 633.77 616.26 514.74 497.25 395.76 C 495.19 393.77 493.40 391.46 491.00 389.87 C 488.60 391.46 486.81 393.76 484.76 395.75 C 365.74 514.74 246.77 633.76 127.74 752.74 C 103.34 776.00 63.06 779.86 34.97 761.03 C 16.24 749.38 3.58 728.88 1.08 707.02 C 0.90 704.42 1.33 701.66 0.00 699.29 L 0.00 695.71 C 1.48 693.03 0.80 689.91 1.15 687.01 C 3.50 670.31 11.31 654.25 23.75 642.75 C 162.08 504.41 300.43 366.10 438.74 227.74 C 448.08 219.27 459.17 212.36 471.59 209.56 Z"
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                  <div className="border-top pb-4 content active-content">
                    <ul className="p-0 m-0">
                      <li
                        className="tabs mt-3 "
                        onClick={() => setItem(marketplace.item)}
                      >
                        {marketplace.all}
                      </li>
                      {menuItems.map((Val, i) => {
                        return (
                          <li
                            className="tabs mt-3 "
                            onClick={() => filterItem(Val)}
                            key={i + 1}
                          >
                            <span
                              style={{ direction: "initial" }}
                              dangerouslySetInnerHTML={{
                                __html: item.svg ? item.svg : "",
                              }}
                            />
                            <span className="mx-1"> {Val}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="row g-4">
                  {item.map((Val, i) => {
                    return (
                      <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="app-box boxhover">
                          <Image
                            src={Val.img}
                            alt=""
                            height="56"
                            width="56"
                            layout="fixed"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA..."
                            placeholder="blur"
                          />
                          <div className="name">{Val.title}</div>
                          <div className="category">{Val.category}</div>
                          <div className="info position-relative">
                            {Val.liStItem &&
                              Val.liStItem.map((Val, i) => (
                                <div className="version" key={i + 1}>
                                  {Val}
                                </div>
                              ))}

                            <a href={Val.btnLink} className="box__more">
                              <div className="more-btn">
                                {marketplace.btnTitle
                                  ? marketplace.btnTitle
                                  : ""}
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .bi-dash path {
            fill: var(--bs-body-color);
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
          .disable {
            opacity: 0.2;
          }
          .disable:hover {
            cursor: auto !important;
            color: #647e9a !important;
          }
          a svg path[Attributes Style] {
            stroke: var(--color1) !important;
          }
          a svg {
            width: 22px !important;
            height: 22px !important;
            min-width: 22px !important;
            min-height: 22px !important;
          }
          .boxhover:hover {
            border-color: var(--color1);
            box-shadow: -2px 4px 4px 0 rgb(0 0 0 / 7%);
          }
          li {
            list-style: none;
            color: #6e6e6e;
          }
          li:hover {
            color: var(--color1);
            cursor: pointer;
          }
          li.active-tabs {
            color: var(--color1);
          }
          .app-box .more-btn {
            background-color: var(--color1);
            border-radius: var(--bs-border-radius);
            color: #fafafa;
            font-size: 13px;
            font-weight: 600;
            height: 40px;
            padding-top: 9px;
            text-align: center;
            transition: all 0.2s ease-in-out;
            width: 100%;
          }
          .app-box:hover .box__more {
            opacity: 1;
            visibility: visible;
          }
          .app-box:hover .info {
            visibility: hidden;
          }
          .app-box .box__more {
            background-color: #fff;
            bottom: 0;
            left: 0;
            opacity: 0;
            position: absolute;
            transition: visibility 0.2s linear, opacity 0.2s;
            visibility: hidden;
            width: 100%;
          }
          .app-box .version:before,
          .app-box .os:before {
            background: var(--color1);
            border-radius: var(--bs-border-radius);
            content: "";
            height: 7px;
            left: 0;
            position: absolute;
            top: 6px;
            width: 7px;
          }
          .rtl .app-box .version:before,
          .rtl .app-box .os:before {
            right: 0;
            left: auto;
          }
          .app-box .version,
          .app-box .os {
            color: #6a7d9b;
            font-size: 14px;
            line-height: 20px;
            padding-inline-start: 12px;
            position: relative;
          }

          .app-box .info {
            display: flex;
            flex-direction: column;
            gap: 8px;
            height: 35%;
            justify-content: flex-end;
            text-align: start;
          }
          .app-box .category {
            background-color: var(--bs-tertiary-bg);
            border-radius: var(--bs-border-radius);
            color: var(--bs-body-color) !important;
            font-size: 14px;
            font-weight: 600;
            margin-inline-end: auto;
            margin-top: 24px;
            padding: 8px 12px;
            width: -moz-fit-content;
            width: fit-content;
          }
          .app-box .name {
            color: var(--bs-dark-text);
            direction: ${direction};
            font-size: 22px;
            font-weight: 600;
            line-height: 24px;
            margin-top: 16px;
            max-width: 170px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: start;
          }
          .app-box img {
            height: 56px;
          }
          .app-box {
            height: 297px !important;
            padding: 32px 24px;
            background: var(--bs-body-bg);
            background: linear-gradient(
              113deg,
              var(--bs-body-bg) 67%,
              var(--color3) 77%,
              var(--bs-body-bg) 83%,
              var(--color3) 86%,
              var(--bs-body-bg) 89%,
              var(--color3) 92%,
              var(--bs-body-bg) 96%
            );
            border: 2px solid var(--bs-body-bg);
            border-radius: var(--bs-border-radius);
            display: block;
            box-shadow: -2px 4px 4px 0 rgb(0 0 0 / 7%);
          }
          .rtl .app-box {
            background: linear-gradient(
              250deg,
              var(--bs-body-bg) 67%,
              var(--color3) 77%,
              var(--bs-body-bg) 83%,
              var(--color3) 86%,
              var(--bs-body-bg) 89%,
              var(--color3) 92%,
              var(--bs-body-bg) 96%
            );
          }
          .box-tabs {
            grid-column-gap: 8px;
            display: flex;
            display: grid;
            grid-template-columns: auto auto auto auto;
            min-height: 49px;
            overflow-x: auto;
            overflow-y: hidden;
            top: -62px;
            width: 100%;
            border: 2px solid var(--bs-body-bg);
            background: var(--bs-body-bg);
          }

          .box-tabs-tabs {
            align-items: center;
            background-color: #e9edf5;
            border-radius: var(--bs-border-radius);
            color: #647e9a;
            -moz-column-gap: 9px;
            column-gap: 9px;
            cursor: pointer;
            display: flex;
            font-size: 20px;
            height: 40px;
            justify-content: center;
            padding-left: 16px;
            padding-right: 16px;
            position: relative;
            text-align: center;
            transition: all 0.15s ease-in-out;
            white-space: nowrap;
            font-weight: 400;
          }
          .box-tabs-tabs:hover {
            color: #004545;
          }
          .box-tabs-tabs.active::before {
            background: var(--color1);
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0px;
            display: block;
          }
          .box-tabs-tabs.active {
            color: var(--color1);
            font-weight: 600;
          }
          @media (min-width: 1200px) {
            .box-tabs-tabs {
              width: calc(25% - 60px);
            }
          }
          .box-slid {
            grid-column-gap: unset;
            background: var(--bs-body-bg);
            border: 2px solid #e9edf5;
            border-radius: var(--bs-border-radius);
            display: flex;
            height: 72px;
            justify-content: space-around;
            min-height: unset;
            overflow-x: unset;
          }
          @media (min-width: 768px) {
            .box-tabs {
              grid-column-gap: unset;
              background: var(--bs-body-bg);
              border: 2px solid #e9edf5;
              border-radius: var(--bs-border-radius);
              display: flex;
              height: 72px;
              justify-content: space-around;
              min-height: unset;
              overflow-x: unset;
            }
            .box-tabs-tabs {
              background: transparent;
              color: #647e9a;
              height: 100%;
              padding: unset;
              width: unset;
            }
          }
          @media (max-width: 768px) {
            .box-tabs-tabs.active::before {
              display: none;
            }
            .box-tabs-tabs.active {
              background: var(--bs-body-bg);
              box-shadow: -2px 4px 4px 0 rgb(0 0 0 / 7%);
              color: var(--color1);
              margin-bottom: 5px;
            }
          }
          @media (max-width: 991px) {
            .box-tabs-tabs {
              font-size: 16px;
              padding-top: 5px;
            }
          }
          .content {
            display: none;
          }
          .active-content {
            display: flex;
          }

          .marketplace {
            background-color: #f5f7fa;
            padding-bottom: 88px;
            padding-top: 24px;
          }
          .marketplace {
            background-color: var(--bs-tertiary-bg);
            ${css ? css : ""}
          }
          .rtl {
            direction: rtl;
            font-family: "fontrtl";
          }
        `}
      </style>
    </div>
  );
};
export default MarketplaceCategoryContent;
