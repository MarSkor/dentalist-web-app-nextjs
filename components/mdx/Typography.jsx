import Link from "next/link"

export const H1 = ({ children }) => {
   return(
    <>
    <h1 className="mdx-h1">{ children }</h1>
    </>
   )
}

export const H2 = ({ children }) => {
   return(
    <>
    <h2 className="mdx-h2">{ children }</h2>
    </>
   )
}

export const H3 = ({ children }) => {
   return(
    <>
    <h3 className="mdx-h3">{ children }</h3>
    </>
   )
}

export const P = ({ children }) => {
   return(
    <>
    <p className="mdx-paragraph">{ children }</p>
    </>
   )
}

export const BLOCKQUOTE = ({ children }) => {
   return(
    <>
      <blockquote className="mdx-blockquote">
         { children }
      </blockquote>
    </>
   )
}

export const LinkItem = (props) => {
   return(
      <Link href={props.linkTo} className="mdx-link">
         <p>{props.linkText}</p>
      </Link>
   )
}

export const LinkGroup = ({ children }) => {
   return(
      <div className="mdx-link-group">
         {children}
      </div>
   )
}