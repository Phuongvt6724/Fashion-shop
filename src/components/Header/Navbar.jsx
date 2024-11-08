import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://672768ed270bd0b975523606.mockapi.io/category")
      .then((response) => {
        const groupedCategories = response.data.reduce((acc, item) => {
          if (!acc[item.category_parent_id]) {
            acc[item.category_parent_id] = [];
          }
          acc[item.category_parent_id].push({
            name: item.category_name,
            id: item.category_id,
          });
          return acc;
        }, {});
        setCategories(groupedCategories);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoading(false);
      });
  }, []);

  return (
    <header className="header">
      <div className="container flex justify-between items-center">
        <div className="navlink z-50">
          {loading ? (
            <div>Đang tải...</div>
          ) : (
            <ul
              className={`${
                MobileMenu ? "nav-links-MobileMenu" : "hidden md:flex"
              } flex-col md:flex-row `}
              onClick={() => setMobileMenu(false)}
            >
              <li className="m-0 block min-w-[90px] text-center">
                <Link to="/">Trang chủ</Link>
              </li>
              {Object.keys(categories).map((categoryId) => (
                <li
                  key={categoryId}
                  className="relative group m-0 block min-w-[90px] text-center cursor-pointer"
                >
                  <span className=" min-w-[50px]">
                    {categoryId === "1"
                      ? "Áo"
                      : categoryId === "2"
                      ? "Quần"
                      : categoryId === "3"
                      ? "Phụ kiện"
                      : categoryId === "4"
                      ? "Giày"
                      : "Khác"}
                  </span>
                  <ul className="absolute top-12 left-0 mt-2 overflow-hidden hidden group-hover:block bg-white shadow-lg rounded-lg min-w-[150px]">
                    {categories[categoryId].map((category, index) => (
                      <li key={index} className="m-0">
                        <Link
                          to={`/category/${category.id}`}
                          className="whitespace-nowrap text-left w-full block px-4 hover:bg-gray-200"
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li className="m-0 block min-w-[90px] text-center cursor-pointer">
                <Link to="/contact">Liên hệ</Link>
              </li>
            </ul>
          )}
          <button
            className="toggle md:hidden"
            onClick={() => setMobileMenu(!MobileMenu)}
          >
            {MobileMenu ? (
              <i className="fas fa-times close home-btn"></i>
            ) : (
              <i className="fas fa-bars open"></i>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
