import React, { Children } from 'react'

const Breadcrumb = ({ children }) => {
  const childrenArray = Children.toArray(children);

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <React.Fragment key={index}>
          {child}
          <span>/</span>
        </React.Fragment>
      );
    }
    return child
  });

  return (
    <div className='breadcrumb' aria-label="breadcrumb">
      <ol className='breadcrumb__list'>{childrenWtihSeperator}</ol>
    </div>
  )
}

export default Breadcrumb