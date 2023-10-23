
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
    <figure className="mdx-hero-image-wrapper">
      <img className="mdx-hero-image" loading='lazy' src={src} alt={alt} />
    </figure>
  )
}

export default HeroImage