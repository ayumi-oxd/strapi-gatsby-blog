import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const Navbar = () => {
  const { allStrapiCategory } = useStaticQuery(graphql`
    query {
      allStrapiCategory {
        edges {
          node {
            id
            Name
            PK {
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
    }
  `)

  return (
    <header>
      <nav className="flex flex-row items-baseline justify-between mx-auto py-6">
        <Link to="/" className="text-xl font-medium">
          Home
        </Link>
        <div className="flex flex-row items-baseline justify-end">
          {allStrapiCategory.edges.map((category, i) => (
            <Link className="mx-2" to={`/category/${category.node.id}`} key={i}>
              <div className="text-xs inline-flex items-center font-bold mt-3 px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
                # {category.node.Name}
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
