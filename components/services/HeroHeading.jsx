"use client"
import { Container } from "../layout"
import { Button } from "../elements"
import { motion } from "framer-motion"
import { MotionRow } from "../common/motion/MotionBlog"
import { textVariant, fadeIn } from "@/utils/motions"

const HeroHeading = () => {
  return (
    <Container tag="section" variant="xxl" className="services">
        <MotionRow className='hero_container services__hero'>
          <div className={`hero hero--small`}>
            <div className="hero__content wrapper">
              <div className='hero__content--heading'>
                <motion.h1 variants={textVariant(0.5)}>Root Canals</motion.h1>
                <motion.p variants={textVariant(0.6)} className="p-18">Root canals have gotten a bad reputation, but us dentists don’t know why! These are the types of treatments that actually make you feel better!</motion.p>
              </div>
              <motion.div
              variants={textVariant(0.7)} 
              className="btn-full-width"
              >
                <Button variant="primary" size="lg" type="button">Book an appointment</Button>
              </motion.div>
            </div>

            <motion.div 
            variants={fadeIn("up", "spring", 0.5, 1)}
            className="hero__heroimgwrap hero__heroimgwrap--end"
            >
              <img className="heroimg heroimg--large" src="/assets/services/service_hero.png"  alt="header image" loading="lazy"/>
            </motion.div>
          </div>
        </MotionRow>
    </Container>
  )
}

export default HeroHeading