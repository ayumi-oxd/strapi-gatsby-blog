import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Headings from "../components/headings"
import ArticlesGrid from "../components/articles-grid"

const IndexPage = () => {
  const { allStrapiArticle, strapiSite } = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        edges {
          node {
            ...ArticleCard
          }
        }
      }
      strapiSite {
        title
        description
      }
    }
  `)

  return (
    <Layout>
     <Headings
       title={strapiSite.title}
       description={strapiSite.description}
     />
     <main>
       <ArticlesGrid articles={allStrapiArticle.edges} />
     </main>
    </Layout>
  )
}

export default IndexPage
