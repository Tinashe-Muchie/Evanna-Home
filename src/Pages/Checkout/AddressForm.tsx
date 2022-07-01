import { useFormik } from 'formik';
import * as Yup from 'yup';

export const ADDRESSFORM = ({next}:any) => {

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          phone_number: '',
          city: '',
          address_line_2: '',
          state: '',
          zip: '',
          country: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('This is required'),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('This is required'),
            email: Yup.string().email('Invalid email address').required('This is required'),
            phone_number: Yup.number().min(10, 'Must be 10 characters or more').required('This is required'),
          }),
          onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          },
        })

    return (
        <div>
        <form onSubmit={formik.handleSubmit} className="addressform_wrapper">
            <div className='addressform_header'> 
                <span>Shipping Details</span>
                <span>Tell us about your shipping details!</span>
            </div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className='errors'>{formik.errors.firstName}</div>
        ) : null}
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className='errors'>{formik.errors.lastName}</div>
        ) : null}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className='errors'>{formik.errors.email}</div>
        ) : null}
        <label htmlFor="phone_number">Phone Number</label>
        <input
          id="phone_number"
          name="phone_number"
          type="tel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone_number}
        />
        {formik.touched.phone_number && formik.errors.phone_number ? (
          <div className='errors'>{formik.errors.phone_number}</div>
        ) : null}
        <div className="address">
          <span>Full Address</span>
          <div className="address_inputs">
            <div>
              <input
                id="street_address"
                name="street_address"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
              />
              <label htmlFor="street_address">Street Address</label>
            </div>
            <div>
              <input
                id="address_line_2"
                name="address_line_2"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address_line_2}
              />
              <label htmlFor="address_line_2">Address Line 2</label>
            </div>
            <div>
              <input
                id="city"
                name="city"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
              />
              <label htmlFor="city">City</label>
            </div>
          </div>
          <div className="address_inputs">
            <div>
              <input
                id="state"
                name="state"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.state}
              />
              <label htmlFor="state">State/Province</label>
            </div>
            <div>
              <input
                id="zip"
                name="zip"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.zip}
              />
              <label htmlFor="zip">Zip/Postal Code</label>
            </div>
            <div>
              <input
                id="country"
                name="country"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
              />
              <label htmlFor="country">Country</label>
            </div>
          </div>
        </div>
        <button> Next </button>
        </form>
        </div>
    );
}