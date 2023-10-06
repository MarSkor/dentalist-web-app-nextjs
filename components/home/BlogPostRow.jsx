import React from 'react'
import { Container } from '../layout'
import { BLOGPOSTROW } from '@/utils/data'
import { BlogCard } from '../elements/card/Card'

const BlogPostRow = () => {

  return (
    <Container tag='section' variant='lg' className="blogpostrow">
      <div className="blogpostrow__wrapper">
        <div className="blogpostrow__wrapper--heading">
          <p className="label-12">blog</p>
          <h2>Stay updated with our latest news</h2>
        </div>
        <div className="blogpostrow__wrapper--blog-row">
          {BLOGPOSTROW.map((item, index) => (
            <BlogCard 
            key={item.id}
            blogDay={item.date}
            blogMonth={item.date}
            image={item.image}
            title={item.title}
            label={item.label}
            blurb={item.blurb}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default BlogPostRow