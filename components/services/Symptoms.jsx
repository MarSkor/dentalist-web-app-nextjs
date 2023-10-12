import { Container } from "../layout"
import { Heading } from "../common"
import { Card } from "../elements"
import { SERVICES_SYMPTOMS } from "@/utils/data"

const Symptoms = () => {
  return (
    <Container tag="section" variant="lg" className="services__symptoms"> 
      <div className="services__symptoms--wrapper">
        <Heading 
        variant="center" 
        label="Symptoms"
        headingLevel="h2"
        headingText="Sign and symptoms you need root canal"
        description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        />
        <div className="card-group-wicony">
          {SERVICES_SYMPTOMS.map((item, index) => (
            <Card 
            variant="wicon-x"
            key={item.id}
            image={item.image}
            title={item.title}
            text={item.text}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Symptoms