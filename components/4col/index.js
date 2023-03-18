const FourCol = ({ direction, fourcol }) => {
  return (
    <div className={"position-relative py-5 container " + direction}>
      <div className="row pt-5">
        <div className="col-lg-8 col-12 text-center mx-auto">
          <h3>{fourcol.title}</h3>
        </div>
      </div>
      <div className="row g-3 my-5 pb-5">
        {fourcol.items &&
          fourcol.items.map((item, i) => (
            <div className="position-reletive col-md-3 col-sm-6 " key={i + 1}>
              <a className="d-block" href={item.link}>
                <div className="box">
                  <div
                    className="img"
                    style={{
                      background: `url(${item.bg})  center no-repeat`,
                    }}
                  ></div>
                  <div className=" position-absolute">
                    <span
                      className="d-block mb-2 icone"
                      dangerouslySetInnerHTML={{
                        __html: item.icone ? item.icone : "",
                      }}
                    />
                    <h6 className="text-white">{item.title}</h6>
                    <p className="text-white">{item.desc}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
      </div>
      <style jsx>{`
        .icone svg path {
          fill: #fff;
        }
        .box:before,
        .box:after {
          position: absolute;
          bottom: 0;
          top: auto;
          left: 0;
          width: 100%;
          height: 85%;
          display: block;
          z-index: 1;
          content: "";
          background: linear-gradient(
            to bottom,
            rgba(15, 15, 15, 0),
            rgba(15, 15, 15, 0.75) 100%
          );
          transition: opacity 0.65s cubic-bezier(0.05, 0.2, 0.1, 1);
        }
        .box:after {
          opacity: 0;
        }
        .box:hover:after {
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0),
            var(--color4) 100%
          );
          opacity: 1;
          transition: opacity 0.65s cubic-bezier(0.05, 0.2, 0.1, 1);
        }
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .position-absolute .text {
        }
        .position-absolute {
          bottom: 0px;
          height: 100%;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          z-index: 10;
          transition: transform 1s ease, opacity 0.5s ease 0.25s;
          overflow: hidden;
        }
        .box:hover .img {
          transition: transform 1s ease, opacity 0.8s ease 0.25s;
          transform: scale(1.5);
        }
        .img {
          transition: transform 1s ease, opacity 0.5s ease 0.25s;
          transform: scale(1);
          width: 100%;
          height: 100% !important;
          background-size: cover !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          min-height: 350px;
        }
        a {
          width: 100%;
          height: 100%;
        }
        .box {
          transition: transform 1s ease, opacity 0.5s ease 0.25s;
          transform: scale(1);
          -webkit-transform: scale(1);
          min-height: 350px;
          overflow: hidden;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};
export default FourCol;
