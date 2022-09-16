import React from "react"
import { Link, graphql } from "gatsby"

const ArticleCard = ({ article }) => {
  return (
    <Link
      to={`/article/${article.id}`}
      className="overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-lg"
    >
      <img src={`http://localhost:1337${article.image.url}`} alt={article.title} className="w-full h-96 object-cover" />
      <div className="px-4 py-4">
        <h3 className="text-2xl font-bold text-neutral-700">{article.title}</h3>
        <small className="text-neutral-700">id: {article.id}</small>
        <p className="mt-2 text-neutral-500 truncate">
          {article.content.data.content}
        </p>
        <div className="text-xs inline-flex items-center font-bold mt-3 px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
          # {article.fk.name}
        </div>
      </div>
    </Link>
  )
}

export const query = graphql`
  fragment ArticleCard on STRAPI_ARTICLE {
    id
    title
    date
    image {
      url
    }
    content {
      data {
        content
      }
    }
    fk {
      id
      name
    }
  }
`

export default ArticleCard
