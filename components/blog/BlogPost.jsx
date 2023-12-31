import Link from "next/link"
import Image from "next/image";
import { dateFix, monthFix, formattedDate } from "@/utils/formattedDates"

const BlogPost = ({ post }) => {
  const { slug, title, date, blurb, category, image } = post;

  const formattedDay = dateFix(date);
  const formattedMonth = monthFix(date);
  const fullformattedDate = formattedDate(date)

  return (
    <div className="blogcard">
      <Link href={`/blog/${slug}`}>
        <div className="blogcard__image-wrap">
          <Image src={image} alt={title} height={250} width={368}/>
          <div className="blogcard__date">
            <p className="p-18">{formattedDay}</p>
            <p className="label-14">{formattedMonth}</p>
          </div>
        </div>
        <div className="blogcard__content">
          <div className="blogcard__content-extra">
            <span className="blogcard__content--badge">
              <p className="label-12">{category}</p>
            </span>
            <time dateTime={date}>
              <p className="p-date">{fullformattedDate}</p>
            </time>
          </div>
          <h5>{title}</h5>
          <p className="p-16">{blurb.length > 80 ? `${blurb.substring(0, 80)}...` : blurb}</p>
        </div>
      </Link>
    </div>
  )
}

export default BlogPost;