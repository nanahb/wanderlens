import * as React from "react"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from './photogrid.module.css';


const PhotogridPage = () => {
  
    return (
      <StaticQuery
      query={ graphql`
      query photoCollectionQuery {
        allContentfulPhoto{
          nodes {
            image {
              gatsbyImageData
              height
            }
          }
        }
      }`}
      render={data => (
        <div id={styles["gallery"]}>
        {data.allContentfulPhoto.nodes.map(node => (<GatsbyImage image={node.image.gatsbyImageData} alt={"Image of something"}></GatsbyImage>))}
        
        </div>
      )}
    />
    )
  }
 export default PhotogridPage;