/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, img }) {
  const { site, aboutImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        aboutImage: file(relativePath: { eq: "profile4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              aspectRatio
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  let image
  const isBrowser = typeof window !== `undefined`

  let origin = ""

  if (img) {
    image = img.src
  } else {
    image = aboutImage.childImageSharp.fluid.src
  }
  if (isBrowser) {
    origin = window.location.origin
  }

  return (
    <Helmet
    //   htmlAttributes={{
    //     lang,
    //   }}
    //   title={title}
    //   titleTemplate={`%s | ${site.siteMetadata.title}`}
    //   meta={[
    //     {
    //       name: `description`,
    //       content: metaDescription,
    //     },
    //     {
    //       property: `og:title`,
    //       content: title,
    //     },
    //     {
    //       property: `og:description`,
    //       content: metaDescription,
    //     },
    //     {
    //       property: `og:type`,
    //       content: `website`,
    //     },
    //     // {
    //     //   name: `og:image`,
    //     //   content: `${origin}${image}`,
    //     // },
    //     {
    //       name: `twitter:card`,
    //       content: `summary`,
    //     },
    //     {
    //       name: `twitter:creator`,
    //       content: site.siteMetadata.author,
    //     },
    //     {
    //       name: `twitter:title`,
    //       content: title,
    //     },
    //     {
    //       name: `twitter:description`,
    //       content: metaDescription,
    //     },
    //     // {
    //     //   name: `og:image`,
    //     //   content: `${origin}${image}`,
    //     // },
    //   ].concat([
    //     {
    //       property: "og:image",
    //       content: `${origin}${image}`,
    //     },
    //     // {
    //     //   property: "og:image:width",
    //     //   content: 400,
    //     // },
    //     // {
    //     //   property: "og:image:height",
    //     //   content:400,
    //     // },
    //     {
    //       name: "twitter:card",
    //       content: "summary_large_image",
    //     },
    //   ]
    // ).concat(meta)}
    >
      <title>Trackdrills | Ezekiel Ekunola</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={origin} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${origin}${image}`} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={origin} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${origin}${image}`}></meta>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
