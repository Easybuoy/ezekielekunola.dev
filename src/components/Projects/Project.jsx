import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Project = ({ slug, title, imageData, description }) => {
    console.log(slug)
  return (
    <div>
      <Link to={`/${slug}`}>
        <Image fluid={imageData} alt={title} />
      </Link>
      <h2>
        <Link to={`/${slug}`}>{title}</Link>
      </h2>
      <p>{description}</p>

      <p>
        <Link to={`/${slug}`}>View Content &rarr;</Link>
      </p>
    </div>
  )
}

export default Project
