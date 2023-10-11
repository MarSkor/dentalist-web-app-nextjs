import { Container } from "../layout"
import { HOME_SERVICES } from "@/utils/data"
import { Card } from "@/components/elements"

const Services = () => {
  return (
    <Container tag="section" variant="lg">
      <div className="services">
        <div className="services__heading">
          <p className="label-12">Services</p>
          <div className="services__heading--text">
            <h2>Feel amazing about your oral health</h2>
            <p className="p-18">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
        </div>

        <div className="card-group-grid card-group-grid_4">
          {HOME_SERVICES.map((item, index) => (
            <Card 
            variant="wicon-y"
            key={index}
            image={item.icon}
            title={item.title}
            text={item.text}
            />
          ))}
        </div>

      </div>
    </Container>
  )
}

export default Services