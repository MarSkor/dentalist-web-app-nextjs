"use client"
import { motion } from "framer-motion"
import { Container } from "../layout"
import { Button } from "../elements"
import { fadeIn } from "@/utils/motions"
import { MotionRow } from "../common/motion/MotionBlog"

const Priority = () => {
  return (
    <Container tag="section" variant="lg" className="about_priority">
      <MotionRow
      className='SectionWimage'
      >
        <div className="SectionWimage__row rowPosition-left">
          <motion.div
          variants={fadeIn("right", "tween", 0.4, 1)} 
          className="SectionWimage__row--col SectionWimage__row--imageWrapper"
          >
            <img 
            className="priority_img" 
            src="/assets/about/about_our-priority.png" 
            alt="Our Clients are our priority" 
            />
          </motion.div>

          <motion.div 
           variants={fadeIn("left", "tween", 0.4, 1)} 
          className="SectionWimage__row--col"
          >
            <div className="SectionWimage__row--contentWrapper">
              <p className="label-12">Our Priority</p>
              <h2>Our Clients are our priority</h2>
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

export default Priority