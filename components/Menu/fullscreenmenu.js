import React, { useState } from "react";
import Image from "next/image";
const FullScreenMenu = ({ direction, menu, color }) => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

  const reset = () => {
    toggleTab2(null);
  };

  const reset2 = () => {
    toggleTab(null);
  };

  const [toggleState2, setToggleState2] = useState(0);

  const toggleTab2 = (index) => {
    setToggleState2(index);
  };

  const getActiveClass2 = (index, className) =>
    toggleState2 === index ? className : "";

  return (
    <div className={"position-relative box " + direction}>
      <div className="row body">
        <div className="col-lg-4 phone">
          <ul className="tab-list col-12 ">
            {menu.items &&
              menu.items.map((item, index) => (
                <li
                  key={index + 1}
                  className={`tabs dep-0-${index + 1} ${getActiveClass(
                    index + 1,
                    "active-tabs"
                  )}`}
                  onClick={() => {
                    if (index + 1 != toggleState) {
                      toggleTab(index + 1);
                      reset();
                    } else {
                      toggleTab(null);
                      reset();
                    }
                  }}
                >
                  {item.title}
                </li>
              ))}
          </ul>
        </div>
        <div className="content-container col-lg-4 col-lg-4-2">
          {menu.items &&
            menu.items.map((item, index) => (
              <ul
                key={index + 1}
                className={
                  `content content3 dep-1-${index + 1} ${getActiveClass(
                    index + 1,
                    "active-content"
                  )}` +
                  " " +
                  (item.sub && item.sub.submenu && item.sub.submenu.length > 0
                    ? ""
                    : "d-none")
                }
              >
                <li
                  className="w-100  d-block d-lg-none"
                  onClick={() => {
                    reset2();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </li>
                {item.sub.submenu &&
                  item.sub.submenu.map((item, index) => (
                    <li
                      key={index + 1}
                      className={`tabs submenu ${getActiveClass2(
                        index + 1,
                        "active-tabs"
                      )}`}
                      onClick={() => {
                        if (index + 1 != toggleState2) {
                          toggleTab2(index + 1);
                        } else {
                          toggleTab2(null);
                        }
                      }}
                    >
                      {item.sub.length > 0 ? (
                        item.title
                      ) : (
                        <a href={item.link}>{item.title}</a>
                      )}

                      {item.sub.length > 0 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-caret-right"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                        </svg>
                      ) : (
                        // <svg
                        //   xmlns="http://www.w3.org/2000/svg"
                        //   width="16"
                        //   height="16"
                        //   fill="currentColor"
                        //   className="bi bi-arrow-right-short"
                        //   viewBox="0 0 16 16"
                        // >
                        //   <path
                        //     fillRule="evenodd"
                        //     d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        //   />
                        // </svg>
                        ""
                      )}
                      <div
                        className={`bgimg  content ${getActiveClass2(
                          index + 1,
                          "active-content"
                        )}`}
                      >
                        <Image
                          src={item.img}
                          alt=""
                          quality={70}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </li>
                  ))}
              </ul>
            ))}
        </div>
        <div className="content-container col-lg-4 col-lg-4-2">
          {menu.items &&
            menu.items.map((item, index) => (
              <div className="h-100" key={index + 1}>
                {item.sub.submenu &&
                  item.sub.submenu.map((item, index) => (
                    <ul
                      key={index + 1}
                      className={
                        `content ${getActiveClass2(
                          index + 1,
                          "active-content"
                        )}` +
                        " " +
                        (item.sub && item.sub.length > 0 ? "" : "d-none")
                      }
                    >
                      <li
                        className="w-100 pb-3 d-block d-lg-none"
                        onClick={() => {
                          reset();
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          fill="currentColor"
                          className="bi bi-arrow-left"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                          />
                        </svg>
                      </li>
                      {item.sub &&
                        item.sub.map((item, index) => (
                          <li className="submenu submenu2" key={index + 1}>
                            <a href={item.link}>{item.title} </a>
                          </li>
                        ))}
                    </ul>
                  ))}
              </div>
            ))}
        </div>
      </div>

      <div
        className="row"
        style={{ background: "#0e0e0eed", zIndex: "100", position: "relative" }}
      >
        <div className="col-12  social_menu" style={{ alignItems: "center" }}>
          <div className=" d-flex">
            <strong className="title">
              {menu.social_menu.title ? menu.social_menu.title : ""}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="mx-2 bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </strong>
            <ul className="d-inline-block mx-2 ">
              {menu.social_menu.items.icon.map(
                ({ link, icon, type }, index) => (
                  <li key={index + 1}>
                    <a href={link} className=" position-relative">
                      {/* <Image
                      src={icon}
                      alt=""
                      width={20}
                      height={20}
                      quality={70}
                      layout="fixed"
                      style={{ objectFit: "cover" }}
                    /> */}
                      {type
                        ? (type == "facebook" ? (
                            <svg
                              xmlns=" http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill=" currentColor"
                              className="bi bi-facebook"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                          ) : (
                            ""
                          )) ||
                          (type == "linkedin" ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="bi bi-linkedin"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                          ) : (
                            ""
                          )) ||
                          (type == "twitter" ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="bi bi-twitter"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                          ) : (
                            ""
                          )) ||
                          (type == "youtube" ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="bi bi-youtube"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                            </svg>
                          ) : (
                            ""
                          )) ||
                          (type == "instagram" ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="bi bi-instagram"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                            </svg>
                          ) : (
                            ""
                          )) ||
                          (type == "telegram" ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="bi bi-telegram"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                            </svg>
                          ) : (
                            ""
                          )) ||
                          (type == "whatsapp" ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              class="bi bi-whatsapp"
                              viewBox="0 0 16 16"
                            >
                              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                            </svg>
                          ) : (
                            ""
                          ))
                        : ""}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .rtl .tabs.submenu svg {
            transform: rotate(180deg);
          }
          .h-100 {
            overflow: hidden;
          }
          .bgimg {
            width: 100%;
            height: 100%;
            z-index: -10;
            position: fixed;
            top: 0px;
            left: 0px;
          }
          .bgimg img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 1;
          }
          .bgimg:before {
            content: "";
            position: absolute;
            right: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              180deg,
              hsl(0deg 0% 5% / 74%) 29.22%,
              #0e0e0e
            );
            z-index: 2;
            pointer-events: none;
          }
          .submenu {
            font-size: 20px !important;
            line-height: 1.5;
            display: block;
            margin-top: 24px;
          }
          .submenu:first-child {
            margin-top: 0px;
          }
          .body ul {
            height: -webkit-fill-available;
            overflow-y: scroll;
          }

          .content {
            display: none;
          }
          .active-content {
            display: block;
          }

          .submenu2 {
            border-top: 1px solid #464a4f47 !important;
            border-bottom: 1px solid #464a4f47 !important;
            padding-top: 14px !important;
            padding-bottom: 17px !important;
            margin: 0px !important;
          }
          .body ul li a {
            color: #fff !important;
          }
          @media (min-width: 768px) {
            .body ul li {
              font-size: 48px;
            }
          }
          .body ul li {
            font-size: 25px;
            line-height: 1.15;
            letter-spacing: -0.1px;
            position: relative;
            border: 0;
            padding: 0;
            margin-top: 25px;
            opacity: 1;
            cursor: pointer;
            color: #fff;
            border-top: 1px solid#464a4f47 !important;
            border-bottom: 1px solid#464a4f47 !important;
            padding-top: 14px !important;
            padding-bottom: 17px !important;
            margin: 0px !important;
          }
          .body {
            position: relative;
            z-index: 4;
          }
          .body ul {
            padding: 90px 24px 0;
            width: 100%;
          }
          @media (min-width: 768px) {
            .body ul {
              padding-top: 80px;
              padding-bottom: 40px;
            }
          }
          @media (min-width: 960px) {
            .body ul {
              padding-left: 40px;
              padding-right: 40px;
            }
            .col-lg-4 {
              height: calc(100vh - 129px);
            }
          }
          @media (max-width: 960px) {
            .body ul {
              padding-left: 40px;
              padding-right: 40px;
            }
          }

          .box {
            height: calc(100vh - 58px);
            overflow: hidden;
            z-index: 1;
            position: relative !important;
          }
          ul {
            margin: 0px;
            padding: 0px;
            list-style: none;
          }
          .social_menu a img {
            width: ${menu.social_menu.items.iconSize};
            height: ${menu.social_menu.items.iconSize};
            display: inline-block;
          }
          .social_menu a img:hover {
            opacity: 0.7;
          }
          .social_menu ul a {
            color: #fff;
          }
          .social_menu ul li {
            display: inline-block;
            margin-inline-end: 28px;
          }
          .social_menu ul a:hover {
            color: #bac5c6;
          }
          .social_menu .title {
            color: #8996a0;
          }
          .rtl .social_menu .title svg {
            transform: rotate(180deg);
          }

          .social_menu {
            position: relative;
            bottom: 0px;
            // padding: 18px 0 19px 40px;
            border-top: 1px solid;
            z-index: 4;
            height: 64px;
          }
          @media (min-width: 768px) {
            .social_menu {
              padding: 24px 24px 26px 24px;
            }
          }
          @media (min-width: 960px) {
            .social_menu {
              padding: 24px 40px 24px 40px;
            }
          }

          .body:before,
          .body:after {
            top: -27px;
            transform: rotate(-180deg);
            height: 115px;
            background: linear-gradient(0deg, #0e0e0eed 42%, transparent);
            content: "";
            position: absolute;
            right: 0;
            left: 0;
            height: 110px;
            z-index: 1;
            pointer-events: none;
          }

          .body:after {
            top: auto;
            bottom: 0px;
            background: linear-gradient(0deg, transparent 42%, #0e0e0e);
          }
          @media (max-width: 992px) {
            .col-lg-4 ul {
              height: fit-content;
              overflow-y: scroll !important;
              padding: 0px 24px 50px !important;
            }

            .col-lg-4 ul ul {
              padding: 0px !important;
            }
            .social_menu {
              background: #0d0d0d;
              padding: 24px 24px 0px;
              font-size: 0.8rem;
            }
            .social_menu svg {
              width: 15px;
              height: 15px;
            }
            .social_menu ul li {
              margin-inline-end: 15px;
            }
            .body {
              height: calc(100vh - 129px) !important;
              overflow-y: scroll;
            }
            .tab-list.text-center {
              text-align: inherit !important;
            }
            .phone {
              height: calc(100vh - 129px) !important;
              overflow-y: scroll !important;
              padding: 30px 14px;
              position: fixed;
              width: 100%;
              left: 0px;
            }
            .col-lg-4 ul.tab-list {
              height: fit-content !important;
              padding: 0px !important;
              overflow: visible !important;
            }
            .bgimg {
              visibility: hidden;
              display: none;
              width: 0px;
              height: 0px;
            }
            .active-content {
              position: fixed;
              top: 105px;
              background: #0d0d0d;
              z-index: 0;
              left: 0px;
              height: calc(100vh - 191px) !important;
            }
            .col-lg-4-2 {
              height: 100%;
            }
          }
          .rtl {
            direction: rtl;
          }
        `}
      </style>
    </div>
  );
};
export default FullScreenMenu;
