import { useState } from "react";
import { FaTruckMoving, FaUser, FaStoreAlt, FaCartPlus } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

export const HEADER = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="head_container">
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
          <li 
            onClick={() => setOpenMenu(!openMenu)}
          >
                <div className="dropdown">
                <div className="dropdown_label">Products</div>
                <div className={openMenu ? "dropdown_menu_active" : "dropdown_menu"}>
                    <ul className="submenu">
                        {
                            CATEGORIES?.map((category)=> (
                                <li key={category.id}>
                                <Link
                                    to= "/products"
                                    state = {category.slug}
                                >
                                    {category.title}
                                </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                </div>
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

const CATEGORIES = [
  {
    "id": "cl4qxt8zt3u2g0dk84p4oxhkd",
    "slug": "decor-accessories",
    "title": "Decor Accessories"
  },
  {
    "id": "cl4qxwtc43uqi0dk8x4yr49zh",
    "slug": "decor-services-and-frames",
    "title": "Decor Boxes and Frames"
  },
  {
    "id": "cl4qxxdr43usp0dk8vcqqaefh",
    "slug": "coffee-table",
    "title": "Coffee Table"
  },
  {
    "id": "cl4qxxnse3wsy0ek2qg40hd48",
    "slug": "cushions",
    "title": "Cushions"
  },
  {
    "id": "cl4qxxsz33wtt0ek2rdpawlnd",
    "slug": "trees",
    "title": "Trees"
  },
  {
    "id": "cl4qxy0jm3ttd0ciscyev39zn",
    "slug": "mirrors",
    "title": "Mirrors"
  },
  {
    "id": "cl4qxy8iy3wwq0ek2ojqzxg9b",
    "slug": "planters",
    "title": "Planters"
  },
  {
    "id": "cl4qxyggc3tux0cis28ky808o",
    "slug": "baskets",
    "title": "Baskets"
  },
  {
    "id": "cl4qxyncm3y0r0bk0wm0fbkta",
    "slug": "clocks",
    "title": "Clocks"
  },
  {
    "id": "cl4qxyxsn3y2j0bk0q89f4ohd",
    "slug": "orchids",
    "title": "Orchids"
  },
  {
    "id": "cl4qxzcsu3v9r0dk8hqpfss5w",
    "slug": "ottomars",
    "title": "Ottomars"
  },
  {
    "id": "cl4qxzthb3uap0cisfayv8bic",
    "slug": "side-tables",
    "title": "Side tables"
  },
  {
    "id": "cl4qy03o73vi70dk83xf8vjod",
    "slug": "trays",
    "title": "Trays"
  },
  {
    "id": "cl4qy0fns3uhw0cisro6jspr8",
    "slug": "decor-ladders",
    "title": "Decor Ladders"
  },
  {
    "id": "cl4qy0q0e3yk90bk0udp194fb",
    "slug": "wall-art",
    "title": "Wall Art"
  },
  {
    "id": "cl4qy12ci3uks0cisdt6xdbp0",
    "slug": "lighting",
    "title": "Lighting"
  },
  {
    "id": "cl4qy1ep13unb0cishjufp1jo",
    "slug": "lanterns",
    "title": "Lanterns"
  },
  {
    "id": "cl4qy1ooe3yrv0bk0u100y4p1",
    "slug": "candleholders",
    "title": "Candleholders"
  },
  {
    "id": "cl4qy22833vz40dk8yxfc254n",
    "slug": "console-tables/servers",
    "title": "Console Tables/Servers"
  },
  {
    "id": "cl4qy29ff3uvy0cisrpzgu39n",
    "slug": "trolleys/carts",
    "title": "Trolleys/Carts"
  },
  {
    "id": "cl4r07rsb4e3x0dk8xyqon2a8",
    "slug": "bowls",
    "title": "Bowls"
  }
]
