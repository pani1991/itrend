import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "../categories/SimpleSlider";
const Categories = ({ direction, category, id, class_name, css }) => {
  return (
    <div
      className={
        (class_name ? class_name : "") +
        " container category py-5 my-5 " +
        direction
      }
      id={id ? id : ""}
    >
      <div className="row text-center mb-5">
        <h2 className="mb-4">{category.title ? category.title : ""}</h2>
      </div>
      <SimpleSlider category={category} />
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
          }
        `}
      </style>
    </div>
  );
};
export default Categories;
