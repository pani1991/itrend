import React from "react";
import Slider from "react-slick";
import Image from "next/image";
const FullScreenSlide = ({
  direction,
  fullScreenSlide,
  id,
  class_name,
  css,
}) => {
  const settings = {
    customPaging: function (i) {
      return (
        <div
          className={" text-start " + direction}
          title={fullScreenSlide[i].title ? fullScreenSlide[i].title : ""}
        >
          <div className="line2">
            <div></div>
          </div>
          <div className="category-bigtitle">
            {fullScreenSlide[i].title ? fullScreenSlide[i].title : ""}
          </div>
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 9000,
    cssEase: "linear",
    arrows: undefined,
  };
  return (
    <div
      className={
        class_name
          ? class_name
          : "" +
            " fullScreenSlide container-fluid pb-3 position-relative " +
            direction
      }
      id={id ? id : ""}
    >
      <div className="row mb-3">
        <div className="col-12 p-0 position-relative">
          <div className="box box1  position-relative">
            <Slider {...settings}>
              {fullScreenSlide &&
                fullScreenSlide.map(
                  (
                    { tagline, img, title, btn_title, video_mp4, video_ogg },
                    index
                  ) => (
                    <div className="box position-relative" key={index + 1}>
                      <Image
                        src={img ? img : ""}
                        alt=""
                        quality={70}
                        layout="fill"
                        className=""
                        objectFit="cover"
                        style={{
                          display: `${
                            img == null || video_mp4 !== null
                              ? "d-none"
                              : "d-block"
                          }`,
                        }}
                      />
                      <video
                        className="p-0 back"
                        autoPlay
                        loop
                        muted
                        style={{
                          display: `${
                            video_mp4 == null ? "d-none" : "d-block"
                          }`,
                          objectFit: "cover",
                        }}
                      >
                        <source
                          src={video_mp4 ? video_mp4 : ""}
                          type="video/mp4"
                        />
                        <source
                          src={video_ogg ? video_ogg : ""}
                          type="video/ogg"
                        />
                      </video>
                      <div className={"text-white " + direction}>
                        <div className="container">
                          <div
                            className="line"
                            style={{
                              width: "56px",
                              height: "7px",
                              marginBottom: "24px",
                              background: "var(--color1)",
                              display: "block",
                            }}
                          ></div>
                          <h5>{tagline ? tagline : ""}</h5>
                          <h2>{title ? title : ""}</h2>
                          <button className="mt-3">
                            {btn_title ? btn_title : ""}
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                )}
            </Slider>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          video {
            width: 100%;
            height: 100%;
          }
          h5,
          h2 {
            color: #fff;
          }
          button {
            color: #fff;
            background: var(--color1);
            border: 2px solid var(--color1) !important;
            border-radius: 0px;
            padding: 12px 24px;
            width: fit-content;
            line-height: 15px;
            transition: all.4s ease;
          }
          button:hover {
            color: #000;
            background: #dbdbdb;
            border-color: #dbdbdb !important;
            transition: all.4s ease;
          }
          .text-white {
            position: absolute;
            top: 0px;
            height: 100%;
            display: flex;
            flex-direction: column;
            background: linear-gradient(
              270deg,
              rgba(0, 0, 0, 1e-4) 0,
              rgb(0 0 0 / 76%) 70%
            );
            justify-content: center;
            width: 100%;
            padding: 36px;
          }
          .rtl.text-white {
            background: linear-gradient(
              63.75deg,
              rgba(0, 0, 0, 0.0001) 0,
              rgba(0, 0, 0, 0.8) 100%
            );
            text-align: right !important;
            direction: rtl !important;
          }
          .text-w .line {
            background: var(--color1);
            display: block;
            width: 32px;
            height: 4px;
            margin-bottom: 12px;
          }
          .box img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
          .box {
            height: 100vh !important;
            overflow: hidden;
          }
          .box:before {
            content: "";
            position: absolute;
            bottom: 0px;
            width: 100%;
            height: 127px;
            background: hwb(0deg 0% 100% / 10%);
            z-index: 1;
          }
          @media (max-width: 767px) {
            .box {
              height: 100vh !important;
            }
          }
          .fullScreenSlide {
            ${css ? css : ""}
          }
          .rtl {
            direction: rtl;
          }
          .rtl.text-start {
            text-align: right !important;
          }
        `}
      </style>
    </div>
  );
};
export default FullScreenSlide;
