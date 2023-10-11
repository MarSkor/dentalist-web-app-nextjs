import { Container } from "../layout"
import { Button } from "../elements"
import { Hero } from "../common"
import { CTAgroup } from "../common"

const HeroHeading = () => {
  return (
    <Container tag="section" variant="xxl" className="about_heroheading">
        <div className='hero_container about__hero'>
          <Hero
          heading="About us"
          subtext="We want you to feel amazing about your oral wellness. Not just twice a year, but every time you take a bite, tell a joke, laugh, or share a kiss."
          image="/assets/about/about_hero.png"
          imgSize="medium"
          imgVariant="center"
          ctaGroup={<Button variant="primary" size="lg" type="button">Contact us</Button>}
          />
        </div>
    </Container>
  )
}

export default HeroHeading