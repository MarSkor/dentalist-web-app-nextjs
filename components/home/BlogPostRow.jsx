import Link from 'next/link'
import { Container } from '../layout'
import { BlogPost } from '../blog'
import { Heading } from '../common'
import { getPostMetadata } from '@/lib/getPosts'
import { ArrowRight } from 'iconoir-react'


const BlogPostRow = () => {
  const blogPosts = getPostMetadata();

  return (
    <Container tag='section' variant='lg' className="blogpostrow">
      <div className="blogpostrow__wrapper">
        <Heading 
        headingLevel="h2" 
        label="blog" 
        headingText="Stay updated with our latest news" 
        variant="center"
        />

        <div className="blogpostcard--wrapper">
          {blogPosts.slice(0,3).map(post => (
            <BlogPost 
            key={post.slug}
            post={post}
            />
          ))}
        </div>

        <div className='content-center'>
          <Link 
          title="view all blog posts" 
          href="/blog" 
          className='btn btn--link'>
            View all blog posts 
            <ArrowRight height={26} width={26}/>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default BlogPostRow