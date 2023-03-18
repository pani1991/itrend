import React, { useState, useEffect } from "react";
import Menuitem from "./menuitem";
import FullScreenMenu from "./fullscreenmenu";
import Image from "next/image";
const Menu = ({ direction, menu, id, class_name, css, config }) => {
  const [accordionState, setaccordionState] = useState();

  const accordion = (index) => {
    setaccordionState(index);
  };

  const getActiveClass = (index, className) =>
    accordionState === index ? className : "";

  const [accordionState2, setaccordionState2] = useState();

  const accordion2 = (index) => {
    setaccordionState2(index);
  };

  const getActiveClass2 = (index, className) =>
    accordionState2 === index ? className : "";

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 92);
    });
  }, []);
  return (
    <div
      className={
        (config && config.position == "absolute" ? "absolute " : "relative ") +
        " py-1 menurow " +
        " " +
        direction +
        " " +
        (class_name ? class_name : "") +
        " " +
        (scroll ? "sticky" : "")
      }
      id={id ? id : ""}
      style={{
        background: `${
          config && config.position == "relative"
            ? config && config.backColor
            : "transparent"
        }`,
        zIndex: "4",
        width: "100%",
      }}
    >
      <div
        className={
          (config && config.width ? config.width : "container") +
          " menubox2 container p-sm-0 " +
          " "
        }
      >
        <div className="row">
          <div className="col-12 position-relative">
            <a href="/">
              <div className="logo position-relative ">
                <div className="shine">
                  <Image
                    src={menu.logo}
                    alt=""
                    quality={70}
                    width={127}
                    height={60}
                    layout="fixed"
                    className=""
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </a>
            <div
              className={config && config.center_menu ? config.center_menu : ""}
            >
              <ul className="d-none d-lg-inline-block">
                {menu.items.map(({ title, type, link, sub, img }, index) => (
                  <Menuitem
                    direction={direction}
                    title={title}
                    type={type}
                    link={link}
                    sub={sub}
                    img={img}
                    key={index + 1}
                    scroll={scroll}
                    position={config && config.position ? config.position : ""}
                  />
                ))}
              </ul>
            </div>
            <div>
              <div
                className={`search d-inline-block  mx-lg-2 mx-2 ${getActiveClass2(
                  1,
                  "active-modal"
                )}`}
                onClick={() => accordion2(1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
              <div
                className={`modal ${getActiveClass2(
                  1,
                  "showmodal"
                )} ${getActiveClass2(2, "dontshowmodal")}`}
              >
                <div
                  className="position-relative"
                  style={{ background: "#0e0e0eed", zIndex: "100" }}
                >
                  <div
                    className={`container site-nav-brand d-block ${getActiveClass2(
                      1,
                      "active-modal"
                    )}`}
                    onClick={() => accordion2(2)}
                  >
                    <div className="row">
                      <div className="col-12 p-sm-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          className="bi bi-x-lg d-inline-block"
                          viewBox="0 0 16 16"
                          style={{
                            marginInlineStart: "auto",
                            marginTop: "88px",
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
                  <div className="row py-5">
                    <div className="col-12 d-block text-center">
                      <input placeholder={menu.search} />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`d-inline-block ${
                  config && config.menu_type && config.menu_type == "2type"
                    ? " "
                    : config &&
                      config.center_menu &&
                      config.center_menu == false
                    ? " "
                    : "d-lg-none"
                } ${getActiveClass(1, "active-modal")}`}
                onClick={() => accordion(1)}
              >
                <svg
                  width="20px"
                  height="20px"
                  style={{ cursor: "pointer" }}
                  viewBox="0 0 188 188"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="#000000ff">
                    <path
                      fill="#000000"
                      opacity="1.00"
                      d=" M 6.35 27.35 C 10.49 26.39 14.79 26.78 19.00 26.71 C 68.66 26.73 118.33 26.72 167.99 26.72 C 172.60 26.77 177.25 26.43 181.83 27.14 C 184.66 27.67 186.48 30.12 188.00 32.35 L 188.00 40.50 C 185.52 43.48 182.24 46.37 178.07 46.01 C 124.05 46.01 70.03 45.96 16.01 46.04 C 12.05 45.93 7.44 46.69 4.22 43.81 C -1.16 39.87 -0.24 29.56 6.35 27.35 Z"
                    />
                    <path
                      fill="#000000"
                      opacity="1.00"
                      d=" M 3.63 85.60 C 6.79 82.08 11.81 83.07 16.00 82.97 C 67.34 83.03 118.67 82.98 170.00 82.99 C 173.89 83.07 177.83 82.65 181.69 83.28 C 184.29 84.24 186.16 86.41 188.00 88.38 L 188.00 96.63 C 186.15 98.59 184.28 100.76 181.69 101.72 C 177.82 102.35 173.89 101.93 170.00 102.01 C 116.65 102.00 63.30 102.00 9.95 102.01 C 6.26 102.24 3.20 99.53 1.31 96.62 C 0.64 92.89 0.12 88.11 3.63 85.60 Z"
                    />
                    <path
                      fill="#000000"
                      opacity="1.00"
                      d=" M 3.18 142.17 C 6.59 138.10 12.32 139.05 17.01 138.97 C 70.69 139.03 124.38 138.99 178.06 138.99 C 182.23 138.62 185.50 141.51 188.00 144.46 L 188.00 152.65 C 186.48 154.88 184.66 157.33 181.83 157.86 C 178.25 158.44 174.61 158.28 171.00 158.30 C 117.67 158.23 64.33 158.35 10.99 158.24 C 6.75 158.58 2.04 156.31 1.12 151.86 C 0.75 148.57 0.38 144.56 3.18 142.17 Z"
                    />
                  </g>
                </svg>
              </div>
              <div
                className={`modal ${getActiveClass(
                  1,
                  "showmodal"
                )} ${getActiveClass(2, "dontshowmodal")}`}
              >
                <div
                  className="position-relative"
                  style={{ background: "#0e0e0eed", zIndex: "100" }}
                >
                  <div
                    className={`container site-nav-brand  ${getActiveClass(
                      1,
                      "active-modal"
                    )}`}
                    onClick={() => {
                      accordion(2);
                    }}
                  >
                    <div className="row">
                      <div className="col-12 p-sm-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          className="bi bi-x-lg d-inline-block"
                          viewBox="0 0 16 16"
                          style={{
                            marginInlineStart: "auto",
                            marginTop: "88px",
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

                <FullScreenMenu direction={direction} menu={menu} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          div.sticky path {
            fill: #fff !important;
          }
          div.sticky {
            position: fixed;
            top: 0px !important;
            background: #000 !important;
          }
          .sticky .logo {
            top: -5px;
          }
          .shine {
            -webkit-mask-image: linear-gradient(
              109deg,
              rgb(255 255 255) 45%,
              #ff000059 50%,
              rgb(255 255 255) 55%
            );
            mask-image: linear-gradient(
              109deg,
              rgb(255 255 255) 45%,
              #ff000059 50%,
              rgb(255 255 255) 55%
            );
            animation: mymove 5s infinite;
            animation-timing-function: cubic-bezier(0.7, 1.22, 1, 1);
          }
          @keyframes mymove {
            from {
              -webkit-mask-position: -82px;
              mask-position: -82px;
            }
            to {
              -webkit-mask-position: 62px;
              mask-position: 62px;
            }
          }
          @media (min-width: 960px) {
            .site-nav-brand.d-flex.active-modal {
              padding: 0 40px !important;
              z-index: 4 !important;
              position: relative !important;
            }
          }
          .site-nav-brand.d-flex.active-modal {
            display: flex;
            justify-content: space-between;
            padding: 0 24px;
            padding-top: 20px !important;
          }
          .hide {
            display: none;
          }
          :focus-visible {
            outline: -webkit-focus-ring-color auto 0px;
          }
          :placeholder {
            color: #fff;
            font-size: 18px;
          }
          .modal input {
            width: 100%;
            background: transparent;
            border-width: 0px 0px 1px 0px;
            padding: 15px 10px;
            font-size: 18px;
            color: #fff;
          }
          @media (min-width: 768px) {
            .search {
              text-align: end;
            }
          }
          .modal li a {
            font-size: 1.3rem !important;
            display: block;
            margin-bottom: 15px;
            color: #fff !important;
          }
          .modal li {
            display: block;
          }
          .showmodal {
            position: fixed;
            width: 100%;
            height: 100%;
            background: #0d0d0d;
            display: block;
            z-index: 155;
          }
          .dontshowmodal {
            display: none;
          }
          li {
            display: inline-block;
            margin: 0px 15px;
          }
          li a {
            color: #fff !important;
            text-decoration: none;
          }
          ul {
            margin: 0px;
            padding: 0px;
            list-style: none;
          }
          .logo {
            position: absolute !important;
            top: -46px;
            background: #fff;
            padding: 20px 10px;
            background: radial-gradient(
              circle,
              rgba(255, 255, 255, 1) 37%,
              rgb(192 192 192) 100%
            );
          }
          .menubox2 .row .col-12 {
            height: 55px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .menubox .row .col-12 {
            height: 115px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          @media screen and (min-width: 768px) {
            .menubox {
              padding: 0 79px;
            }
          }
          @media screen and (min-width: 1200px) {
            .menubox {
              padding: 0 32px;
            }
          }
          svg {
            cursor: pointer;
          }
          svg path {
            fill: var(--bs-body-color) !important;
          }
          .bi-x-lg path {
            fill: #fff !important;
          }
          .absolute svg path {
            fill: #fff !important;
          }
          .menurow {
            width: 100%;
            z-index: 4;
            left: 0px;
            right: 0px;
            top: 42px !important;
            border-bottom: 1px solid #ffffff12;
          }
          .modal .logo {
            width: 190px;
          }
          @media (min-width: 375px) {
            .modal .logo {
              width: 120px;
            }
          }

          ${css ? css : ""}
          .rtl {
            direction: rtl;
          }
        `}
      </style>
    </div>
  );
};
export default Menu;
