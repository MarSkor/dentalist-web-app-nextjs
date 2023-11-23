"use client"
import { Container } from "../layout"
import { Card } from "../elements"
import { ABOUT_DENTISTS } from "@/utils/data"
import { motion } from "framer-motion"
import { delayContainer, fadeIn2, textVariant } from "@/utils/motions"


const colors = ['#DBEFFA', '#DBDEFA', '#F6DBFA', '#FADBE2']  

const TheTeam = () => {
  return (
    <Container tag="section" variant="lg" className="about_team">
      <motion.div 
      variants={delayContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="about_team__wrapper"
      >
        <div className="SectionWTextOnly">
          <div className="SectionWTextOnly__row rowPosition-left">
            <motion.div 
            variants={textVariant(0.4)} 
            className="SectionWTextOnly__row--col__heading"
            >
              <p className="label-12">Meet our team</p>
              <h2>Get to know the Dentalist dental team</h2>
            </motion.div>
            <motion.div 
            variants={textVariant(0.4)}
            className="SectionWTextOnly__row--col__text"
            >
              <p className="p-18">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </motion.div>
          </div>
        </div>

        <div className="card-group-grid card-group-grid_4 about_team-card-wrap">
          {ABOUT_DENTISTS.map((dentist, index) => (
           <motion.div key={dentist.id} variants={fadeIn2}>
            <Card
            //using the modulo operator to cycle through all index of the 'colors' 
            color={colors[index % colors.length]}
            key={dentist.id}
            title={dentist.name}
            image={dentist.image} 
            variant="wimage-full"
            />
           </motion.div>
          ))}
          
        </div>
      </motion.div>
    </Container>
  )
}

export default TheTeam