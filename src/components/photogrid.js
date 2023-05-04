import * as React from "react"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from './photogrid.module.css';


const PhotogridPage = ({onPhotoClick}) => {
  
    return (
      <StaticQuery
      query={ graphql`
      query photoCollectionQuery {
        allContentfulPhoto(filter: {node_locale: {eq: "en-US"}}){
          nodes {
            image {
              gatsbyImageData
              title
            }
          }
        }
      }`}
      render={data => (
        <div id={styles["gallery"]}>
        {data.allContentfulPhoto.nodes.map(node => (
          <a  onClick={(e)=>onPhotoClick(node.image.gatsbyImageData)}>
        <GatsbyImage image={node.image.gatsbyImageData}
          alt={node.image.title}></GatsbyImage> </a>))}
        
        </div>
      )}
    />
    )
  }
 export default PhotogridPage;