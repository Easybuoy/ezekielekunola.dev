import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { BlogsList as StyledBlogsList } from "./Styles"

import Blog from "./Blog"

const BlogsList = ({ theme }) => {
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
      <div className="blog">
        <div className="blog-header">
          <h3>Blog Posts</h3>
        </div>
        {blogs.map(({ node: blog }) => {
          return <Blog key={blog.id} blog={blog} />
        })}
      </div>
    </StyledBlogsList>
  )
}

export default BlogsList
