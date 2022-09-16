import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const ArticlePage = ({ data }) => {
  const article = data.strapiArticle

  return (
    <Layout>
      <main className="max-w-3xl mx-auto py-8">
        <img src={`http://localhost:1337${article.Image.url}`} alt={article.Title} className="w-1/2 h-96 object-cover rounded-lg"/>
        <h1 className="text-6xl font-bold text-neutral-700 mt-4">{article.Title}</h1>
        <p className="text-2xl text-neutral-500 mt-2">{article.Content.data.Content}</p>
      </main>
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