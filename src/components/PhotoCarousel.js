import * as React from "react"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from './photocarousel.module.css';


const PhotoCarousel = ({ onPhotoClick }) => {

    return (
        <StaticQuery
            query={graphql`
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
            render={data => {
                let imageDataList = data.allContentfulPhoto.nodes.slice(0, 12).map(node => node.image.gatsbyImageData)
                let firstSix = imageDataList.slice(0,6).map(imageData => <GatsbyImage image={imageData}
                    alt={"Image of something"} className={styles["photoItem"]}></GatsbyImage>)
                let lastSix = imageDataList.slice(imageDataList.length-6, imageDataList.length).map(imageData => <GatsbyImage image={imageData}
                    alt={"Image of something"} className={styles["photoItem"]}></GatsbyImage>)
                return (
                
               
                    

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
                    
       
               
            )}}
        />
    )
}
export default PhotoCarousel;