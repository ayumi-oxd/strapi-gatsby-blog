import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ArticleCard from "../components/article-card"

const CategoryPage = ({ data }) => {
  const category = data.strapiCategory

  return (
    <Layout>
      <main>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {category.PK.map((item, i) => (
            <ArticleCard article={item} key={i} />
          ))}
        </div>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    strapiCategory(id:{eq: $id}) {
      id
      Name
      PK {
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
    }
  }
`

export default CategoryPage