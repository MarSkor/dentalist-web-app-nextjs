"use client"
import { Container } from "../layout"
import { Button } from "../elements"
import { motion } from "framer-motion"
import { MotionRow } from "../common/motion/MotionBlog"
import { textVariant } from "@/utils/motions"

const HeroHeading = () => {
  return (
    <Container tag="section" variant="xxl" className="about_heroheading">
      <MotionRow className="hero">
        <div
        className="hero__content wrapper"
        >
          <div className='hero__content--heading'>
            <motion.h1 variants={textVariant(0.5)}>About us</motion.h1>
            <motion.p variants={textVariant(0.6)} className="p-18">We want you to feel amazing about your oral wellness. Not just twice a year, but every time you take a bite, tell a joke, laugh, or share a kiss.</motion.p>
          </div>
          <motion.div
          variants={textVariant(0.7)} 
          className="btn-full-width"
          >
            <Button variant="primary" size="lg" type="button">Contact us</Button>
          </motion.div> 
        </div>

        {/* <motion.div variants={textVariant(0.5)}> */}
          <motion.div variants={textVariant(0.5)} className="hero__heroimgwrap hero__heroimgwrap--center">
            <img className="heroimg heroimg--medium" src="/assets/about/about_hero.png"  alt="header image" loading="lazy"/>
          </motion.div>
        {/* </motion.div> */}
      </MotionRow>
    </Container>
  )
}

export default HeroHeading