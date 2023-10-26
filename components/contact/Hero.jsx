import { Container } from "../layout"
import { Heading } from "../common"
import { ContactForm } from "."

const Hero = () => {
  return (
    <Container tag="section" variant="lg" className="contactus contactus-colorbg contactus-colorbg-heading-wrap">
        <Heading
        variant="center"
        headingText="Contact Us"
        headingLevel="h1"
        description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        />
        <ContactForm/>
    </Container>
  )
}

export default Hero