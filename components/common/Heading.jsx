import React from "react"


const Heading = (props) => {
    const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    const safeHeading = props.headingLevel ? props.headingLevel.toLowerCase() : '';
    const Title = validHeadingLevels.includes(safeHeading) ? safeHeading : 'p';

    const classNames = `heading--${props.variant}`

  return (
    <div className={classNames}>
        <p className="label-12">{props.label}</p>
        <Title>{props.headingText}</Title>
        {props.description && <p className="p-18">{props.description}</p>}
    </div>
  )
}

export default Heading