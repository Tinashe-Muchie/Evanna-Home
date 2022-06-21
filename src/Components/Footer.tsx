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
            <NavLink to="/facebook" className="footer_socials" end>
              <FaFacebookF />
            </NavLink>
          </span>
          <span>
            <NavLink to="/instagram" className="footer_socials" end>
              <FaInstagram />
            </NavLink>
          </span>
          <span>
            <NavLink to="/tiktok" className="footer_socials" end>
              <FaTiktok />
            </NavLink>
          </span>
        </div>
        <span>&copy; Evanna Homeware, {current_year}. </span>
      </section>
    </footer>
  );
};
