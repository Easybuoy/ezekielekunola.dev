import React from "react"

import { Blog as SyledBlog } from "../../styles"
const Blog = ({ blog }) => {
  console.log(blog)
  return (
    <SyledBlog>
      <div className="blog-content">
        <p>{blog.title}</p>
        <p>{blog.publisher}</p>
        <p>{blog.title}</p>
      </div>
    </SyledBlog>
  )
}

export default Blog
