"use client"
import { Container } from '@/components/layout'
import { CTAgroup } from '@/components/common'
import callIcon from "../../public/assets/home/hero/Hero__call-icon.svg"
import { motion } from 'framer-motion'
import { textVariant } from '@/utils/motions'
import { MotionRow } from '../common/motion/MotionBlog'

const HeroHeading = () => {
  return (
    
    <Container variant="xxl" tag="section">
     <MotionRow>
        <div className='hero_container home__hero'>
          <div className="hero">
            <div className="hero__content wrapper">
              <div className='hero__content--heading'>
                <motion.h1 variants={textVariant(0.5)}>Entrust your smile to a professional</motion.h1>
                <motion.p variants={textVariant(0.6)} className="p-18">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</motion.p>
              </div>
              <motion.div variants={textVariant(0.6)}>
                <CTAgroup variant="btn-left" image={callIcon} btnVariant="primary"/>
              </motion.div>
            </div>
            <motion.div 
              variants={textVariant(0.6)} 
              className="hero__heroimgwrap hero__heroimgwrap--end"
            >
              <img 
              className="heroimg" 
              src="/assets/home/hero/Hero__heading.png"  
              alt="header image" 
              loading="lazy"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
        variants={textVariant(1.0)}
        className='hero_container_text'
        >
          <div className='wrapper'>
            <h3>Dentalist is re-imagining what the dental experience can be and proudly setting a new standard for patient care.</h3>
            <div className="line"></div>
          </div>
        </motion.div>
      </MotionRow>
    </Container>
  )
}

export default HeroHeading