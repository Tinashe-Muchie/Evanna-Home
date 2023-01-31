import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

import { NavLink } from "react-router-dom";

export const FOOTER = () => {
  const date = new Date();
  const current_year = date.getFullYear();

  return (
    <footer className="footer_wrapper">
      <section>
        <div className="quick_links">
          <span> Quick Links </span>
          <span>
            <NavLink to="/contact" className="footer_nav" end>
              Contact Us
            </NavLink>
          </span>
          <span>
            <NavLink to="/terms_of_service" className="footer_nav" end>
              Terms of service
            </NavLink>
          </span>
          <span>
            <NavLink to="/refund_policy" className="footer_nav" end>
              Refund Policy
            </NavLink>
          </span>
        </div>
        <div className="weekly_interior_content">
          <span>Weekly Interior Content</span>
          <span>
            Look out for our styling posts on our social media platforms i.e
            facebook, instagram and tiktok.
          </span>
        </div>
        <div className="deliveries">
          Deliveries take 3 working days for Zimbabwe deliveries. Collections
          should be communicated at least two days prior.
        </div>
      </section>
      <section>
        <div>
          <span>
            <a href="https://www.facebook.com/EvannaHomeware" className="footer_socials" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/evanna_homeware_/" className="footer_socials" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </span>
          <span>
            <a href="https://www.tiktok .com/EvannaHomeware" className="footer_socials" target="_blank" rel="noreferrer">
              <FaTiktok />
            </a>
          </span>
        </div>
        <span>&copy; Evanna Homeware, {current_year}. </span>
      </section>
    </footer>
  );
};
