import React from "react"
import { Link, graphql } from "gatsby"

const ArticleCard = ({ article }) => {
  return (
    <Link
      to={`/article/${article.id}`}
      className="overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-lg"
    >
      <img src={`http://localhost:1337${article.Image.url}`} alt={article.Title} className="w-full h-96 object-cover" />
      <div className="px-4 py-4">
        <h3 className="text-2xl font-bold text-neutral-700">{article.Title}</h3>
        <small className="text-neutral-700">id: {article.id}</small>
        <p className="line-clamp-2 mt-2 text-neutral-500">
          {article.Content.data.Content}
        </p>
        <div className="text-xs inline-flex items-center font-bold mt-3 px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
          # {article.FK.Name}
        </div>
      </div>
    </Link>
  )
}

export const query = graphql`
  fragment ArticleCard on STRAPI_ARTICLE {
    id
    Title
    Date
    Image {
      url
    }
    Content {
      data {
        Content
      }
    }
    FK {
      id
      Name
    }
  }
`

export default ArticleCard
