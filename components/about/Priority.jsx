import { Container } from "../layout"
import SectionWimageCol from "../common/SectionWRow"

const Priority = () => {
  return (
    <Container tag="section" variant="lg" className="about_priority">
      <SectionWimageCol
      colPosition="left"
      imageClass="priority_img"
      label="Our Priority"
      title="Our Clients are our priority"
      text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
      image="/assets/about/about_our-priority.png"
      btnText="Book an appointment"
      />
    </Container>
  )
}

export default Priority