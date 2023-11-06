import { getPostMetadata } from "@/lib/getPosts";
import { Container } from "@/components/layout";
import { Heading } from "@/components/common";
import { BlogPost, HeroHeading } from "@/components/blog";
import { Pagination } from "@/components/elements";


const Blog = ({ searchParams }) => {
  const page =  typeof searchParams.page === "string" ? +searchParams.page : 1;
 
  // blog posts to show per page
  let pageSize = 6;

  // fetching all blog posts
  const allBlogPosts = getPostMetadata();
  
  const currentPostData = (posts, pageSize, page) => {
    const firstPage = (page - 1) * pageSize;
    const lastPage = firstPage + pageSize;
    return posts.slice(firstPage, lastPage)
  }

  const paginatedPosts = currentPostData(allBlogPosts, pageSize, page)

  return (
    <>
    <HeroHeading />
    <Container tag="section" variant="lg">
      <Heading 
      variant="center" 
      headingLevel="h2" 
      headingText="Stay updated with our latest news"
      />

      <div className="blogpostcard--wrapper">
        {paginatedPosts?.map(post => (
          <BlogPost 
          key={post.slug}
          post={post}
          />
        ))}
      </div>
      <Pagination
      currentPage={page}
      totalCount={allBlogPosts.length}
      pageSize={pageSize}
      />
    </Container>
    </>
  )
}

export default Blog