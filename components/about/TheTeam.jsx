import { Container } from "../layout"
import { SectionWTextOnly } from "../common/SectionWRow"
import { Card } from "../elements"
import { ABOUT_DENTISTS } from "@/utils/data"

const TheTeam = () => {
  return (
    <Container tag="section" variant="lg" className="about_team">
      <div className="about_team__wrapper">
        <SectionWTextOnly
        colPosition="left"
        label="meet our team"
        title="Get to know the Dentalist dental team"
        text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        />
        <div className="card-group-grid card-group-grid_4 about_team-card-wrap">
          {ABOUT_DENTISTS.map((dentist, index) => (
            <Card
            key={dentist.id}
            title={dentist.name}
            image={dentist.image}
            variant="wimage-full"
            />
          ))}
          
        </div>
      </div>
    </Container>
  )
}

export default TheTeam