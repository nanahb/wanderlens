/* Code generated with AutoHTML Plugin for Figma */
import React, { useState } from "react";
import { Link } from 'gatsby'
import * as styles from "./banner.module.css";

export const Banner = ({ bannerText = "Wanderlens"}) => {
    return (<div class={styles["content"]}>
    <h1 class={styles["title"]}>{bannerText}
      <div class={styles["aurora"]}>
        <div class={styles["aurora__item"]}></div>
        <div class={styles["aurora__item"]}></div>
        <div class={styles["aurora__item"]}></div>
        <div class={styles["aurora__item"]}></div>
      </div>
    </h1>
    <p class={styles["subtitle"]}>I am Inah</p>
  </div>)
}