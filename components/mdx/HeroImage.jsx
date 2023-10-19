
export const BlogImage = (props) => {
  const classNames = `mdx-blog-image mdx-blog-image--${props.size}`;
  // sizes: sm, md and lg
  return(
    <img className={classNames} src={props.src} alt={props.alt} loading="lazy"/>
  )
}

export const ImageGroup = ({children}) => {
  return(
    <div className="mdx-image-group">
      {children}
    </div>
  )
}

const HeroImage = ({ src, alt }) => {
  return (
    <div className="mdx-hero-image">
      <img loading='lazy' src={src} alt={alt} />
    </div>
  )
}

export default HeroImage