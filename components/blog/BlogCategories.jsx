import React from 'react'
import { slug } from 'github-slugger';
import { Container } from '../layout';
import { Category } from '.';


const BlogCategories = ({categories, currentCategory}) => {
    return (
    <Container tag='div' className="categories">
      {categories.map((cat, i)=> (
      <Category 
      key={i} 
      link={`/blog/categories/${cat}`} 
      name={cat}
      active={currentCategory === slug(cat)}
      />
      ))}
    </Container>
  )
}

export default BlogCategories