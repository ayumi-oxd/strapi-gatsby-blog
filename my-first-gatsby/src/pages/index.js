import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Headings from "../components/headings"
import ArticlesGrid from "../components/articles-grid"

const IndexPage = () => {
  const { allStrapiArticle, strapiGlobal } = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        edges {
          node {
            ...ArticleCard
          }
        }
      }
      strapiGlobal {
        title
        description
      }
    }
  `)

  return (
    <Layout>
     <Headings
       title={strapiGlobal.title}
       description={strapiGlobal.description}
     />
     <main>
       <ArticlesGrid articles={allStrapiArticle.edges} />
     </main>
    </Layout>
  )
}

export default IndexPage
