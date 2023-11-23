"use client"
import { Card } from "../elements"
import { Container } from "../layout"
import { HOME_FEATURES } from "@/utils/data"
import { motion } from "framer-motion"
import { delayContainer, fadeIn, fadeIn2 } from "@/utils/motions"

const Features = () => {
  return (
    <Container tag="section" variant="lg" className="features">
      <motion.div 
      variants={delayContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="features__wrapper"
      >
        <motion.div 
        variants={fadeIn("up", "tween", 0.4, 1)}
        className="features__heading"
        >
          <p className="label-12">features</p>
          <h2>Specialized care through experience</h2>
          <p className="p-18">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </motion.div>

        <motion.div  className="card-group-wicony">
          {HOME_FEATURES.map((item, index) => (
            <motion.div
            key={item.id}
            variants={fadeIn2}
            >
              <Card 
              variant="wicon-x"
              key={item.id}
              image={item.icon}
              title={item.title}
              text={item.text}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  )
}

export default Features