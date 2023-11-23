"use client"
import React from 'react'
import { Container } from '../layout';
import { GALLERY } from '@/utils/data';
import { motion } from 'framer-motion';
import { delayContainer, fadeIn } from '@/utils/motions';


const Gallery = () => {
  return (
    <Container tag="section" variant='lg' className="services__gallery">
      <motion.div 
      variants={delayContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="services__gallery--wrapper"
      >
        <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        >
        <div className="SectionWTextOnly">
          <div className="SectionWTextOnly__row rowPosition-left">
            <div className="SectionWTextOnly__row--col__heading">
              <p className="label-12">Gallery</p>
              <h2>Some proof about our services for you</h2>
            </div>
            <div className="SectionWTextOnly__row--col__text">
              <p className="p-18">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
          </div>
        </div>
        </motion.div>
        <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="image-gallery">
          {GALLERY.map((image, index) => (
            <img
            key={index}
            className="image-gallery__item"
            src={image.src}
            alt={image.alt}
            loading='lazy'
            /> 
          ))}
        </motion.div>
      </motion.div>
    </Container>
  )
}

export default Gallery