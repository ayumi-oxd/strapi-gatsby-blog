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
          {category.pk.map((item, i) => (
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
      name
      pk {
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
  }
`

export default CategoryPage