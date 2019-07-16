import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { BlogsList as StyledBlogsList } from "../../styles"
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
            created
          }
        }
      }
    }
  `)

  const blogs = data.allBlogsJson.edges

  return (
    <StyledBlogsList>
      <div className="blog-header">
        <h2>Blog Posts</h2>
      </div>
      {blogs.map(({ node: blog }) => {
        return <Blog key={blog.id} blog={blog} />
      })}
    </StyledBlogsList>
  )
}

export default BlogsList
