"use client"
import { Container } from "../layout"
import { Hero } from "../common"
import { SearchInput } from "../elements"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/utils/motions"

const HeroHeading = () => {
  return (
    <Container tag="section" variant="xxl" className="about_heroheading">
        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='hero_container about__hero'
        >
          <div className="hero hero--medium">
            <motion.div 
            variants={fadeIn("right", "tween", 0.4, 1)}
            className="hero__content wrapper"
            >
              <div className='hero__content--heading'>
                <h1>News & Articles</h1>
                <p className="p-18">Stays updated with our latest blog and news and get healthy tips & trick for oral health</p>
              </div>
              <SearchInput/>
            </motion.div>

            <motion.div 
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="hero__heroimgwrap hero__heroimgwrap--center"
            >
              <img className="heroimg heroimg--medium" src="/assets/blog/blog_hero.png"  alt="header image" loading="lazy"/>
            </motion.div>
          </div>
        </motion.div>
    </Container>
  )
}

export default HeroHeading