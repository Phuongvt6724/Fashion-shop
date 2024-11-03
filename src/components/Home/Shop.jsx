import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "../ui/Product";
import shopItems from "../../data/Data";
import hot from "../../../public/images/promotional.png";

const Shop = () => {
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
              <img src={hot} />
              <h2>Sản phẩm nổi bật</h2>
            </div>
            <div className="heading-right row ">
              <span>View all</span>
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

export default Shop;
