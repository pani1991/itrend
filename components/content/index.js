import Image from "next/image";
const Content = ({ direction, content, title, id, class_name, css }) => {
  return (
    <div
      className={
        (class_name ? class_name : "") +
        " content container my-5 py-5 " +
        direction
      }
      id={id ? id : ""}
    >
      <div className="row">
        <div className="col-lg-6">
          <div className="text-center imgbox h-100 mx-auto mx-lg-0 position-relative">
            <div className="position-relative img h-100">
              <Image
                src={content.back_img}
                alt={title}
                quality={70}
                layout="fill"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="imgtop img h-100">
              <Image
                src={content.front_img}
                alt={title}
                quality={70}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-lg-5 ltr">
          <div>
            <span className="icon">
              <Image
                src={content.svg_icone}
                alt={title}
                quality={70}
                width="30"
                height="30"
                layout="fixed"
                objectFit="cover"
              />
            </span>
          </div>
          <h2 className="my-3" dir="ltr">
            {" "}
            {content.title}
          </h2>
          <br />
          <p
            className="mb-4 desc"
            style={{ direction: "ltr" }}
            dangerouslySetInnerHTML={{
              __html: content.desc ? content.desc : "",
            }}
          />
        </div>
      </div>
      <style jsx>
        {`
          .img {
            width: 100%;
            min-height: 250px;
            max-height: 490px;
          }
          @media (max-width: 676px) {
            .imgbox .img {
              width: 70%;
            }
            .imgtop {
              position: absolute;
              top: 16%;
              left: 23%;
            }
            .rtl .imgtop {
              left: 0px;
              right: 23%;
            }
          }
          .imgtop {
            position: absolute;
            top: 16%;
            left: 21%;
          }
          .rtl .imgtop {
            left: 0px;
            right: 21%;
          }
          img {
            border-radius: 5px;
            width: 100%;
            box-shadow: 0 60px 135px rgb(0 0 0 / 14%),
              0 15px 65px rgb(0 0 0 / 14%);
          }
          .imgbox {
            max-width: 360px;
            padding-bottom: 20%;
          }
          p {
            max-width: 550px;
            display: inline-block;
            margin-bottom: 1.5em;
            font-size: 18px;
          }
          .icon {
            padding: 15px;
            height: 62px;
            width: 62px;
            background: var(--color1);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            margininlinestart: "auto";
          }
          .content {
            ${css ? css : ""}
          }
          .rtl {
            direction: rtl;
          }
          .rtl .ltr .icon {
            margin-inline-start: auto !important;
          }
        `}
      </style>
    </div>
  );
};
export default Content;
