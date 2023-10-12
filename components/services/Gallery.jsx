import React from 'react'
import { Container } from '../layout';
import { SectionWTextOnly } from '../common/SectionWRow';
import { GALLERY } from '@/utils/data';

const Gallery = () => {
  return (
    <Container tag="section" variant='lg' className="services__gallery">
      <div className="services__gallery--wrapper">
        <SectionWTextOnly 
        colPosition="left"
        label="Gallery"
        title="Some proof about our services for you"
        text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        />
        <div className="image-gallery">
          {GALLERY.map((image, index) => (
            <img
            key={index}
            className="image-gallery__item"
            src={image.src}
            alt={image.alt}
            loading='lazy'
          /> 
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Gallery