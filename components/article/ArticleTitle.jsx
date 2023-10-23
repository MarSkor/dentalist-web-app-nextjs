import React from 'react'

const ArticleTitle = ({ category, title }) => {
  return (
    <>
      <p className="label-12">{category}</p>
      <h1>{title}</h1>
    </>
  )
}

export default ArticleTitle