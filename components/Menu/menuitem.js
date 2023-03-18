import React, { useState } from "react";

import Link from "next/link";
const Menuitem = ({
  direction,
  title,
  type,
  link,
  sub,
  img,
  position,
  scroll,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <li
      className={
        position +
        " " +
        " accordionitem-title " +
        direction +
        " " +
        (sub.part1 && sub.part1 !== "1" && sub.part3 !== "1" && sub.part2 == "1"
          ? " position-relative "
          : "") +
        (scroll ? " sticky " : "")
      }
      onClick={() => {
        type == 1 ? setIsActive(!isActive) : "";
      }}
    >
      <Link href={type == 1 && link == null ? "#" : link} legacyBehavior>
        <a className="d-flex" style={{ alignItems: "center" }}>
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="currentColor"
            viewBox="0 0 16 16"
            style={{ marginInlineStart: "5px" }}
            className={type == 2 || type == 3 ? "d-none" : ""}
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </a>
      </Link>
      {isActive && (
        <div
          className="bgtransparent"
          onClick={() => setIsActive(!isActive)}
        ></div>
      )}
      {sub.part1 && sub.part1 == "1" && sub.part3 == "1"
        ? isActive && (
            <div className="accordionitem-content row">
              {sub.part1 && sub.part1 == "1" ? (
                <div className="col-md-3 p-0 w1" style={{ minHeight: "420px" }}>
                  <div
                    className={"text-start p-4 " + direction}
                    style={{
                      background: `${sub.gradiant ? sub.gradiant : ""},url(${
                        sub.img ? sub.img : ""
                      })`,
                      width: "100%",
                      height: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <h4 className="text-white">{sub.title}</h4>
                    <p className="text-white">{sub.description}</p>
                  </div>
                </div>
              ) : (
                ""
              )}
              {sub.part2 && sub.part2 == "1" ? (
                <div className="col-md-3 p-0 w2">
                  <div
                    className="text-start p-4 submenuplus"
                    style={{
                      background: `#e0e9ff`,
                      width: "100%",
                      height: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <ul className="m-0 p-0">
                      {sub.submenuplus &&
                        sub.submenuplus.map((item, index) => (
                          <li
                            className="mb-3 d-block"
                            key={index + 1}
                            style={{ fontSize: "13px" }}
                          >
                            <a href={item.link}>
                              <strong>{item.bigtitle}</strong>
                            </a>
                            <br />
                            <a href={item.link}>
                              <span>{item.title}</span>
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              ) : (
                ""
              )}
              {sub.part3 && sub.part3 == "1" ? (
                <div
                  className={
                    sub.part2 == "0"
                      ? " col-md-9 p-3 w3 "
                      : "" + " col-md-6 p-3 w3 "
                  }
                >
                  <div className="row">
                    {sub.submenu &&
                      sub.submenu.map((item, index) => (
                        <div
                          className="col-6 col-lg-4 text-start mb-3"
                          key={index + 1}
                          style={{ fontSize: "13px" }}
                        >
                          <a href={item.link} className="sublink d-block mb-2">
                            <strong>{item.title}</strong>
                          </a>
                          <ul className="m-0 p-0">
                            {item.sub &&
                              item.sub.map((item, index) => (
                                <li
                                  className="d-block mb-2 mx-0"
                                  key={index + 1}
                                >
                                  <a href={item.link} className="">
                                    <span>{item.title}</span>
                                  </a>
                                </li>
                              ))}
                          </ul>
                        </div>
                      ))}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          )
        : ""}
      {sub.part1 && sub.part1 !== "1" && sub.part3 !== "1" && sub.part2 == "1"
        ? isActive && (
            <div className="accordionitem-content col-md-3 p-0 menutype2">
              <div
                className="text-start p-4 submenuplus"
                style={{
                  background: `#e0e9ff`,
                  width: "100%",
                  height: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <ul className="m-0 p-0">
                  {sub.submenuplus &&
                    sub.submenuplus.map((item, index) => (
                      <li
                        className="mb-3 d-block"
                        key={index + 1}
                        style={{ fontSize: "13px" }}
                      >
                        <a href={item.link}>
                          <strong>{item.bigtitle}</strong>
                        </a>
                        <br />
                        <a href={item.link}>
                          <span>{item.title}</span>
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          )
        : ""}
      <style jsx>
        {`
          .sticky.accordionitem-title > a {
            color: #fff !important;
          }
          .w3 {
            background: var(--bs-body-bg);
          }
          .bgtransparent {
            position: fixed;
            width: 100%;
            top: 0px;
            background: transparent;
            left: 0px;
            height: 100%;
            z-index: 50;
          }
          .menutype2 {
            top: 44px !important;
          }
          .sublink:hover {
            color: blue;
          }
          .menutype2 {
            position: absolute;
            z-index: 100;
            min-width: 255px;
            top: 42px;
          }
          .sublink {
            color: #000 !important;
            margin-bottom: 25px;
            display: block;
          }
          .accordionitem-content {
            position: absolute;
            margin: auto;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            text-align: center;
            box-shadow: 0 6px 28px rgb(0 0 0 / 8%);
            background: #fff;
            top: 64px;
            z-index: 100;
          }
          li {
            display: inline-block;
            margin: 0px 15px;
          }
          li a {
            color: #000 !important;
            text-decoration: none;
          }
          .accordionitem-title a {
            color: var(--bs-body-color) !important;
          }
          .absolute.accordionitem-title a {
            color: #fff !important;
          }
          .accordionitem-title .w3 a,
          .absolute .menutype2 a {
            color: var(--bs-body-color) !important;
          }
          div#menu:hover ~ .accordionitem-title a {
            color: #000000 !important;
          }
          .rtl {
            direction: rtl;
          }
          .rtl .text-start {
            text-align: right !important;
          }
        `}
      </style>
    </li>
  );
};
export default Menuitem;
