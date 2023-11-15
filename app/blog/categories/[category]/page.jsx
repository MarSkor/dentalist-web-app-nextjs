import { getPostMetadata } from "@/lib/getPosts"
import { BlogCategories, BlogPost } from "@/components/blog";
import { Container } from "@/components/layout";
import { formatString } from "@/utils/utils";
import { slug } from "github-slugger";

export const generateStaticParams = async() => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
    category: post.category
  }))
}

const CategoryPage = ({ params }) => {
  const allCategories = ["all"];
  const allBlogPosts = getPostMetadata();

  const posts = allBlogPosts.filter(blog => {
      const slugified = slug(blog.category);
      if(!allCategories.includes(slugified)){
        allCategories.push(slugified)
      }
      if(params.category === "all"){
        return true;
      }
      return slugified === params.category
  })

  return (
    <Container tag="section" variant="lg">
      <h1>{formatString(params.category)} Articles</h1>
      <BlogCategories categories={allCategories} currentCategory={params.category}/>
      
      <div className="blogpostcard--wrapper">
        {posts.map(post => <BlogPost key={post.slug} post={post} />)}
      </div>
    </Container>
  )
}

export default CategoryPage