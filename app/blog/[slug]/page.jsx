import { Container } from "@/components/layout"
import { LatestNews } from "@/components/blog";
import * as components from "@/components/mdx";
import { Breadcrumb } from "@/components/elements";
import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostMetadata, getPostContent } from "@/lib/getPosts"
import Loading from "../loading";

export const generateStaticParams = async() => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug
  }))
}


const Post = async({ params }) => {
  const posts = getPostMetadata();
  const { slug } = params;

  if(!posts.find(post => post.slug === slug)){
    return notFound();
  }

  // passing the slug to the function to get the "source" (content) for the article
  const { source } = await getPostContent(slug)

  return (
    <Container tag="section" variant="lg">
        <article className="article article-wrapper">

          <Breadcrumb />

          <div className="article__meta">
            <p className="label-12">{source.data.category}</p>
            <h1>{source.data.title}</h1>
            <p></p>
            <div className="article__meta--author"></div>
          </div>
          
          <MDXRemote source={source.content} components={components}/>
        </article>
        
      <LatestNews/>
    </Container>
  )
}

export default Post


