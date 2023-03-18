import Image from "next/image";
const Feature = ({ direction, feature, color }) => {
  return (
    <div
      className={"position-relative " + direction + " " + feature.class}
      id={feature.id}
    >
      <div className={feature.width}>
        <div className="row title mb-4">
          <h5 className="subtitle">{feature.smalltitle}</h5>
          <h2
            className="bigtitle"
            style={{ direction: "initial" }}
            dangerouslySetInnerHTML={{
              __html: feature && feature.bigtitle ? feature.bigtitle : "",
            }}
          />
        </div>
        <div
          className={
            "row " +
            (feature.gx ? "gx-" + feature.gx : "") +
            " " +
            (feature.gy ? "gy-" + feature.gy : "")
          }
          style={{ justifyContent: "center" }}
        >
          {feature.coleleman &&
            feature.coleleman.colelemanitem.map(
              ({ title, img, dec }, index) => (
                <div
                  key={index + 1}
                  className={
                    "box " +
                    (feature.numberColLg
                      ? "col-lg-" + 12 / feature.numberColLg
                      : "col-lg-4") +
                    " " +
                    (feature.numberColmd
                      ? "col-md-" + 12 / feature.numberColmd
                      : "col-md-6") +
                    " " +
                    (feature.numberColsm
                      ? "col-sm-" + 12 / feature.numberColsm
                      : "col-sm-6")
                  }
                >
                  <div className={feature.coltype}>
                    <Image
                      src={img}
                      alt=""
                      width={40}
                      height={40}
                      quality={70}
                      layout="fixed"
                    />
                    <div>
                      <h6 className="bigtitle elemanitem mt-3">{title}</h6>
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
              )
            )}
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
            ${feature.coleleman.imgcss}
          }
          img {
            height: ${feature.coleleman.height
              ? feature.coleleman.height
              : "-webkit-fill-available"};
          }
          .elemanitem {
            ${feature.coleleman.titlecss}
          }
          .title {
            text-align: ${feature.titleTextAlign};
          }
          h2 {
            margin-bottom: 90px;
            ${feature.bigtitlecss}
          }
          h5 {
            ${feature.smalltitlecss}
          }
          h5 {
            color: ${color.color1} !important;
          }
          .${feature.class} {
            padding: 50px 0px;
            padding: ${feature.padding};
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
export default Feature;
