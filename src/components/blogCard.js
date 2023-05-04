import * as React from 'react';
import * as styles from "./blogcard.module.css";
import styled from 'styled-components';

const BlogCard = ({title, desctiption}) => {
  return (<div className={styles['card']}>
    
    <div className={styles['cardContainer']}>
        <h3>{title}</h3>
         <p>{desctiption}</p>
    </div>
   
  
    </div>
    );
}
export default BlogCard;