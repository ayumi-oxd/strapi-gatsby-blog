const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const articlePost = path.resolve("./src/templates/article-post.js")

  const result = await graphql(
    `
      {
        allStrapiArticle {
          edges {
            node {
                id
            }
          }
        }
      }
    `
  )
  console.log(result)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      result.errors
    )
    return
  }

  const articles = result.data.allStrapiArticle.edges
  console.log(articles)

  if (articles.length > 0) {
    articles.forEach((article) => {
      createPage({
        path: `/article/${article.node.id}`,
        component: articlePost,
        context: {
          id: article.node.id,
        },
      })
    })
  }
}