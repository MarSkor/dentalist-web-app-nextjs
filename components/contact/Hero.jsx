"use client"
import { Container } from "../layout"
import { ContactForm } from "."
import { motion } from "framer-motion"
import { delayContainer, fadeIn2 } from "@/utils/motions"

const Hero = () => {
  return (
    <Container 
    tag="section" 
    variant="lg" 
    className="contactus contactus-colorbg contactus-colorbg-heading-wrap"
    >
      <motion.div
      variants={delayContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      >
        <div className="heading--center">
          <motion.h2 variants={fadeIn2}>Contact Us</motion.h2>
          <motion.p variants={fadeIn2}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</motion.p>
        </div>

        <motion.div variants={fadeIn2}>
        <ContactForm/>
        </motion.div>
      </motion.div>    
    </Container>
  )
}

export default Hero