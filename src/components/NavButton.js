/* Code generated with AutoHTML Plugin for Figma */
import React from "react";
import { Link } from 'gatsby'
import * as styles from "./NavButton.module.css";
export const NavButton = ({ state = "default", text = "Home", to='/', ...props }) => {
  const variantsClassName = "navbutton--state-" + state;
  return (
    <Link to={to}>
    <div className={styles["navbutton"] + " " + styles[variantsClassName]}>
      
        <div className={styles["rectangle"]}></div>
        <div className={styles["about"]}>{text}</div>
      
    </div>
    </Link>
  );
};

export default NavButton;
