
const Card = (props) => {
  const classNames = `card card--${props.variant}`;

  // card variants
  // - wicon-y
  // - wicon-x
  // - default
  // - horizontal
  // - wOutline

  return (
    <div className={classNames}>
      <div className={`card--${props.variant}__wrapper`}>
        {props.image && (
          <div className={`card--${props.variant}__image-wrap`}>
            <img
            src={props.image}  
            alt={props.title}
            loading="lazy"
            />
          </div>
        )}
        <div className={`card--${props.variant}__body`}>
          <h4>{props.title}</h4>
          {props.text && <p className="p-16">{props.text}</p>}
        </div>
      </div>
    </div>
  )
}


export default Card