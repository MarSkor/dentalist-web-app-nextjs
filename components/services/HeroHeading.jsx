import { Container } from "../layout"
import { Hero } from "../common"
import { Button } from "../elements"

const HeroHeading = () => {
  return (
    <Container tag="section" variant="xxl" className="services">
        <div className='hero_container services__hero'>
            <Hero 
            heroSize="small"
            heading="Root canals"
            subtext="Root canals have gotten a bad reputation, but us dentists don’t know why! These are the types of treatments that actually make you feel better!"
            image="/assets/services/service_hero.png"
            imgSize="large"
            imgVariant="end"
            ctaGroup={<Button variant="primary" size="lg" type="button">Book an appointment</Button>}
            />
        </div>
    </Container>
  )
}

export default HeroHeading