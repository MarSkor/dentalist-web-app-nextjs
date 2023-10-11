"use client";
import React from "react";
import { Container } from "../layout"
import { SectionWTextOnly } from "../common/SectionWRow"
import { TESTIMONIALS } from "@/utils/data"
import Image from "next/image";

const TestimonialCard = (props) => {
  const totalStars = 5;
  const activeStars = props.rating;

  return(
    <div className="testimonial">
      <div className="testimonial__wrapper">
        <div className="testimonial__wrapper--image-wrap">
          <Image src={props.image} alt={props.name} height={80} width={80}/>
        </div>
        <div className="testimonial__wrapper--body">
          <h5>{props.name}</h5>
          <p className="p-16">{props.text}</p>

          <div className="testimonial__wrapper--body_rating">
            {/* create a new array with the totalStars and render what stars are 'active' */}
            {[...new Array(totalStars)].map((arr, index) => {
              return index < activeStars ? 
              <Image key={index} src="/assets/icons/star_filled.svg" width={24} height={24} alt="filled star" /> 
              : <Image key={index} src="/assets/icons/star_empty.svg" width={24} height={24} alt="empty star" />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

const Testimonials = () => {

  return (
    <Container tag="section" variant="xxl" className="testimonials">
      <div className="testimonials__wrapper">
        <SectionWTextOnly 
        colPosition="left"
        label="testimonial"
        title="What people have said about us"
        text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts"
        />
        <div className="testimonials__card-group">
         {TESTIMONIALS.map((item, index) => (
          <TestimonialCard 
          key={item.id}
          name={item.name}
          image={item.image}
          rating={item.rating}
          text={item.text}
          />
         ))}
        </div>
      </div>
    </Container>
  )
}

export default Testimonials