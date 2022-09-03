import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import ArticlesGrid from "../components/articles-grid"
// import Seo from "../components/seo"
import Headings from "../components/headings"

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
        Title
        Description
      }
    }
  `)
  // const { allStrapiArticle, strapiGlobal } = useStaticQuery(graphql`
  //   query {
  //     allStrapiArticle {
  //       nodes {
  //         ...ArticleCard
  //       }
  //     }
  //     strapiGlobal {
  //       siteName
  //       siteDescription
  //     }
  //   }
  // `)

  return (
    <Layout>
     {/* <Seo seo={{ metaTitle: "Home" }} />  */}
     <Headings
       title={strapiGlobal.Title}
       description={strapiGlobal.Description}
     />
     <main>
       <ArticlesGrid articles={allStrapiArticle.edges} />
     </main>
    </Layout>
  )
}

export default IndexPage
