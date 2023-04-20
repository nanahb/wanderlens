import * as React from "react"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";



const PhotogridPage = () => {
  
    return (
      <StaticQuery
      query={ graphql`
      query photoCollectionQuery {
        contentfulPhoto{
          image {
            gatsbyImageData
            height
          }
        }
      }`}
      render={data => (
        <header>
          <GatsbyImage image={data.contentfulPhoto.image.gatsbyImageData} alt={"Image of something"}></GatsbyImage>
        </header>
      )}
    />
    )
  }
 export default PhotogridPage;