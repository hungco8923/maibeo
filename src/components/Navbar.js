import { Link } from "react-router-dom";
import { Input } from "antd";
import anhGa from "../assets/img/4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const { Search } = Input;
const onSearch = (value) => console.log(value);

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <div className="navbarWrapper">
        <div className="navbar container">
          <div className="navbar__logo">
            <Link to="">
              <img src={anhGa} alt="logo" height="60px" />
            </Link>
          </div>
          <div className="navbar__menu">
            <div className="navbar__menu-icon" onClick={handleShowNavbar}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={`nav-elements  ${showNavbar && "active"}`}>
              <ul className="navbar__menu__list">
                <li className="navbar__menu__list__item">
                  <Link to="/cun" onClick={handleShowNavbar}>
                    Cún
                  </Link>
                </li>
                <li className="navbar__menu__list__item">
                  <Link to="/mit" onClick={handleShowNavbar}>
                    Mít
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar__ultilities">
            {/* <Search placeholder="Tìm Kiếm" onSearch={onSearch} enterButton /> */}
          </div>
        </div>
        <div className="dropdown"></div>
      </div>
    </>
  );
};

export default Navbar;
