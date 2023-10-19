import { Container } from "../layout"
import { Hero } from "../common"
import { SearchInput } from "../elements"

const HeroHeading = () => {
  return (
    <Container tag="section" variant="xxl" className="about_heroheading">
        <div className='hero_container about__hero'>
          <Hero
          heading="News & Articles"
          subtext="Stays updated with our latest blog and news and get healthy tips & trick for oral health"
          image="/assets/blog/blog_hero.png"
          imgSize="medium"
          imgVariant="center"
          ctaGroup={<SearchInput/>}
          />
        </div>
    </Container>
  )
}

export default HeroHeading