"use client"
import { Container } from "../layout";
import { Button } from "../elements";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motions";
import { MotionRow } from "../common/motion/MotionBlog";

const DentalEmergency = () => {
  return (
    <Container tag="section" variant="lg" className="emergency">
      <MotionRow className='SectionWimage'>
        <div className='SectionWimage__row rowPosition-left'>
          <motion.div 
          variants={fadeIn("right", "tween", 0.4, 1)}
          className="SectionWimage__row--col SectionWimage__row--imageWrapper"
          >
            <img 
            className="emergency_img" 
            src="/assets/home/home_emergency.png" 
            alt="Gentle, friendly treatment from our locally practice." 
            />
          </motion.div>
          
          <motion.div 
          variants={fadeIn("left", "tween", 0.4, 1)}
          className="SectionWimage__row--col"
          >
            <div className="SectionWimage__row--contentWrapper">
              <p className="label-12">Dental 24H Emergency</p>
              <h2>Gentle, friendly treatment from our locally practice.</h2>
              <p className="p-18">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
              <div className="btn-full-width">
                <Button size="lg" variant="secondary" type="button">Book an appointment</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </MotionRow>
    </Container>
  )
}

export default DentalEmergency