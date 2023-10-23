import fs from "fs";
import matter from "gray-matter";
import path from "path";
// import { createMultiplePosts, filterPostsByPageIndex } from "./usePagination";

// helpful article
// https://nextjs.org/learn/basics/data-fetching/blog-data

export function getPostMetadata(){
  const postDir = path.join(process.cwd(), "posts")
  const fileNames = fs.readdirSync(postDir);
  const markdownPosts = fileNames.filter((file) => file.endsWith(".mdx"));

  // gray-matter for each file
  const fileData = markdownPosts.map((fileName) => {

    // markdown file as string
    const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8');

    const { data: frontMatter } = matter(fileContent);

    return{
      title: frontMatter.title,
      date: frontMatter.date,
      blurb: frontMatter.blurb,
      author: frontMatter.author,
      author_image: frontMatter.author_image,
      image: frontMatter.image,
      category: frontMatter.category,
      slug: fileName.replace(/\.mdx?$/, ""),
    }
  });

  // sorting the posts by date
  return fileData.sort((a, b) => a.date < b.date ? 1: -1)
}


export async function getPostContent(slug){
  const postDir = path.join(process.cwd(), "posts")
  const fileName = `${postDir}/${slug}.mdx`;
  const fileContent = fs.readFileSync(fileName, "utf8");

  //gray-matter to parse metadata section
  const matterResult = matter(fileContent);

  return {
    source: matterResult
  } 
}