const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const articlePost = path.resolve("./src/templates/article-post.js")
  const categoryPost = path.resolve("./src/templates/category-post.js")

  const result = await graphql(
    `
      {
        allStrapiArticle {
          edges {
            node {
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
        }
      }
    `
  )

  const resultTwo = await graphql(
    `
      {
        allStrapiCategory {
          edges {
            node {
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
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      result.errors
    )
    return
  }
  if (resultTwo.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      result.errors
    )
    return
  }

  const articles = result.data.allStrapiArticle.edges
  const categories = resultTwo.data.allStrapiCategory.edges

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

  if (categories.length > 0) {
    categories.forEach((category) => {
      createPage({
        path: `/category/${category.node.id}`,
        component: categoryPost,
        context: {
          id: category.node.id
        },
      })
    })
  }
}