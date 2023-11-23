"use client"
import { Container } from "../layout"
import { Card } from "../elements"
import { SERVICES_SYMPTOMS } from "@/utils/data"
import { motion } from "framer-motion"
import { delayContainer, fadeIn2 } from "@/utils/motions"

const Symptoms = () => {
  return (
    <Container tag="section" variant="lg" className="services__symptoms"> 
      <motion.div 
      variants={delayContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="services__symptoms--wrapper"
      > 
        <div className="heading--center">
          <motion.p variants={fadeIn2} className="label-12">Symptoms</motion.p>
          <motion.h2 variants={fadeIn2} >Sign and symptoms you need root canal</motion.h2>
          <motion.p variants={fadeIn2}  className="p-18">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</motion.p>
        </div>
    
        <div className="card-group-wicony">
          {SERVICES_SYMPTOMS.map((item, index) => (
            <motion.div
            variants={fadeIn2}
            key={item.id}
            >
              <Card 
              variant="wicon-x"
              key={item.id}
              image={item.image}
              title={item.title}
              text={item.text}
              />
            </motion.div>
            
          ))}
        </div>
      </motion.div>
    </Container>
  )
}

export default Symptoms