import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
const News = ({ direction, news, class_name, id, css }) => {
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    className: "center",
    infinite: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1241,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 967,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className={(class_name ? class_name : "") + " cardrow news " + direction}
      id={id ? id : ""}
    >
      <div className="container pt-5 pb-5">
        <div className="row g-5 pt-5 pb-5">
          <Slider {...settings}>
            {news &&
              news.map((item, i) => (
                <div
                  className={"col-lg-4 col-md-6 col-12 c-card " + direction}
                  key={i + 1}
                >
                  <a href={item.link}>
                    <div className="col-12 card position-relative">
                      <div className="c-card-media">
                        <figure className="c-card-image">
                          <div className="c-image-image">
                            <Image
                              src={item.img}
                              alt=""
                              quality={70}
                              layout="fill"
                              className=""
                              objectFit="cover"
                            />
                          </div>
                        </figure>
                      </div>
                      <div className="c-card-content">
                        <h3 className="c-card-title">
                          <span>{item.title}</span>
                        </h3>
                        <div className="c-card-description"></div>
                      </div>
                      <div className="c-card-footer">
                        <div className="c-card-link">
                          <span className="a-btn-text">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              fill="currentColor"
                              className="bi bi-arrow-left-circle"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              fill="currentColor"
                              className="bi bi-arrow-left-circle-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                            </svg>
                            <p
                              className=""
                              dangerouslySetInnerHTML={{
                                __html: item.desc ? item.desc : "",
                              }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
          </Slider>
        </div>
      </div>
      <style jsx>
        {`
          .position-relative {
            position: relative;
          }
          .cardrow {
            background: rgb(0, 0, 0);
          }

          .container,
          .container-fluid {
            width: -webkit-fill-available;
          }
          a {
            text-decoration: none;
          }
          .card {
            min-height: 600px;
            display: flex;
            flex-flow: column nowrap;
            background-color: #e3e5e5;
            justify-content: flex-end;
            border-radius: var(--bs-border-radius) !important;
            border: 0px;
          }
          .c-card:hover {
            cursor: pointer;
          }
          .c-card:hover .c-image {
            transform: scale(1.05);
          }
          .c-card-content {
            color: #f3f4f4;
            margin-top: auto;
            margin-bottom: 0;
            padding-top: 24px;
            position: relative;
            z-index: 2;
            padding: 0px 32px;
          }
          .c-card-title span {
            background-image: linear-gradient(currentColor, currentColor);
            background-position: 0 100%;
            background-repeat: no-repeat;
            background-size: 0 2px;
            transition: background-size 0.3s;
            position: relative;
            font-size: 22px;
            line-height: 1.15;
            color: #fff;
          }
          .c-card-description {
            max-height: 0;
            margin: 0;
            overflow: hidden;
            transition: max-height 0.5s;
          }
          p {
            font-size: 15px;
            line-height: 1.5;
            font-style: normal;
            font-weight: 400;
            letter-spacing: -0.1px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          }
          .c-card:hover p {
            animation: cubic-bezier(0.4, 0, 0.2, 1) 0.5s a;
            transition: max-height 1s cubic-bezier(0.4, 0, 0.2, 1);
          }
          @keyframes an-slide-up {
            0% {
              opacity: 0;
              transform: translate3d(0, 20%, 0);
            }

            100% {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }
          .c-card:hover .c-card-title span {
            background-image: linear-gradient(currentColor, currentColor);
            background-position: 0 100%;
            background-repeat: no-repeat;
            background-size: 0 2px;
            transition: background-size 0.3s;
            position: relative;
            background-size: 100% 2px;
          }
          .c-card:hover .c-card-description {
            max-height: 300px;
            transition: max-height 0.5s;
            transition-delay: 0s;
          }
          .c-card-footer {
            margin-top: 16px;
            padding-left: 32px;
            padding-right: 32px;
            position: relative;
            margin-bottom: 32px;
            z-index: 3;
          }
          .a-btn-text {
            align-items: center;
            position: relative;
            display: flex;
            font-size: 18px;
            line-height: 1.5;
            font-weight: 500;
            color: #fff;
          }
          svg {
            margin-left: 20px;
            width: 35px !important;
            height: 35px !important;
            min-width: 35px !important;
            min-height: 35px !important;
          }
          svg path {
            fill: ;
          }
          .bi-arrow-left-circle-fill {
            display: none;
          }
          .c-card:hover .bi-arrow-left-circle-fill {
            display: block !important;
          }
          .c-card:hover .bi-arrow-left-circle {
            display: none !important;
          }
          .c-card-media:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(0deg, #000 0, transparent);
          }
          .c-card-media {
            position: absolute;
            margin: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            overflow: hidden;
          }
          .c-card-image {
            width: 100%;
            height: 100%;
            overflow: hidden;
            margin: 0px;
          }
          .c-image-image {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: 50%;
            transform: scale(1);
            background-repeat: no-repeat;
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .c-card:hover .c-image-image {
            transform: scale(1.05);
          }
          .c-card {
            padding-right: calc(var(--bs-gutter-x) * 0.3);
            padding-left: calc(var(--bs-gutter-x) * 0.3);
          }
          @media (max-width: 767px) {
            .c-card-description {
              max-height: fit-content;
            }
            .card {
              min-height: 500px !important;
              max-height: 500px !important;
            }
          }

          .news {
            ${css ? css : ""}
          }
          .rtl {
            direction: rtl;
            font-family: "fontrtl";
          }
          .ltr {
            direction: ltr;
          }
          .ltr svg {
            margin-right: 20px !important;
            margin-left: 0px !important;
            transform: rotate(180deg);
          }
        `}
      </style>
    </div>
  );
};

export default News;
