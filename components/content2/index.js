import React, { useState } from "react";
import Image from "next/image";
const Content = ({ direction, content, id, class_name, css }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={
        class_name
          ? class_name + " pt-3 pb-3 " + (direction ? direction : "")
          : "" + " pt-5 mt-5 pb-3 content " + (direction ? direction : "")
      }
      id={id ? id : ""}
    >
      <div className="container mb-5 mt-5">
        <div className="row justify-center g-4">
          <div className="col-lg-6">
            <div className="img-colarge">
              <div className="colarge-1" style={{ position: "reletive" }}>
                <div className="img slide-righ">
                  <Image
                    src={content.img}
                    alt=""
                    quality={70}
                    layout="fill"
                    className=""
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={
                    content.video_mp4 ? "bi bi-play-circle-fill" : "d-none"
                  }
                  viewBox="0 0 16 16"
                  onClick={() => setIsActive(!isActive)}
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                </svg>
                <strong
                  className={content.video_mp4 ? "load" : "d-none"}
                ></strong>
              </div>
              <div className="since-year-outer">
                <div className="since-year">
                  <h2 className={content.part1Title ? "part1" : "d-none"}>
                    {content.part1Title ? content.part1Title : ""}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div style={{ padding: "30px 0px" }}>
              <p className="mb-2 color2 smalltitle">
                {content.tagline ? content.tagline : ""}
                <span className="sep-leaf-right d-inline position-relative"></span>
              </p>
              <h2 className="mb-0 ">{content.title ? content.title : ""}</h2>
            </div>

            <ul className="site-list-style-one">
              {content.list &&
                content.list.map((item, i) => <li key={i + 1}>{item}</li>)}
            </ul>

            <p
              dangerouslySetInnerHTML={{
                __html: content.dsc ? content.dsc : "",
              }}
            />

            <a
              href={content.btn_link ? content.btn_link : ""}
              className={content.btn ? "site-button-secondry " : "d-none"}
            >
              {content.btn ? content.btn : ""}
            </a>
          </div>
        </div>
      </div>
      {isActive && (
        <div className={"modal " + direction}>
          <div className="position-relative" style={{ zIndex: "100" }}>
            <div className="container " onClick={() => setIsActive(!isActive)}>
              <div className="row">
                <div className="col-12 p-sm-0" style={{ textAlign: "end" }}>
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
                      fill="#ffffff"
                      d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <video className="p-3 back" controls>
            <source
              src={content.video_mp4 ? content.video_mp4 : ""}
              type="video/mp4"
            />
            <source
              src={content.video_ogg ? content.video_ogg : ""}
              type="video/ogg"
            />
          </video>
        </div>
      )}
      <style jsx>{`
        .since-year h2.part1 {
          color: #fff;
          font-size: 48px;
          font-weight: 500;
          display: inline-block;
          background-color: var(--color2);
          line-height: 23px;
          padding: 17px 10px 23px 12px;
        }
        .rtl .since-year h2.part1 {
          font-size: 1.85rem !important;
          font-weight: 500 !important;
          line-height: 3rem !important;
          padding: 12px 20px 10px 12px !important;
        }
        .since-year h2.part2 {
          color: var(--color2);
          font-size: 106px;
          font-weight: 500;
          display: inline-block;
          line-height: 0px;
          position: relative;
          bottom: -16px;
          padding-right: 10px;
        }
        .rtl .since-year h2.part1 {
          font-size: 1.85rem;
          font-weight: 500;
          line-height: 4rem;
          padding: 12px 20px 10px 12px;
        }
        .rtl .since-year h2.part2 {
          font-size: 4rem;
          font-weight: 500;
          line-height: 0px;
          padding-right: 0px;
          padding-left: 10px;
        }
        .since-year {
          position: absolute;
          right: 0px;
          top: -30px;
          z-index: 1;
        }
        .rtl .colarge-1:after {
          right: auto;
          left: -30px;
          bottom: 0px;
        }
        .colarge-1:after {
          right: -30px;
          left: auto;
          bottom: 0px;
        }
        .rtl .since-year {
          right: auto;
          left: 10px;
          top: -26px;
          z-index: 1;
          display: flex;
          align-items: center;
        }
        .since-year-outer {
          position: relative;
        }

        .img {
          border-style: none;
          height: auto;
          max-width: 100%;
          vertical-align: middle;
        }
        .colarge-1:before {
          left: -40px;
          top: -40px;
        }
        .rtl .colarge-1:before {
          left: auto;
          right: -40px;
        }
        .colarge-1:before,
        .colarge-1:after {
          position: absolute;
          border: 15px solid var(--color1);
          content: "";
          width: 80%;
          height: 80%;
          z-index: -1;
        }
        .img-colarge {
          position: relative;
          height: 100%;
          margin-bottom: 80px;
        }
        .colarge-1 {
          position: relative;
          margin: 40px 30px 0px 40px;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .text {
          position: absolute;
          bottom: 0px;
          z-index: 10;
        }
        .site-button-secondry {
          color: #fff !important;
          padding: 15px 40px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          display: inline-block;
          background-color: var(--color1);
          border: none;
          border-radius: var(--bs-border-radius);
          font-size: 14px;
          width: fit-content;
          margin-inline-start: auto;
          margin-top: 20px;
        }
        .site-list-style-one li:after {
          position: absolute;
          content: "";
          left: 0px;
          top: 17px;
          width: 20px;
          height: 2px;
          background-color: var(--color1);
        }
        .rtl .site-list-style-one li:after {
          left: auto;
          right: 0px;
        }
        .site-list-style-one li {
          color: var(--color1);
          font-size: 1rem;
          position: relative;
          padding-left: 30px;
          font-weight: 500;
        }
        .rtl .site-list-style-one li {
          padding-right: 30px;
          padding-left: 0px;
        }
        .site-list-style-one {
          list-style: none;
          margin-bottom: 30px;
          padding: 0px;
        }
        p {
          text-align: justify;
        }
        h2 {
          color: var(--color1);
          font-size: 44px;
          font-weight: 700;
        }
        .position-relative {
          position: relative;
        }
        .smalltitle {
          font-size: 14px;
          line-height: 34px;
          color: var(--color2);
        }
        video {
          height: calc(100% - 115px);
          max-width: 100%;
        }
        .modal {
          position: fixed;
          top: 0px;
          left: 0px;
          background: #000000de;
          z-index: 100;
          width: 100%;
          height: 100%;
          align-items: center;
          flex-direction: column;
          justify-content: space-between;
          display: flex;
        }
        .modal div {
          width: 100%;
        }

        svg.bi-play-circle-fill {
          z-index: 10;
          background: #fff;
          border-radius: 50%;
          width: 64px !important;
          height: 64px !important;
          border: 1px solid #fff;
          position: absolute;
          opacity: 0.8;
          transition: all.4s ease;
          cursor: pointer;
          border: 1px solid #000;
        }
        svg.bi-play-circle-fill:hover {
          opacity: 1;
          transform: scale(1.1);
        }

        .d-flex {
          flex-direction: column;
          justify-content: center;
        }
        .img {
          height: 100%;
          width: 100%;
          min-height: 550px;
          position: relative;
          padding: 20px;
          border-radius: var(--bs-border-radius);
        }
        @media (max-width: 768px) {
          .img {
            min-height: 410px !important;
          }
        }
        .img1 {
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .color1 {
          color: var(--color1);
        }
        strong.load {
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 1) 81%,
            rgba(31, 108, 114, 0) 100%
          );
          border-radius: 50%;
          opacity: 0.2;
          z-index: 5;
          animation: dng-hotspot-effect 2s infinite;
          position: absolute;
        }

        @keyframes dng-hotspot-effect {
          from {
            width: 0px;
            height: 0px;
            opacity: 0.8;
          }
          to {
            width: 120px;
            height: 120px;
            opacity: 0;
          }
        }
        .content {
          ${css ? css : ""}
        }
        .rtl {
          direction: rtl;
          font-family: "fontrtl";
        }
      `}</style>
    </div>
  );
};

export default Content;
