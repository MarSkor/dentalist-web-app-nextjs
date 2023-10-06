
const Hero = (props) => {
  return (
    <div className="hero">
      <div className="hero__content wrapper">
        <div className='hero__content--heading'>
          <h1>{props.heading}</h1>
          <p className="p-18">{props.subtext}</p>
        </div>
        {props.ctagroup && props.ctagroup}
      </div>

      {props.image && (
        <div className='hero__heroimg'>
          <img src={props.image}  alt="header image" loading="lazy"/>
        </div>
      )}
    </div>
  )
}

export default Hero