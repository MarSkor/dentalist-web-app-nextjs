import { Container } from "../layout"
import { FormInput, DropDownMenu } from "../elements"
import { FormTextArea } from "../elements/form/FormInput"
import { CTAgroup } from "../common"
import { FORM_SERVICES, FORM_DEPARTMENTS } from "@/utils/data"

const ContactForm = () => {
  return (
    <Container className="book-appointment__wrapper--content contactus-form-container">
      <div className="book-appointment__wrapper--form-wrap contactus-form-wrap">
        <form id="booking-form" className="book-appointment-form form">
          <div className="form__group">
            <FormInput 
            className="form-input"
            title="Name"
            placeholder="Enter your name..."
            type="text"
            />
            <FormInput 
            className="form-input"
            title="Email Address"
            placeholder="Your email address..."
            type="email"
            />
          </div>

          <div className="form__group">
            <DropDownMenu 
            title="Services" 
            items={FORM_SERVICES} 
            placeholder="Select Service"
            name="services"
            />
            <DropDownMenu 
            name="Department"
            title="Department" 
            items={FORM_DEPARTMENTS} 
            placeholder="Select Department"
            />
          </div>

          <FormTextArea
          className="form-textarea"
          />
          
          <CTAgroup
          variant="btn-right"
          image="/assets/home/home_form-call.svg" 
          btnVariant="primary"
         />
        </form>
      </div>
    </Container>
  )
}

export default ContactForm