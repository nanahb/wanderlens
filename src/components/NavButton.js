/* Code generated with AutoHTML Plugin for Figma */
import React from "react";
import { Link } from 'gatsby'
import * as styles from "./NavButton.module.css";
export const NavButton = ({ state = "default", text = "Home", to='/', ...props }) => {
  const variantsClassName = "navbutton--state-" + state;
  return (
    <div className={styles["navbutton"] + " " + styles[variantsClassName]}>
      <Link to={to}>
        <div className={styles["rectangle"]}></div>
        <div className={styles["about"]}>{text}</div>
      </Link>
    </div>
  );
};

export default NavButton;
