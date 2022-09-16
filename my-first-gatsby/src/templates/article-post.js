import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const ArticlePage = ({ data }) => {
  const article = data.strapiArticle

  return (
    <Layout>
      <main className="max-w-3xl mx-auto py-8">
        <img src={`http://localhost:1337${article.image.url}`} alt={article.title} className="w-1/2 h-96 object-cover rounded-lg"/>
        <h1 className="text-6xl font-bold text-neutral-700 mt-4">{article.title}</h1>
        <p className="text-2xl text-neutral-500 mt-2">{article.content.data.content}</p>
        <Link to={`/category/${article.fk.id}`}>
          <div className="text-xs inline-flex items-center font-bold mt-3 px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
            # {article.fk.name}
          </div>
        </Link>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    strapiArticle(id:{eq: $id}) {
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
  }
`

export default ArticlePage