"use client";
import React from "react";
import Image from "next/image";
import { Container } from "../layout"
import { TESTIMONIALS } from "@/utils/data"
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "@/utils/motions";
import { MotionRow } from "../common/motion/MotionBlog";

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
      <MotionRow
      className="testimonials__wrapper"
      >
        <div className="SectionWTextOnly">
          <div className="SectionWTextOnly__row rowPosition-left">
            <div className="SectionWTextOnly__row--col__heading">
              <motion.p variants={textVariant(0.4)} className="label-12">Testimonial</motion.p>
              <motion.h2 variants={textVariant(0.4)}>What people have said about us</motion.h2>
            </div>

            <div className="SectionWTextOnly__row--col__text">
              <motion.p variants={textVariant(0.4)} className="p-18">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts</motion.p>
            </div>
          </div>
        </div>

        <motion.div 
        variants={fadeIn("up", "tween", 0.5, 1)}
        className="testimonials__card-group"
        >
         {TESTIMONIALS.map((item, index) => (
          <TestimonialCard 
          key={item.id}
          name={item.name}
          image={item.image}
          rating={item.rating}
          text={item.text}
          />
         ))}
        </motion.div>
      </MotionRow>
    </Container>
  )
}

export default Testimonials