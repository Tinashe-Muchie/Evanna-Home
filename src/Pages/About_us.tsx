import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export const ABOUT_US = () => {
  return (
    <section className="about_us_wrapper">
      <h1> About Us </h1>
      <span>
        <strong>Evanna Homeware</strong> is an interior decor supplier which
        opened its doors on the 1st of July 2020 at our showroom in Malbereign
        (Garage turned into shop). Our name, Evana Homeware was derived from our
        founder child's name maintaining that connection to family that makes a
        house a home. We strive to continue giving you unique accessories to
        beautify your home and offices.
      </span>
      <img src="" alt="" />
      <span>
        It has always been a goal for the founder{" "}
        <strong>Angela T. Nyahuruwa</strong> to bring unique, affordable
        interior decor pisces to everyone with a passion of home decor. At
        Evanna Homeware, we offer the following services:
      </span>
      <ul>
        <li>Luxurious homeware accessories</li>
        <li>Interior designing consultancy</li>
        <li>Home/Office Makeovers</li>
        <li>Kitchenware and Bedroomware</li>
      </ul>
      <span>
        Follow us on social media for regular updates, sales and latest news:
      </span>
      <div>
        <span className="socials">
          <NavLink to="/facebook" className="socials_links" end>
            <FaFacebookF />
          </NavLink>
        </span>
        <span className="socials">
          <NavLink
            to={{ pathname: "/https://www.instagram.com/evanna_homeware_/" }}
            target="_blank"
            className="socials_links"
            end
          >
            <FaInstagram />
          </NavLink>
        </span>
        <span className="socials">
          <NavLink to="/tiktok" className="socials_links" end>
            <FaTiktok />
          </NavLink>
        </span>
      </div>
    </section>
  );
};
