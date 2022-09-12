import React from "react"
import { Link, graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ArticleCard = ({ article }) => {
  return (
    <Link
      to={`/article/${article.id}`}
      className="overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-lg"
    >
      {/* <GatsbyImage
        image={getImage(article.cover?.localFile)}
        alt={article.cover?.alternativeText}
      /> */}
      <img src={`http://localhost:1337${article.Image.url}`} alt={article.Title} className="w-full h-96 object-cover"/>
      <div className="px-4 py-4">
        <h3 className="font-bold text-neutral-700">{article.Title}</h3>
        <p className="line-clamp-2 mt-2 text-neutral-500">
          {article.Content.data.Content}
        </p>
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
  }
`

export default ArticleCard
