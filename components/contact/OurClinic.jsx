import { Container } from "../layout"
import { Card } from "../elements"
import { Heading } from "../common"

const OurClinic = () => {
  return (
    <Container tag="section" variant="lg" className="ourclinic">
      <Heading 
      variant="center"
      headingText="Receive the best dental service at our clinic"
      headingLevel="h2"
      label="Our Clinic"        
      />
      <div className="ourclinic--card-wrap card-group">
        <Card 
        variant="wOutline"
        image="/assets/contact/contact_ourclinic_img1.png"
        title="Dentalist Main Clinic"
        text="35 West Dental Street California 1004"
        />
        <Card 
        variant="wOutline"
        image="/assets/contact/contact_ourclinic_img2.png"
        title="Dentalist Branch Clinic"
        text="35 West Dental Street California 1004"
        />
      </div>
    </Container>
  )
}

export default OurClinic