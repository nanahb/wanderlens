import * as React from "react"
import { graphql, Link, StaticQuery, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from './photocarousel.module.css';


const PhotoCarousel = ({ onPhotoClick }) => {

    return (
        <StaticQuery
            query={graphql`
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
            render={data => {
                let imageList = data.allContentfulPhoto.nodes.slice(0, 12).map(node => node.image)
                let firstSix = imageList.slice(0,6).map(image => <GatsbyImage image={image.gatsbyImageData}
                    alt={image.title} className={styles["photoItem"]}></GatsbyImage>)
                let lastSix = imageList.slice(imageList.length-6, imageList.length).map(image => <GatsbyImage image={image.gatsbyImageData}
                    alt={image.title} className={styles["photoItem"]}></GatsbyImage>)
                return (
                        <Link to={"/photos"}>
                        <div className={styles["container"]}>

                            <div className={styles["photoContainer"]}>
                                <div className={styles["photoContItem"] + " " + styles["animation1"]}>
                                    {firstSix}
                                    {firstSix}
                                </div>

                                <div class={styles["photoContItem"] + " " + styles["animation2"]}>
                                    {lastSix}
                                    {lastSix}
                                </div>
                            </div>
                        </div>
                        </Link>
                    
       
               
            )}}
        />
    )
}
export default PhotoCarousel;