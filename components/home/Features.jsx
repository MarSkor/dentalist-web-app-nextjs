import { Card } from "../elements"
import { Container } from "../layout"
import { HOME_FEATURES } from "@/utils/data"

const Features = () => {
  return (
    <Container tag="section" variant="lg" className="features">
      <div className="features__wrapper">
        <div className="features__heading">
          <p className="label-12">features</p>
          <h2>Specialized care through experience</h2>
          <p className="p-18">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>

        <div className="card-group-wicony">
          {HOME_FEATURES.map((item, index) => (
            <Card 
            variant="wicon-x"
            key={item.id}
            icon={item.icon}
            title={item.title}
            text={item.text}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Features