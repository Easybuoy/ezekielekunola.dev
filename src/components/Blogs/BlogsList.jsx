import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { BlogsList as StyledBlogsList } from "./Styles"

import PatternImageLight from "../../images/pattern2.svg"
import PatternImageDark from "../../images/pattern.svg"

import Blog from "./Blog"

const BlogsList = ({ theme }) => {
  let PatternImage = PatternImageLight

  if (theme === "dark") {
    PatternImage = PatternImageDark
  }
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
