import Image from "next/image";
const Industry = ({ direction, industry, id }) => {
  return (
    <div className={"container my-5 py-5 " + direction} id={id ? id : ""}>
      <div className="col-lg-11 mx-auto py-5">
        <div className="row gx-3 gy-4">
          {industry.items.map((item, i) => (
            <div className="col-lg-4 col-md-6" key={i + 1}>
              <a href={item.link} style={{ color: `${industry.color}` }}>
                {item.title}
                <span
                  className="icon"
                  dangerouslySetInnerHTML={{
                    __html: industry.icon ? industry.icon : "",
                  }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>
        {`
          a {
            font-weight: 800;
            font-size: 1.1rem;
          }
          .icon {
            margin-inline-start: 5px !important;
          }
          .rtl {
            direction: rtl;
          }
          .rtl .icon {
          }
        `}
      </style>
    </div>
  );
};
export default Industry;
