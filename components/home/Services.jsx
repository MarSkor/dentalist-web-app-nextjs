"use client"
import { Container } from "../layout"
import { HOME_SERVICES } from "@/utils/data"
import { Card } from "@/components/elements"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/utils/motions"
import { Heading } from "../common"
import { MotionRow } from "../common/motion/MotionBlog"

const Services = () => {
  return (
    <Container tag="section" variant="lg">
      <MotionRow className="services">
        <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        >
          <p className="label-12">Services</p>
          <Heading
          variant="res"
          headingLevel="h2"
          headingText="Feel amazing about your oral health"
          description=" Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
        </motion.div>

        <motion.div 
        variants={fadeIn("up", "tween", 0.5, 1)}
        className="card-group-grid card-group-grid_4"
        >
          {HOME_SERVICES.map((item, index) => (
            <Card 
            variant="wicon-y"
            key={index}
            image={item.icon}
            title={item.title}
            text={item.text}
            />
          ))}
        </motion.div>
      </MotionRow>
    </Container>
  )
}

export default Services