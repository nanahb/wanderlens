/* Code generated with AutoHTML Plugin for Figma */
import React from "react";
import { Link } from 'gatsby'
import * as styles from "./NavButton.module.css";
/**
 * 
 * Option A: refactor our css to use nested selectors for the active style.
 * .navbutton--state-active {styles for this}
 * change to 
 * .navbutton {default navbutton style}
 * .activeLink .navbutton {style for active}
 */
export const NavButton = ({ state = "default", text = "Home", to='/', ...props }) => {
  const variantsClassName = "navbutton--state-" + state;
  return (
    <Link to={to} activeClassName={styles["activeLink"]}>
    <div className={styles["navbutton"] + " " + styles[variantsClassName]}>
      
        <div className={styles["rectangle"]}></div>
        <div className={styles["about"]}>{text}</div>
      
    </div>
    </Link>
  );
};

export default NavButton;
