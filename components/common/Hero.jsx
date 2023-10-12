
const Hero = (props) => {
  
  return (
    <div className={`hero hero--${props.heroSize}`}>
      <div className="hero__content wrapper">
        <div className='hero__content--heading'>
          <h1>{props.heading}</h1>
          <p className="p-18">{props.subtext}</p>
        </div>
        {props.ctaGroup && props.ctaGroup}
      </div>

      {props.image && (
        <div className={`hero__heroimgwrap hero__heroimgwrap--${props.imgVariant}`}>
          <img className={`heroimg heroimg--${props.imgSize}`} src={props.image}  alt="header image" loading="lazy"/>
        </div>
      )}
    </div>
  )
}

export default Hero