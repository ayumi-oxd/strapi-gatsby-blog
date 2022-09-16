import React from "react"
import { Link, graphql } from "gatsby"

const ArticleCard = ({ article }) => {
  return (
    <>
      {article.PK.map((item, i) => (
        <Link
          key={i}
          to={`/article/${item.id}`}
          className="overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-lg"
        >
          <img src={`http://localhost:1337${item.Image.url}`} alt={item.Title} className="w-full h-96 object-cover" />
          <div className="px-4 py-4">
            <h3 className="font-bold text-neutral-700">{item.Title}</h3>
            <small className="text-neutral-700">id: {item.id}</small>
            <p className="line-clamp-2 mt-2 text-neutral-500">
              {item.Content.data.Content}
            </p>
            <div className="text-xs inline-flex items-center font-bold mt-3 px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
              # {article.Name}
            </div>
          </div>
        </Link>
      ))}
    </>

    // <Link
    //   to={`/article/${article.id}`}
    //   className="overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-lg"
    // >
    //   <img src={`http://localhost:1337${article.Image.url}`} alt={article.Title} className="w-full h-96 object-cover"/>
    //   <div className="px-4 py-4">
    //     <h3 className="font-bold text-neutral-700">{article.Title}</h3>
    //     <p className="line-clamp-2 mt-2 text-neutral-500">
    //       {article.Content.data.Content}
    //     </p>
    //     <small>{article.id}</small>
    //   </div>
    // </Link>
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
