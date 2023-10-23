import { Container } from "../layout"
import { BlogPost } from "."
import { getPostMetadata } from "@/lib/getPosts"
import { Heading } from "../common"

const LatestNews = () => {
    const blogPosts = getPostMetadata();

    return (
      <Container tag="div" className="latest-news">
        <Heading 
        variant="center" 
        headingLevel="h2" 
        headingText="Stay updated with our latest news"
        />
  
        <div className="card-group-grid card-group-grid_3">
          {blogPosts?.slice(0,3).map(post => (
            <BlogPost 
            key={post.slug}
            post={post}
            />
          ))}
        </div>
      </Container>
    )
}

export default LatestNews