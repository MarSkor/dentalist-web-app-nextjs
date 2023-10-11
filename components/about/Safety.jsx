import { Container } from "../layout"

const Safety = () => {
  return (
    <Container tag="section" variant="lg" className="about_safety">
      <div className="about_safety__wrapper">
        <div className="about_safety__wrapper--heading">
          <p className="label-12">Safety</p>
          <h2>We put the safety first</h2>
          <p className="p-18">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
        <div className="about_safety__wrapper--imgwrap">
          <img src="/assets/about/about_safety_img.png" alt="about safety" />
        </div>
      </div>
    </Container>
  )
}

export default Safety