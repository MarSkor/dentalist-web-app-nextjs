import Image from "next/image"
import { formattedDate } from "@/utils/formattedDates"

const ArticleAuthor = ({ author, author_image, date }) => {
  return (
      <div className="article__meta--author">
        <Image 
        src={author_image} 
        width={48} 
        height={48} 
        alt={author} 
        title={author}
        />
        <div className="article__meta--author-info">
          <h4>{author}</h4>
          <p className="p-16">{formattedDate(date)}</p>
        </div>
      </div>
  )
}

export default ArticleAuthor