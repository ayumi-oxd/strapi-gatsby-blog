import React from "react"
import { graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
// import BlocksRenderer from "../components/blocks-renderer"
// import Seo from "../components/seo"

const ArticlePage = ({ data }) => {
  const article = data.strapiArticle
  // const seo = {
  //   metaTitle: article.title,
  //   metaDescription: article.Content.data.Content,
  //   // shareImage: article.cover,
  // }

  return (
    <Layout as="article">
      {/* <Seo seo={seo} /> */}
      <header className="container max-w-3xl mx-auto py-8">
        <img src={`http://localhost:1337${article.Image.url}`} alt={article.Title} className="w-full h-96 object-cover"/>
        <h1 className="text-6xl font-bold text-neutral-700 mt-4">{article.Title}</h1>
        <p className="text-2xl text-neutral-500 mt-2">{article.Content.data.Content}</p>
        {/* <GatsbyImage
          image={getImage(article?.cover?.localFile)}
          alt={article?.cover?.alternativeText}
          className="mt-6"
        /> */}
      </header>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    strapiArticle(id:{eq: $id}) {
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
  }
`

export default ArticlePage