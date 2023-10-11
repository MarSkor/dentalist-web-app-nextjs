import { Container } from "../layout"
import { Accordion } from "../elements"
import { Heading } from "../common"
import { ABOUT_US_ACCORDION_DATA } from "@/utils/data"

const FAQ = () => {
  return (
    <Container tag="section" variant="lg" className="about_faq">
      <div className="about_faq__wrapper">
        <div className="about_faq__wrapper--heading">
          <Heading 
            variant="center"
            label="FAQ"
            headingLevel="h2"
            headingText="Frequently asked questions"
          />
        </div>
        <div className='about_faq__wrapper--accordion_wrap'>
          {ABOUT_US_ACCORDION_DATA.map((item, index) => (
            <Accordion 
            key={item.id}
            question={item.question}
            answer={item.answer}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default FAQ