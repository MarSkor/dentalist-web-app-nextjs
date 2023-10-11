import React from "react"
import { Button } from "../elements"
import Image from "next/image"


const CTAgroup = (props) => {

  // variants
  // btn-left
  // btn-right
  // btn-only
  
  const classNames =`button-groupx button-groupx--${props.variant}`

  return (
    <div className={classNames}>
      <div className={`button-groupx--${props.variant}__wrapper`} >
        <div className={`button-groupx--${props.variant}__wrapper--icon`}>
          <Image 
          src={props.image} 
          height={64} 
          width={64} 
          alt="24h dental emergency"
          />
        </div>
        <div className={`button-groupx--${props.variant}__wrapper--text`}>
          <p className="label-12">Dental Emergency</p>
          <p className="p-16">03 482 394 123</p>
        </div>
      </div>
      <Button size="lg" variant={props.btnVariant} type="button">Book an appointment</Button>
    </div>
  )
}

export default CTAgroup

