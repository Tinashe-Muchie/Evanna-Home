import { useState } from "react";
import { FaTruckMoving, FaUser, FaStoreAlt, FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { SIGN_IN } from "../Pages/index";

export const HEADER = () => {
  const [showLoginPage, setshowLoginPage] = useState(false);

  const showLogin: () => JSX.Element | null = () => {
    if (showLoginPage) {
      return null;
    }

    return <SIGN_IN />;
  };

  return (
    <header className="head_container">
      <div>{showLoginPage}</div>
      <div className="head_wrapper">
        <div className="delivery">
          <div>
            <span>
              <FaStoreAlt />
            </span>
            <span>Click & Collect</span>
          </div>
          <div>
            <span>
              <FaTruckMoving />
            </span>
            <span>Home Delivery</span>
          </div>
        </div>
        <div className="delivery">
          <div>
            <span>
              <FaUser />
            </span>
            <span>Sign In</span>
          </div>
          <div>
            <span>
              <FaCartPlus />
            </span>
            <span>Cart</span>
          </div>
        </div>
      </div>
      <div className="image_wrapper">
        <img src="/images/logo-01.png" alt="evanna homeware logo" />
      </div>
      <nav className="category_container">
        <ul className="category_wrapper">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "main_nav_active" : "main_nav"
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "main_nav_active" : "main_nav"
              }
              end
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="services"
              className={({ isActive }) =>
                isActive ? "main_nav_active" : "main_nav"
              }
              end
            >
              Interior Decor Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about_us"
              className={({ isActive }) =>
                isActive ? "main_nav_active" : "main_nav"
              }
              end
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? "main_nav_active" : "main_nav"
              }
              end
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
