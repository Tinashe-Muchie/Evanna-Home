import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NavLink } from "react-router-dom";

export const HOME = () => {
  return (
    <div className="home_container">
      <div className="interior_service_homepage">
        <div className="interior_service_homepage_header"> Interior Design Service </div>
        <div className="interior_homepage_content">
          <img src="./images/homepage.png" alt="" width={360} height={250} />
          <div className="content">
            <span className="content_heading"> Interior Design Services </span>
            <span> Don't get overwhelmed with the logisitics and hustle of 
              decorating when you can let us handle everything for you! Simply complete our 
              online questionnaire and we'll be in touch.
            </span>
            <span>
              <NavLink to="/services" end className="homepage_link"> Interior Services Questionnaire</NavLink>
            </span>
          </div>
        </div>  
      </div>
      <div className="carousel_wrapper">
        <Carousel autoPlay infiniteLoop>
        <div>
          <img alt="" src="./images/slider_page_1.jpg" />
          <div className="legend">
            <span> What is interior design to us? </span>
            <span>...its really about creating a quality of life, and beauty in that life that nourishes, that makes life beuatiful.</span>
          </div>
        </div>
        <div>
          <img alt="" src="./images/slider_page_2.jpg" />
          <div className="legend">
            <span>Shop All Our Looks!</span>
            <span>We offer a wide range of homeware accessories and furniture!</span>
          </div>
        </div>
        </Carousel>
      </div>
      <div className="testimonials_cover">
        <div className="testimonial_heading"> TESTIMONIALS </div>
        <div className="testimonial_tabs">
          <div className="tab">
            <span>I came across your page on Instagram and was completely smitten. I am constantly checking your page for your latest offering!</span>
            <span>- T. Chimbadzwa </span>
          </div>
          <div className="tab">
            <span>Even better, keep it up! I love that everything matches exactly what I wanted.</span>
            <span>- Alfie Moleneuae</span>
          </div>
          <div className="tab">
            <span>Angie was really hands-on and walked me through every step of decorating, and it was a wonderful experience.</span>
            <span>- C. Charles</span>
          </div>
        </div>
      </div>
    </div>
  )
};
