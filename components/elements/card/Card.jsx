import { dateFix, monthFix } from "@/utils/functions";
import Image from "next/image";

export const BlogCard = (props) => {

  return(
    <div className="blogcard">
      <div className="blogcard__image-wrap">
          <Image src={props.image} alt={props.title} height={250} width={368}/>
          <div className="blogcard__date">
            <p className="p-18">{dateFix(props.blogDay)}</p>
            <p className="label-14">{monthFix(props.blogMonth)}</p>
          </div>
        </div>
        <div className="blogcard__content">
          <p className="label-12">{props.label}</p>
          <h5>{props.title}</h5>
          <p className="p-16">{props.blurb}</p>
        </div>
    </div>
  )
}



const Card = (props) => {
  const classNames = `card card--${props.variant}`;

  // card variants
  // - wicon-y
  // - wicon-x
  // - default
  // - horizontal

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