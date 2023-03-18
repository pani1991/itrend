import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg
      style={{ ...style, height: "85px" }}
      className={className}
      onClick={onClick}
      width="554pt"
      height="982pt"
      viewBox="0 0 554 982"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="#ffffffff"></g>
      <g id="#000000ff">
        <path
          fill="#000000"
          opacity="1.00"
          d=" M 16.62 13.63 C 27.17 4.02 42.02 -0.48 56.13 1.38 C 67.11 2.69 77.50 7.89 85.28 15.74 C 234.75 161.26 384.22 306.78 533.68 452.31 C 540.23 458.33 546.49 465.06 549.71 473.52 C 556.93 490.74 552.25 511.86 538.73 524.66 C 387.61 671.89 236.43 819.05 85.29 966.24 C 75.37 976.34 61.06 981.83 46.94 980.92 C 30.76 980.14 15.23 970.84 7.17 956.75 C -1.29 942.48 -1.12 923.64 7.59 909.53 C 11.30 903.13 16.95 898.26 22.16 893.14 C 159.78 759.08 297.41 625.04 435.03 490.98 C 295.18 354.83 155.39 218.62 15.58 82.44 C 6.53 73.80 0.92 61.54 0.94 48.97 C 0.65 35.63 6.68 22.45 16.62 13.63 Z"
        />
      </g>
    </svg>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg
      style={{ ...style, height: "85px" }}
      className={className}
      onClick={onClick}
      width="554pt"
      height="982pt"
      viewBox="0 0 554 982"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="#ffffffff"></g>
      <g id="#000000ff">
        <path
          fill="#000000"
          opacity="1.00"
          d=" M 478.22 8.23 C 490.83 0.47 506.99 -1.17 520.92 3.86 C 535.69 8.94 547.70 21.59 551.59 36.77 C 554.89 49.18 552.69 62.91 545.66 73.66 C 542.11 79.32 537.04 83.75 532.32 88.39 C 394.55 222.60 256.74 356.78 119.00 491.01 C 258.81 627.19 398.63 763.37 538.43 899.56 C 545.79 906.62 550.94 916.03 552.50 926.14 C 554.70 939.23 550.81 953.14 542.27 963.28 C 532.80 974.82 517.81 981.47 502.91 980.98 C 490.17 980.76 477.71 975.34 468.76 966.29 C 322.32 823.70 175.89 681.10 29.47 538.51 C 24.15 533.25 18.66 528.17 13.48 522.78 C 3.66 512.35 -0.94 497.26 1.57 483.14 C 3.22 473.08 8.42 463.77 15.76 456.75 C 166.07 310.39 316.40 164.05 466.71 17.70 C 470.23 14.19 473.93 10.80 478.22 8.23 Z"
        />
      </g>
    </svg>
  );
}

const SimpleSlider = ({ category }) => {
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    className: "center",
    infinite: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1241,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    swipeToSlide: true,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="position-relative category">
      <Slider {...settings}>
        {category.item.map(({ link, img, title }, index) => (
          <a
            href={link}
            className="d-inline-block text-center py-4"
            key={index + 1}
          >
            <div className="position-relative d-block m-auto">
              <Image
                src={img}
                alt=""
                width={100}
                height={100}
                quality={70}
                layout="fixed"
                className=""
                style={{ objectFit: "cover", margin: "auto" }}
              />
            </div>
            <div className="">{title}</div>
          </a>
        ))}
      </Slider>
    </div>
  );
};
export default SimpleSlider;
