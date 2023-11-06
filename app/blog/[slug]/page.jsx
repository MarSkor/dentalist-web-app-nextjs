import { notFound } from "next/navigation"
import { MDXRemote } from 'next-mdx-remote/rsc';

import { Container } from "@/components/layout"
import { ArticleAuthor, ArticleTitle } from "@/components/article";
import { LatestNews } from "@/components/blog";
import * as components from "@/components/mdx";
import { NextBreadcrumb } from "@/components/elements";

import { getPostMetadata, getPostContent } from "@/lib/getPosts"


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
      <NextBreadcrumb/>
      <article className="article article-wrapper">
        <header className="article__meta">
            <ArticleTitle 
              category={source.data.category} 
              title={source.data.title}
            />
            <ArticleAuthor 
              date={source.data.date} 
              author={source.data.author} 
              author_image={source.data.author_image}
            />
        </header>
        <MDXRemote source={source.content} components={components}/>
      </article>
    
      <LatestNews/>
    </Container>
  )
}

export default Post


