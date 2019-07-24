import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { BlogsList as StyledBlogsList } from "../../styles"
import PatternImage from "../../images/pattern2.png"

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
      <div
        className="blog"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${PatternImage})`,
        }}
      >
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
