import { Container } from "../layout";
import { getPostMetadata } from "@/lib/getPosts"
import { BlogPost } from ".";
import { Heading } from "../common";

const BlogPostList = () => {
  const blogPosts = getPostMetadata();

  return (
    <Container tag="section" variant="lg">
      <Heading 
      variant="center" 
      headingLevel="h2" 
      headingText="Stay updated with our latest news"
      />

      <div className="blogpostcard--wrapper">
        {blogPosts?.map(post => (
          <BlogPost 
          key={post.slug}
          post={post}
          />
        ))}
      </div>
    </Container>
  )
}

export default BlogPostList