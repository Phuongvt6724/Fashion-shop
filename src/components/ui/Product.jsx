export default function Product({ shopItems = {} }) {
  const { cover, name, price } = shopItems;
  return (
    <div className="box">
      <div className="product mtop">
        <div className="img">
          <img src="../../../public/images/flash/flash-1.png" alt="" />
        </div>
        <div className="product-details">
          <h3>{name}</h3>
          <div className="rate">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="price">
            <h4>${price}.00 </h4>
            <button>
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
