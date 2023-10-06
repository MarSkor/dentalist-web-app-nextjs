import { Container } from '@/components/layout'
import { Hero } from '@/components/common'
import { CTAgroup } from '.'
import callIcon from "../../public/assets/home/hero/Hero__call-icon.svg"

const HeroHeading = () => {
  return (
    <Container variant="xxl" tag="section">
      <div className='home__hero'>
          <Hero
          heading="Entrust your smile to a professional"
          subtext="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          image="/assets/home/hero/Hero__heading.png"
          ctagroup={<CTAgroup variant="btn-left" image={callIcon} btnVariant="primary"/>}
          />
      </div>
      <div className='home__hero_text'>
        <div className='wrapper'>
          <h3>Dentalist is re-imagining what the dental experience can be and proudly setting a new standard for patient care.</h3>
          <div className="line"></div>
        </div>
      </div>
    </Container>
  )
}

export default HeroHeading