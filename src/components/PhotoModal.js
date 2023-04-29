import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './photomodal.module.css'
// Step 2: Define your component
export const PhotoModal = ({ gatsbyImage, onClose }) => {
  return (
    <div className={styles['modalRoot']}>
      <GatsbyImage image={gatsbyImage} alt={"photo"} className={styles['modalContent']}></GatsbyImage>
      <span  className={styles['close']} onClick={(e)=>onClose()}>&times;</span>
    </div>);
};
