"use client"
import { Container } from "../layout"
import { DropDownMenu } from "../elements"
import FormInput, { FormTextArea } from "../elements/form/FormInput"
import { FORM_SERVICES, FORM_DEPARTMENTS } from "@/utils/data"
import { CTAgroup } from "."
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/motions"
import { MotionRow } from "./motion/MotionBlog"

const BookAppointment = () => {
  return (
    <Container tag="section" variant="lg" className="book-appointment">
      <MotionRow 
      className="book-appointment__wrapper"
      >
        <motion.div 
        variants={fadeIn("up", "tween", 0.4, 1)}
        className="book-appointment__wrapper--map book-appointment__wrapper--col"
        >
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43123.73856923212!2d-111.34471428581332!3d47.50484055398365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5342378d658cb83b%3A0xd6de56b18e5945a8!2sGreat%20Falls%2C%20MT%2C%20USA!5e0!3m2!1sen!2sno!4v1692178729900!5m2!1sen!2sno" 
          style={{border: 0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </motion.div>
        <motion.div 
        variants={fadeIn("up", "tween", 0.4, 1)}
        className="book-appointment__wrapper--content book-appointment__wrapper--col"
        >
          <div className="book-appointment__wrapper--heading">
            <p className="label-12">Book appointment</p>
            <h2>Care at Dentalist is pleasure</h2>
            <p className="p-18">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual</p>
          </div>
          <div className="book-appointment__wrapper--form-wrap">
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
              btnVariant="secondary"
              />
          </form>
          </div>
        </motion.div>
      </MotionRow>
    </Container>
  )
}

export default BookAppointment