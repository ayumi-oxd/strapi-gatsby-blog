import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import BlocksRenderer from "../components/blocks-renderer"
import Seo from "../components/seo"

const ArticlePage = ({ data }) => {
  console.log("data", data)
  console.log("data", pageQuery)
  // const article = data.strapiArticle

  // const seo = {
  //   metaTitle: article.title,
  //   metaDescription: article.Content.data.Content,
  //   // shareImage: article.cover,
  // }

  return (
    <Layout as="article">
      {/* <Seo seo={seo} /> */}
      <header className="container max-w-4xl py-8">
        {/* <h1 className="text-6xl font-bold text-neutral-700">{article.title}</h1>
        <p className="mt-4 text-2xl text-neutral-500">{article.Content.data.Content}</p> */}
        {/* <GatsbyImage
          image={getImage(article?.cover?.localFile)}
          alt={article?.cover?.alternativeText}
          className="mt-6"
        /> */}
      </header>
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query ($slug: String) {
//     strapiArticle(slug: { eq: $slug }) {
//       id
//       slug
//       title
//       description
//       blocks {
//         ...Blocks
//       }
//       cover {
//         alternativeText
//         localFile {
//           url
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// 

export const pageQuery = graphql`
  query($id: String!) {
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