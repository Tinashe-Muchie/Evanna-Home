import { useState } from "react";
import { FaQuestion, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const CONTACT_US = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    phone_number: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Angela Nyahuruwa"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "evannahomeware@yahoo.com"
    },
    {
      id: 3,
      name: "phone_number",
      type: "tel",
      placeholder: "+263 77 534 5876"
    }
  ];

  return (
    <section className="contact_us_container">
      <h1>Contact Us</h1>
      <form action="" className="form_wrapper">
        <header className="form_header_wrapper">
          <div>
            <span>Ask A Question</span>
            <span>Please contact us for specific questions</span>
          </div>
          <div>
            <FaQuestion />
          </div>
        </header>
        <main>
          {inputs.map((input) => (
            <input
              key={input.id}
              type={input.type}
              placeholder={input.placeholder}
              value={values[input.name as keyof typeof values]}
            />
          ))}
          <label>
            Message
            <textarea />
          </label>
          <input type="submit" value="Send" />
        </main>
      </form>
      <div className="extra_contacts">
        <p>
          Collections and appointments at our Malbereign (Harare) showroom can
          be scheduled via the following channels:
        </p>
        <span>
          Email Address: <strong>evannahomeware@yahoo.com </strong>{" "}
        </span>
        <span>
          Contact Number: <strong> +263 78 614 1715 </strong>{" "}
        </span>
        <div>
          Social Media:
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
      </div>
    </section>
  );
};
