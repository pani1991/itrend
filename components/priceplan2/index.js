import { useState } from "react";

const Plan = ({ getActiveClass, toggleTab, planes }) => {
  return (
    <div className="col-lg-5 d-flex align-items-center planrow px-0">
      {planes.map((item, i) => (
        <a
          className={`tabs btn-light btn ${getActiveClass(
            i + 1,
            "active-tabs"
          )}`}
          onClick={() => toggleTab(i + 1)}
          key={i + 1}
        >
          <span className="mx-1">{item.title}</span>
        </a>
      ))}

      <style jsx>
        {`
          .tabs {
            margin-inline-end: 10px;
            transition: all.4s ease-in-out;
            display: inline-block;
            border: 1px solid transparent;
            border-radius: 6px;
            font-weight: 600;
            text-align: center;
            font-size: 14px;
          }
          .active-tabs {
            background-color: #000;
            border-color: #000;
            color: #21d3a3;
          }
          .content {
            display: none;
          }
          .active-content {
            display: flex;
          }
          .rtl {
            direction: rtl;
            font-family: "fontfa";
          }
        `}
      </style>
    </div>
  );
};

const Priceplan = ({ priceplan, direction }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

  const [isHover, setIsHover1] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHover1(true);
  };
  const handleMouseLeave1 = () => {
    setIsHover1(false);
  };

  const boxStyle1 = {
    backgroundColor: isHover ? "#e5e5e5" : "transparent",
  };

  const [isHover2, setIsHover2] = useState(false);

  const handleMouseEnter2 = () => {
    setIsHover2(true);
  };
  const handleMouseLeave2 = () => {
    setIsHover2(false);
  };

  const boxStyle2 = {
    backgroundColor: isHover2 ? "#e5e5e5" : "transparent",
  };

  const [isHover3, setIsHover3] = useState(false);

  const handleMouseEnter3 = () => {
    setIsHover3(true);
  };
  const handleMouseLeave3 = () => {
    setIsHover3(false);
  };

  const boxStyle3 = {
    backgroundColor: isHover3 ? "#e5e5e5" : "transparent",
  };

  const [isHover4, setIsHover4] = useState(false);

  const handleMouseEnter4 = () => {
    setIsHover4(true);
  };
  const handleMouseLeave4 = () => {
    setIsHover4(false);
  };

  const boxStyle4 = {
    backgroundColor: isHover4 ? "#e5e5e5" : "transparent",
  };

  return (
    <div className="priceplan position-relative py-5">
      <div className="position-relative container my-5">
        <div className="row w-100 mx-auto">
          <div className="col-12">
            <div className="row" style={{ alignItems: "flex-end" }}>
              <div className="col-lg-5 px-0">
                <div>
                  <h2>{priceplan.title}</h2>
                  <p className="">{priceplan.desc}</p>
                </div>
              </div>
              {priceplan.planes.map((item, i) => (
                <div
                  className={`col-lg-7 d-none  px-1 px-lg-2 ${getActiveClass(
                    i + 1,
                    "d-lg-inline"
                  )}`}
                >
                  <div className="row g-1 g-md-2 g-lg-3">
                    <div
                      className="col-lg-3 levels text-center border2 "
                      style={boxStyle1}
                      onMouseEnter={handleMouseEnter1}
                      onMouseLeave={handleMouseLeave1}
                    >
                      Lite
                    </div>
                    <div
                      className="col-lg-3 levels text-center border2"
                      style={boxStyle2}
                      onMouseEnter={handleMouseEnter2}
                      onMouseLeave={handleMouseLeave2}
                    >
                      Standard
                    </div>
                    <div
                      className="col-lg-3 levels text-center border2"
                      style={boxStyle3}
                      onMouseEnter={handleMouseEnter3}
                      onMouseLeave={handleMouseLeave3}
                    >
                      Advanced
                    </div>
                    <div
                      className="col-lg-3 levels text-center border2  bg-gray"
                      style={boxStyle4}
                      onMouseEnter={handleMouseEnter4}
                      onMouseLeave={handleMouseLeave4}
                    >
                      ALPHA
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row border-top2">
              <Plan
                toggleTab={toggleTab}
                getActiveclassName={getActiveClass}
                planes={priceplan.planes}
              />
              <div className="col-lg-7 px-1 px-lg-2">
                <div className="row g-1 g-md-2 g-lg-3">
                  <div
                    className="col-3 pt-3 pt-md-1 pb-5 pb-md-3 text-center"
                    style={boxStyle1}
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                  >
                    <h6 className="d-block d-lg-none mb-0 mt-3">Lite</h6>
                    <div className="monthly-price">
                      <span className="currency">$</span>
                      <span className="number">29</span>
                      <span className="text">/mo</span>
                    </div>
                    <div className="text-center text">Annual price:</div>
                    <div className="text-center text">$348</div>
                  </div>
                  <div
                    className="col-3 pt-3 pt-md-1 pb-5 pb-md-3 text-center"
                    style={boxStyle2}
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                  >
                    <h6 className="d-block d-lg-none mb-0 mt-3">Standard</h6>
                    <div className="monthly-price">
                      <span className="currency">$</span>
                      <span className="number">99</span>
                      <span className="text">/mo</span>
                    </div>
                    <div className="text-center text">Annual price:</div>
                    <div className="text-center text">$1188</div>
                  </div>
                  <div
                    className="col-3 pt-3 pt-md-1 pb-5 pb-md-3 text-center"
                    style={boxStyle3}
                    onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
                  >
                    <h6 className="d-block d-lg-none mb-0 mt-3">Advanced</h6>
                    <div className="monthly-price">
                      <span className="currency">$</span>
                      <span className="number">199</span>
                      <span className="text">/mo</span>
                    </div>
                    <div className="text-center text">Annual price:</div>
                    <div className="text-center text">$2388</div>
                  </div>
                  <div
                    className="col-3 pt-3 pt-md-1 pb-5 pb-md-3 text-center  bg-gray"
                    style={boxStyle4}
                    onMouseEnter={handleMouseEnter4}
                    onMouseLeave={handleMouseLeave4}
                  >
                    <h6 className="d-block d-lg-none mb-0 mt-3">ALPHA</h6>
                    <div className="monthly-price">
                      <span className="currency">$</span>
                      <span className="number">300</span>
                      <span className="text">/mo</span>
                    </div>
                    <div className="text-center text">Annual price:</div>
                    <div className="text-center text">$3600</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row border-top3">
              <div className="col-lg-5 pb-3 pb-lg-0 pt-2">
                <p className="mb-0 mt-1 d-inline">
                  DecenTrader Market Analysis Discord Channel
                </p>
                <div
                  title="توضیحاتتتتتتتتتتتتتتتتتتتتتتتت"
                  className="question d-inline"
                >
                  ?
                </div>
                <a className="learn-more" href="#" target="_blank">
                  Learn more
                </a>
              </div>
              <div className="col-lg-7  px-1 px-lg-2">
                <div className="row g-1 g-md-2 g-lg-3">
                  <div
                    className="col-3 pt-4 pt-lg-2 pb-4 pb-lg-3 text-center"
                    style={boxStyle1}
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
                  </div>
                  <div
                    className="col-3 pt-4 pt-lg-2 pb-4 pb-lg-3 text-center"
                    style={boxStyle2}
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </div>
                  <div
                    className="col-3 pt-4 pt-lg-2 pb-4 pb-lg-3 text-center"
                    style={boxStyle3}
                    onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
                  </div>
                  <div
                    className="col-3 pt-4 pt-lg-2 pb-4 pb-lg-3 text-center bg-gray"
                    style={boxStyle4}
                    onMouseEnter={handleMouseEnter4}
                    onMouseLeave={handleMouseLeave4}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="row border-top3">
              <div className="col-lg-12 py-3 bg-gray">
                <p className="mb-0 mt-1 d-inline ">
                  <strong>DecenTrader Market Analysis Discord Channel</strong>
                </p>
              </div>
            </div>
            <div className="row border-top3">
              <div className="col-lg-5 pb-3 pb-lg-0 pt-2">
                <p className="mb-0 mt-1 d-inline">
                  DecenTrader Market Analysis Discord Channel
                </p>
                <div
                  title="توضیحاتتتتتتتتتتتتتتتتتتتتتتتت"
                  className="question d-inline"
                >
                  ?
                </div>
                <a className="learn-more" href="#" target="_blank">
                  Learn more
                </a>
              </div>
              <div className="col-lg-7  px-1 px-lg-2">
                <div className="row g-1 g-md-2 g-lg-3">
                  <div
                    className="col-3 pt-4 pt-lg-2 pb-4 pb-lg-3 text-center"
                    style={boxStyle1}
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
                  </div>
                  <div
                    className="col-3 pt-4 pt-lg-2 pb-4 pb-lg-3 text-center"
                    style={boxStyle2}
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </div>
                  <div
                    className="col-3 pt-4 pt-lg-2 pb-4 pb-lg-3 text-center"
                    style={boxStyle3}
                    onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
                  </div>
                  <div
                    className="col-3 pt-4 pt-lg-2 pb-4 pb-lg-3 text-center bg-gray"
                    style={boxStyle4}
                    onMouseEnter={handleMouseEnter4}
                    onMouseLeave={handleMouseLeave4}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-5 py-3 py-lg-0 d-none d-lg-inline"></div>
              <div className="col-lg-7  px-1 px-lg-2">
                <div className="row g-1 g-md-2 g-lg-3">
                  <div
                    className="col-3 pt-4 pt-lg-3 pb-4 pb-lg-3 text-center border2-2"
                    style={boxStyle1}
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                  >
                    <a
                      className="tabs btn-light btn active-tabs btn-lg mx-0"
                      href=""
                    >
                      <span className="mx-0">Subscribe</span>
                    </a>
                  </div>
                  <div
                    className="col-3 pt-4 pt-lg-3 pb-4 pb-lg-3 text-center border2-2"
                    style={boxStyle2}
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                  >
                    <a
                      className="tabs btn-light btn active-tabs btn-lg mx-0"
                      href=""
                    >
                      <span className="mx-0">Subscribe</span>
                    </a>
                  </div>
                  <div
                    className="col-3 pt-4 pt-lg-3 pb-4 pb-lg-3 text-center border2-2"
                    style={boxStyle3}
                    onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
                  >
                    <a
                      className="tabs btn-light btn active-tabs btn-lg mx-0"
                      href=""
                    >
                      <span className="mx-0">Subscribe</span>
                    </a>
                  </div>
                  <div
                    className="col-3 pt-4 pt-lg-3 pb-4 pb-lg-3 text-center bg-gray border2-2"
                    style={boxStyle4}
                    onMouseEnter={handleMouseEnter4}
                    onMouseLeave={handleMouseLeave4}
                  >
                    <a
                      className="tabs btn-light btn active-tabs btn-lg mx-0"
                      href=""
                    >
                      <span className="mx-0">Subscribe</span>
                    </a>
                    <a href="#" className="d-block mt-3 text-danger ">
                      <strong>
                        Try it for free
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mx-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width="20px"
                          height="20px"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>{" "}
                        </svg>
                      </strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .text {
            padding-inline-start: calc(var(--bs-gutter-x) * 0.5) !important;
          }
          .learn-more {
            color: #21d3a3 !important;
            margin-inline-start: 5px;
            font-weight: 700;
            font-size: 0.85rem;
          }
          .bg-gray {
            background: rgba(0, 0, 0, 0.1) !important;
            padding-top: 1.2rem;
            padding-bottom: 1.2rem;
          }
          .bi-x path {
            fill: #f7395d;
          }
          .bi-check-lg path {
            fill: #21d3a3;
          }
          .bi {
            width: 26px;
            height: 26px;
          }
          .border-top3 {
            border-bottom: 1.5px solid #e5e5e5;
          }
          .question {
            color: #000;
            cursor: pointer;
            background: #eee;
            border-radius: 100%;
            font-family: sofia-pro, sans-serif !important;
            font-size: 1rem;
            font-weight: 400;
            line-height: 23px;
            display: inline-block !important;
            text-align: center;
            min-width: 24px !important;
            min-height: 24px !important;
            margin-left: 8px;
          }
          .justify-center {
            justify-content: center;
          }
          .d-flex2 {
            display: flex;
            align-items: center;
          }

          .detal {
            padding-left: 20px !important;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .monthly-price {
            line-height: normal;
          }
          .gray1 {
          }
          .text {
            font-size: 1rem;
            font-weight: 600;
          }
          .number {
            font-size: 3rem !important;
            font-weight: 900;
          }
          .currency {
            font-size: 1.2rem;
            font-weight: 700;
            position: relative;
            top: 0;
          }

          @media (max-width: 991px) {
            .planrow {
              padding-block: 30px;
              border-bottom: 2px solid#000 !important;
            }
            .text {
              font-size: 0.7rem;
            }
            .number {
              font-size: 1.6rem !important;
            }
            .currency {
              font-size: 0.9rem;
            }
            .detal {
              font-size: 12px;
              white-space: break-spaces !important;
              -o-text-overflow: ellipsis !important;
              text-overflow: initial !important;
              overflow: visible !important;
            }
          }
          @media (max-width: 400px) {
            .text {
              font-size: 0.5rem;
            }
            .number {
              font-size: 1.3rem !important;
            }
            h6.d-block.d-lg-none {
              font-size: 12px !important;
            }
            .col-lg-7 a.tabs.btn-light {
              font-size: 10px !important;
              padding-inline: 0.7rem !important;
            }
          }
          .border2 {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
          }
          .border2-2 {
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
          }
          .levels {
            padding-block: 30px;
            font-size: 1.4rem;
            font-weight: 700;
          }
          .border-top2 {
            border-top: 2px solid #000 !important;
          }
          .tabs {
            margin-inline-end: 10px;
            transition: all.4s ease-in-out;
            display: inline-block;
            border: 1px solid transparent;
            border-radius: 6px;
            font-weight: 600;
            text-align: center;
            font-size: 14px;
          }
          .active-tabs {
            background-color: #000;
            border-color: #000;
            color: #21d3a3;
          }
          .content {
            display: none;
          }
          .active-content {
            display: flex;
          }
          .rtl {
            direction: rtl;
            font-family: "fontfa";
          }
        `}
      </style>
    </div>
  );
};
export default Priceplan;
