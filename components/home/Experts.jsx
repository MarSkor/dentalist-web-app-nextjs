"use client"
import { Container } from "../layout"
import { CheckCircle } from "iconoir-react"
import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from "@/utils/motions"
import { MotionRow } from "../common/motion/MotionBlog"

const Experts = () => {
  return (
    <Container tag="section" variant="lg" className="experts">
      <MotionRow>
      <div className="experts__wrapper">
        <motion.div 
        variants={fadeIn("right", "tween", 0.4, 1)}
        className='experts__content--heading'
        >
          <p className="label-12">experts in dental</p>
          <h2>Top-notch dentistry, from Seattle`s top dentists.</h2>
          <p className="p-18">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts</p>
          <ul className="experts__content--list">
            <li><CheckCircle color="#583FBC"/>Top quality dental team</li>
            <li><CheckCircle color="#583FBC"/>State of the art dental services</li>
            <li><CheckCircle color="#583FBC"/>Discount on all dental treatment</li>
          </ul>
        </motion.div>

        <motion.div 
        variants={fadeIn("left", "tween", 0.4, 1)}
        className="experts__content--image_wrap"
        >
          <img 
          src="/assets/home/home_experts-in-dental.png" 
          alt="experts in dental" 
          title="experts in dental" 
          loading="lazy"
          />
        </motion.div>
      </div>

      </MotionRow>
    </Container>
  )
}

export default Experts