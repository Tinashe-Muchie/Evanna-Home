import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const INTERIOR_DECOR = () => {
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
      country: '',
      user: '',
      design_style: [],
      style: '',
      priority: '',
      extra_question: '',
      yes_no_state: '',
      room_checkbox: [],
      project_size: [],
      furniture_purchase: '',
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
      user: Yup.string().min(5, 'Must be 5 characters or more').required('This is required'),
      style: Yup.string().min(5, 'Must be 5 characters or more').required('This is required'),
      priority: Yup.string().min(5, 'Must be 5 characters or more').required('This is required'),
    }),
    onSubmit: values => {
      console.log(values);
      alert('Your form has been submitted');
    },
  })

  return (
    <div className="interior_decor_container">
      <h1>INTERIOR DECOR SERVICES</h1>
      <form onSubmit={formik.handleSubmit} className="questionaire_wrapper">
        <div className='questionnaire_header'> Interior Service Questionnaire</div>
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
        <label htmlFor='user'>Whom will be using the space?*</label>
        <textarea
              id="user"
              name="user"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user}
            />
            {formik.touched.user && formik.errors.user ? (
              <div className='errors'>{formik.errors.user}</div>
            ) : null}
        <div className='checkbox_group'>
          <span> Design Style </span>
          <div className='checkbox_items'>
            <label>
              <input 
              type="checkbox" 
              name="design_style" 
              value='Bohemia'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} />
              Bohemia
            </label>
            <label>
              <input 
              type="checkbox" 
              name="design_style" 
              value='Morden Traditional'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} />
              Morden Traditional
            </label>
            <label>
              <input 
              type="checkbox" 
              name="design_style" 
              value='Contemporary' 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
              Contemporary
            </label>
            <label>
              <input 
              type="checkbox" 
              name="design_style" 
              value='Minimal'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
              Minimal
            </label>
            <label>
              <input 
              type="checkbox" 
              name="design_style" 
              value='Farmhouse'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
              Farmouse
            </label>
            <label>
              <input 
              type="checkbox" 
              name="design_style" 
              value='Industrial'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
              Industrial
            </label>
            <label>
              <input 
              type="checkbox" 
              name="design_style" 
              value='Coastal'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
              Coastal
            </label>
            <label>
              <input 
              type="checkbox" 
              name="design_style" 
              value='Hollywood Glamour' 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
              Hollywood Glamour
            </label>
          </div>
        </div>
        <label htmlFor='style'>What do you like about this style?*</label>
          <textarea
              id="style"
              name="style"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.style}
            />
            {formik.touched.style && formik.errors.style ? (
              <div className='errors'>{formik.errors.style}</div>
            ) : null}
         <div className='checkbox_group'>
          <span>Will you be purchasing furniture? </span>
          <div className='checkbox_items'>
            <label>
              <input 
                type="radio" 
                name="furniture_purchase" 
                value="Yes"
                onChange={formik.handleChange} />
              Yes
            </label>
            <label>
              <input 
                type="radio" 
                name="furniture_purchase" 
                value="No"
                onChange={formik.handleChange} />
              No
            </label>
            <label>
              <input 
                type="radio" 
                name="furniture_purchase" 
                value="Not sure" 
                onChange={formik.handleChange}/>
              Not sure
            </label>
          </div>
        </div>
        <label htmlFor='style'>Is there a <strong>MUST HAVE</strong> or <strong>PRIORITY</strong> for this space?*</label>
          <textarea
              id="priority"
              name="priority"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.priority}
            />
            {formik.touched.priority && formik.errors.priority ? (
              <div className='errors'>{formik.errors.priority}</div>
            ) : null}
        <div className='checkbox_group'>
          <span>Project Size? </span>
          <div className='checkbox_items'>
            <label>
              <input 
                type="checkbox" 
                name="project_size" 
                value="One room"
                onChange={formik.handleChange} />
              One room
            </label>
            <label>
              <input 
                type="checkbox" 
                name="project_size" 
                value="Two rooms"
                onChange={formik.handleChange} />
              Two rooms
            </label>
            <label>
              <input 
                type="checkbox" 
                name="project_size" 
                value="Three or more rooms"
                onChange={formik.handleChange} />
              Three or more rooms
            </label>
          </div>
          <span>Which rooms require styling?</span>
          <div className='checkbox_items'>
            <label>
              <input 
                type="checkbox" 
                name="room_checkbox" 
                value="Kitchen"
                onChange={formik.handleChange} />
              Kitchen
            </label>
            <label>
              <input 
                type="checkbox" 
                name="room_checkbox" 
                value="Dining Room"
                onChange={formik.handleChange} />
              Dining room
            </label>
            <label>
              <input 
                type="checkbox" 
                name="room_checkbox" 
                value="Bedroom"
                onChange={formik.handleChange} />
              Bedroom
            </label>
            <label>
              <input 
                type="checkbox" 
                name="room_checkbox" 
                value="office"
                onChange={formik.handleChange} />
              Office
            </label>
            <label>
              <input 
                type="checkbox" 
                name="room_checkbox" 
                value="nursery"
                onChange={formik.handleChange} />
              Nursery
            </label>
            <label>
              <input 
                type="checkbox" 
                name="room_checkbox" 
                value="other"
                onChange={formik.handleChange} />
              Other
            </label>
          </div>
        </div>
        <div className='radio'>
          <span>Do you plan to build or renovate the physical structure? </span>
          <div className='radio_items'>
            <label>
              <input 
                type="radio" 
                name="yes_no_state" 
                value="yes"
                onChange={formik.handleChange}  />
              Yes
            </label>
            <label>
              <input 
                type="radio" 
                name="yes_no_state" 
                value="no"
                onChange={formik.handleChange}  
              />
              No
            </label>
          </div>
        </div>
        <label htmlFor='style'>Is there anything else you would like us to know about this project? Due date or budget</label>
          <textarea
              id="extra_question"
              name="extra_question"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.extra_question}
            />

        <input type="submit" value='Submit' /> 
      </form>
    </div>
  );
};
