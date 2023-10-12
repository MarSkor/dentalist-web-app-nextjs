import React from "react";
import { HeroHeading, Symptoms, Gallery } from "@/components/services";
import { BookAppointment } from "@/components/common";

const Services = () => {
  return (
    <>
      <HeroHeading />
      <Symptoms />
      <Gallery />
      <BookAppointment />
    </>
  )
}

export default Services