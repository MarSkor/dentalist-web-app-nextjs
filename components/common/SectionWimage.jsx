import { Button } from "../elements"

export const SectionWTextOnly = (props) => {
  return(
    <div className="SectionWTextOnly">
      <div className={`SectionWTextOnly__row rowPosition-${props.colPosition}`}>
        <div className="SectionWTextOnly__row--col__heading">
            <p className="label-12">{props.label}</p>
            <h2>{props.title}</h2>
        </div>
        <div className="SectionWTextOnly__row--col__text">
            <p className="p-18">{props.text}</p>
        </div>
      </div>
    </div>
  )
}


const SectionWimageCol = (props) => {
    
    // colPositions (placeholder name for now)
    // - image in left col and text in right col = left
    // - text in left col and image in right col = right (default)

  return (
    <div className='SectionWimage'>
        <div className={`SectionWimage__row rowPosition-${props.colPosition}`}>
            <div className="SectionWimage__row--col SectionWimage__row--imageWrapper">
                <img className={props?.imageClass} src={props.image} alt={props.title} />
            </div>
            <div className="SectionWimage__row--col">
                <div className="SectionWimage__row--contentWrapper">
                    <p className="label-12">{props.label}</p>
                    <h2>{props.title}</h2>
                    <p className="p-18">{props.text}</p>
                    <div className="btn-full-width">
                        <Button size="lg" variant="secondary" type="button">{props.btnText}</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionWimageCol