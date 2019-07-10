import React from "react"

const Blog = ({ blog }) => {
  console.log(blog)
  return (
    <div>
      <p>{blog.title}</p>
      <p>{blog.publisher}</p>
      <p>{blog.title}</p>

     
    </div>
  )
}

export default Blog
