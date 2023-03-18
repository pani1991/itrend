import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./SimpleSlider";
const Categories = ({ direction, category, id, class_name, css }) => {
  return (
    <div
      className={
        (class_name ? class_name : "") +
        " container category py-5 mb-5 " +
        direction
      }
      id={id ? id : ""}
    >
      <div className="row text-center my-5">
        <div className="col-12">
          <h2 className="mb-4">{category.title ? category.title : ""}</h2>
        </div>
        <div className="col-md-9 mx-auto mt-2">
          <p>{category.dsc ? category.dsc : ""}</p>
        </div>
        <div className="col-md-10 mx-auto">
          <SimpleSlider category={category} />
        </div>
      </div>

      <style jsx>
        {`
          .row h2 {
            font-size: 22px;
            font-weight: 700;
          }
          @media only screen and (min-width: 768px) {
            .row h2 {
              font-size: 39px;
            }
          }
          .category {
            ${css ? css : ""}
          }
          .rtl {
            direction: rtl;
            font-family: "fontrtl";
          }
        `}
      </style>
    </div>
  );
};
export default Categories;
