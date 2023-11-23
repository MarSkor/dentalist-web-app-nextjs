export const Heading = ({ variant, headingLevel, label, headingText, description }) => {
  const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const safeHeading = headingLevel ? headingLevel.toLowerCase() : '';
  const Title = validHeadingLevels.includes(safeHeading) ? safeHeading : 'p';

  const classNames = `heading--${variant}`

  return (
    <div className={classNames}>
      {label &&  <p className="label-12">{label}</p>}
      <Title>{headingText}</Title>
      {description && <p className="p-18">{description}</p>}
    </div>
  )
}

export default Heading