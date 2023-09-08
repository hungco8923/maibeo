import { Link } from "react-router-dom";
import { Input } from "antd";
import anhGa from "../assets/img/4.jpg";

const { Search } = Input;
const onSearch = (value) => console.log(value);

const Navbar = () => {
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
            <ul className="navbar__menu__list">
              <li className="navbar__menu__list__item">
                <Link to="/cun">Cún</Link>
              </li>
              <li className="navbar__menu__list__item">
                <Link to="/mit">Mít</Link>
              </li>
            </ul>
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
