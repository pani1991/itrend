import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Demo = ({ direction, demo, class_name, id, config, css }) => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className={
        "demo py-5 position-relative " +
        direction +
        " " +
        (class_name ? class_name : "")
      }
      id={id ? id : ""}
    >
      <div>
        <div className="row">
          <div className="col-12">
            <h2 className="bigtitle">{demo.bigtitle ? demo.bigtitle : ""}</h2>
          </div>
        </div>
      </div>
      <div
        className={config && config.width ? config.width : "container-fluid"}
      >
        <div
          className={
            "row " + config && config.demoType == "multiPlayer" ? "" : "d-none"
          }
        >
          <div
            className="multiplayer"
            style={{
              height: `${
                config && config.multiPlayerHeight
                  ? config.multiPlayerHeight
                  : "700px"
              }`,
              background: `url(${
                demo && demo.multiPlayerItem ? demo.multiPlayerItem : ""
              })  0% 0% / auto 100% repeat-x`,
            }}
          ></div>
        </div>

        <div
          className={
            "col " + demo.multiPlayer &&
            config &&
            config.demoType == "multiPlayer"
              ? "d-none"
              : ""
          }
        >
          <Slider {...settings}>
            {demo.item &&
              demo.item.map(({ title, img, link }, index) => (
                <div className="" key={index + 1}>
                  <div className="mx-auto col-11">
                    {title}
                    <img src={img} />
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
      <style jsx>
        {`
          img {
            width: 100%;
            height: auto;
          }
          .multiplayer {
            animation: bg-scroll
              ${config && config.speed ? config.speed : "200"}s linear infinite;
          }
          @keyframes bg-scroll {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: -3746px 0;
            }
          }
          h2 {
            margin-bottom: 90px;
            margin-bottom: 50px;
            color: #fff;
          }
          .demo {
            background: var(--color1);
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
export default Demo;
