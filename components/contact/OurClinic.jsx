"use client"
import { Container } from "../layout"
import { Card } from "../elements"
import { motion } from "framer-motion"
import { delayContainer, fadeIn2 } from "@/utils/motions"

const OurClinic = () => {
  return (
    <Container tag="section" variant="lg" className="ourclinic">
      <motion.div
      variants={delayContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      >
        <div className="heading--center">
          <motion.p className="label-12">Our Clinic</motion.p>
          <motion.h2 variants={fadeIn2}>Receive the best dental service at our clinic</motion.h2>
        </div>

        <motion.div 
        variants={fadeIn2}
        className="ourclinic--card-wrap card-group"
        >
          <Card 
          variant="wOutline"
          image="/assets/contact/contact_ourclinic_img1.png"
          title="Dentalist Main Clinic"
          text="35 West Dental Street California 1004"
          />
          <Card 
          variant="wOutline"
          image="/assets/contact/contact_ourclinic_img2.png"
          title="Dentalist Branch Clinic"
          text="35 West Dental Street California 1004"
          />
        </motion.div>
      </motion.div>
    </Container>
  )
}

export default OurClinic