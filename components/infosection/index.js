const InfoSection = ({
  direction,
  infoSection,
  class_name,
  id,
  css,
  config,
  height,
}) => {
  return (
    <div
      className={
        "infosection position-relative " + direction + " " + class_name
      }
      id={id ? id : ""}
    >
      <div className={config && config.width ? config.width : "container"}>
        <div className="row title mb-4 ">
          <h5 className="subtitle">{infoSection.smallTitle}</h5>
          <h2
            className="bigtitle"
            style={{ direction: "initial" }}
            dangerouslySetInnerHTML={{
              __html:
                infoSection && infoSection.bigTitle ? infoSection.bigTitle : "",
            }}
          />
        </div>
        <div
          className={
            "row " +
            (config && config.gx ? "gx-" + config.gx : "5") +
            " " +
            (config && config.gy ? "gy-" + config.gy : "3")
          }
        >
          {infoSection &&
            infoSection.colElemanItem.map(({ title, img, dec }, index) => (
              <div
                key={index + 1}
                className={
                  "box " +
                  (config && config.numberColLg
                    ? "col-lg-" + 12 / config.numberColLg
                    : "col-lg-4") +
                  " " +
                  (config && config.numberColMd
                    ? "col-md-" + 12 / config.numberColMd
                    : "col-md-6") +
                  " " +
                  (config && config.numberColSm
                    ? "col-sm-" + 12 / config.numberColSm
                    : "col-sm-6")
                }
              >
                <div
                  className={
                    config && config.colType ? config.colType : "text-center"
                  }
                >
                  <img
                    src={img ? img : ""}
                    width={config && config.imgSize ? config.imgSize : "33%"}
                  />

                  <div>
                    <h4 className="bigtitle elemanitem">
                      {title ? title : ""}
                    </h4>
                    <p
                      className="mb-4 desc"
                      style={{ direction: "initial" }}
                      dangerouslySetInnerHTML={{
                        __html: dec ? dec : "",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <style jsx>
        {`
          .vertical div {
            margin-inline-start: 10px;
          }
          .vertical {
            display: flex;
            align-items: center;
          }
          .horizontal {
          }
          img {
            max-width:70px;
          }
          img {
            height: ${height ? height : "-webkit-fill-available"};
          }
          .elemanitem {
            margin:35px 0px 20px;
          }
          .title {
            text-align: ${
              config && config.titleTextAlign ? config.titleTextAlign : "center"
            };
          }
          h2 {
            margin-bottom: 90px;
            color: var(--bs-dark-text) !important;
          }
          
          h5 {
            font-size: 14px;
            margin-bottom: 5px;
            margin-top: 0px;
            font-weight: 700;
          }
          h5 {
            color: var(--bs-body-color) !important;
          }
          .infosection {
            padding: 100px 0px;
          }
          .${css ? css : ""} {
          .rtl {
            direction: rtl;
            font-family: "fontfa";
          }
        `}
      </style>
    </div>
  );
};
export default InfoSection;
