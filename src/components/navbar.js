/* Code generated with AutoHTML Plugin for Figma */
import React from "react";
import { NavButton } from './NavButton'
import * as styles from "./navbar.module.css";

export const NavBar = ({ ...props }) => {
  return (
    <div className={styles["blanknavbarframe"]}>
      <div className={styles["navitemlist"]}>
        <div className={styles["navitem2"]}>
        <NavButton text="Home" to="/"> </NavButton>
        </div>
        <div className={styles["navitem2"]}>
          <NavButton text="About" to="/about"> </NavButton>
        </div>
        <div className={styles["navitem2"]}>
          <NavButton text="Photos" to="/photos"> </NavButton>
        </div>
        <div className={styles["navitem2"]}>
          <NavButton text="Contact" to="/contact"> </NavButton>
        </div>
        <div className={styles["navitem2"]}>
          <NavButton text="Blog" to="/blog"> </NavButton>
        </div>
      </div>
    </div>
  );
};
