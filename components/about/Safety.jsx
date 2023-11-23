"use client"
import { motion } from "framer-motion"
import { fadeIn2, delayContainer } from "@/utils/motions"
import { Container } from "../layout"

const Safety = () => {
  return (
    <Container tag="section" variant="lg" className="about_safety">
      <motion.div 
      variants={delayContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="about_safety__wrapper"
      >
        <div className="about_safety__wrapper--heading">
          <motion.p variants={fadeIn2} className="label-12">Safety</motion.p>
          <motion.h2 variants={fadeIn2}>We put the safety first</motion.h2>
          <motion.p variants={fadeIn2} className="p-18">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</motion.p>
        </div>
        <motion.div
        variants={fadeIn2}
        className="about_safety__wrapper--imgwrap"
        >
          <img src="/assets/about/about_safety_img.png" alt="about safety" />
        </motion.div>
      </motion.div>
    </Container>
  )
}

export default Safety