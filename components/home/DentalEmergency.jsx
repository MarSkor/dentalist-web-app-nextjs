import { Container } from "../layout";
import { SectionWRow } from "../common";

const DentalEmergency = () => {
  return (
    <Container tag="section" variant="lg" className="emergency">
      <SectionWRow
      colPosition="left"
      imageClass="emergency_img"
      label="Dental 24H Emergency"
      title="Gentle, friendly treatment from our locally practice."
      text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
      image="/assets/home/home_emergency.png"
      btnText="Book an appointment"
      />
    </Container>
  )
}

export default DentalEmergency