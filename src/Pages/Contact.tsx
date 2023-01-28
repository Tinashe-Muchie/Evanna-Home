import { useFormik } from "formik";
import * as Yup  from 'yup';
import { FaQuestion, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export const CONTACT_US = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phone_number: "",
      message: ""
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('This is required'),
      email: Yup.string().email('Invalid email address').required('This is required'),
      phone_number: Yup.number().min(10, 'Must be 10 characters or more').required('This is required')
    }),
    onSubmit: values => {
      console.log(values);
      alert('Your form has been submitted')
  }})

  return (
    <section className="contact_us_container">
      <h1>Contact Us</h1>
      <form onSubmit={formik.handleSubmit} className="form_wrapper">
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
          <input
            type="text"
            name="fullname"
            placeholder="Angela Nyahuruwa"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullname}
          />
          {formik.touched.fullname && formik.errors.fullname ? (
          <div className="errors">{formik.errors.fullname}</div>
          ) : null}
          <input
            type="email"
            name="email"
            placeholder="evannahomeware@yahoo.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
          <div className="errors">{formik.errors.email}</div>
          ) : null}
          <input
            type="tel"
            name="phone_number"
            placeholder="+263 77 534 5876"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone_number}
          />
          {formik.touched.phone_number && formik.errors.phone_number ? (
          <div className="errors">{formik.errors.phone_number}</div>
        ) : null}
          <label>
            Message
            <textarea 
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}/>
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
          <a href="facebook" className="socials_links" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
        </span>
        <span className="socials">
          <a
            href="https://www.instagram.com/evanna_homeware_/"
            rel="noreferrer"
            target="_blank"
            className="socials_links"
          >
            <FaInstagram />
          </a>
        </span>
        <span className="socials">
          <a href="tiktok" className="socials_links" target="_blank" rel="noreferrer">
            <FaTiktok />
          </a>
        </span>
        </div>
      </div>
    </section>
  );
};
