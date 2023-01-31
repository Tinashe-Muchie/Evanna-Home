import { FaUser, FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const HEADER = () => {

  return (
    <header className="head_container">
      <div className="head_wrapper">
        <div className="delivery">
          <div>
            <NavLink
              to="/"
              end
              className="delivery_links"
            >
              <span></span>
              <span></span>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/"
              end
              className="delivery_links"
            >
              <span></span>
              <span></span>
            </NavLink>
          </div>
        </div>
        <div className="delivery">
          <div>
            <NavLink
              to="/"
              end
              className="delivery_links"
            >
              <span>
                <FaUser />
              </span>
              <span>Sign In</span>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/cart"
              end
              className="delivery_links"
            >
              <span>
                <FaCartPlus />
              </span>
              <span>Cart</span>
            </NavLink>
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
              PRODUCTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
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
              to="/about_us"
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
              to="/contact"
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
