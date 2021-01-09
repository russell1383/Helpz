import React from "react";
import { TestimonialsContainer } from "./Testimonials.style";
import TestimonialImg1 from "../../assets/images/test.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Testimonials.style";

const Testimonials = () => {
  return (
    <>
      <TestimonialsContainer id="footer">
        <Carousel
          infiniteLoop
          showThumbs={false}
          swipeable
          showStatus={false}
          autoPlay
          showArrows={true}
        >
          <div>
            <img src={TestimonialImg1} alt="" />
          </div>
          <div>
            <img src={TestimonialImg1} alt="" />
          </div>
          <div>
            <img src={TestimonialImg1} alt="" />
          </div>
        </Carousel>
      </TestimonialsContainer>
    </>
  );
};

export default Testimonials;
