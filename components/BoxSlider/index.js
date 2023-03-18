import React from "react";
import Slider from "react-slick";
import Image from "next/image";
const BoxSlider = ({ direction, boxSlider, id, class_name, css }) => {
  const settings = {
    customPaging: function (i) {
      return (
        <div className={"text-start " + direction}>
          <div className="category-smalltitle">{boxSlider[i].smalltitle}</div>
          <div className="category-bigtitle">{boxSlider[i].title}</div>
          <div className="line2">
            <div></div>
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
        (class_name ? class_name : "") +
        " boxSlider container pb-3 position-relative " +
        direction
      }
      id={id ? id : ""}
    >
      <div className="row mb-3">
        <div className="col-12 p-0 position-relative">
          <div className="box box1">
            <Slider {...settings}>
              {boxSlider.map(({ smalltitle, img, title }, index) => (
                <div className="box position-relative" key={index + 1}>
                  <Image
                    src={img}
                    alt=""
                    quality={70}
                    layout="fill"
                    className=""
                    style={{ objectFit: "cover" }}
                  />
                  <div className="text-white">
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
                    <h5>{smalltitle}</h5>
                    <h2>{title}</h2>
                    <button className="mt-3">more ...</button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          button {
            color: #fff;
            background: transparent;
            border: 2px solid #dbdbdb !important;
            border-radius: 24px;
            padding: 12px 24px;
            width: fit-content;
            line-height: 15px;
          }
          button:hover {
            color: #000;
            background: #dbdbdb;
          }
          .text-white {
            position: absolute;
            top: 0px;
            height: 100%;
            display: flex;
            flex-direction: column;
            background: linear-gradient(
              63.75deg,
              rgba(0, 0, 0, 0.8) 0,
              rgba(0, 0, 0, 0.0001) 100%
            );
            justify-content: center;
            width: 100%;
            padding: 36px;
            color: #fff !important;
          }
          .text-white h2,
          .text-white h5 {
            color: #fff !important;
          }
          .rtl .text-white {
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
            height: calc(100vh - 175px) !important;
            max-height: 470px;
            overflow: hidden;
          }
          .boxSlider {
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
export default BoxSlider;
