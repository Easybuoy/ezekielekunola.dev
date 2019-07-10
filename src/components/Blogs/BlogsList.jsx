import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Blog from "./Blog"

const BlogsList = () => {
  const data = useStaticQuery(graphql`
    {
      allBlogsJson {
        edges {
          node {
            id
            title
            publisher
            blogLink
          }
        }
      }
    }
  `)

  const blogs = data.allBlogsJson.edges

  return (
    <div>
      {blogs.map(({ node: blog }) => {
        return <Blog key={blog.id} blog={blog} />
      })}
    </div>
  )
}

export default BlogsList
