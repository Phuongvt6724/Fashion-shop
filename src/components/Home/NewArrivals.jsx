import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "../ui/Product";
import shopItems from "../../data/Data";

const NewArrivals = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <section className="Discount background NewArrivals">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" />
              <h2>Sản phẩm mới </h2>
            </div>
            <div className="heading-right row ">
              <span>Xem tất cả</span>
              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>
          <Slider {...settings}>
            {shopItems.map((shopItems, index) => {
              return <Product key={index} shopItems={shopItems} />;
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
