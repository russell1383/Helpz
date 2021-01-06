import React from 'react';
import { TestimonialsContainer } from './Testimonials.style';
import TestimonialImg1 from "../../assets/images/test.png";

const Testimonials = () => {
    return (
        <>
            <TestimonialsContainer>
                <img src={TestimonialImg1} alt=""/>
           </TestimonialsContainer>
        </>
    );
};

export default Testimonials;