import React from "react"
import { Link, graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ArticleCard = ({ article }) => {
  return (
    <Link
      to={`/article/${article.id}`}
      className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      {/* <GatsbyImage
        image={getImage(article.cover?.localFile)}
        alt={article.cover?.alternativeText}
      /> */}
      <img src={`http://localhost:1337${article.Image.url}`}/>
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
