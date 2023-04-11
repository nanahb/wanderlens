/* Code generated with AutoHTML Plugin for Figma */
import React, { useState } from "react";
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
export const NavButton = ({ text = "Home", to='/', ...props }) => {
  const [selected, setSelected] = useState(false);
  const variantsClassName = "navbuttonState" + (selected ? "Hover" : "Default");
  console.log(styles)
  function onHoverCallback(){
    setSelected(true)
  }
  function endHover(){
    setSelected(false)
  }
  return (
    <Link to={to} activeClassName={styles["activeLink"]}>
    <div className={styles[variantsClassName]} onMouseEnter={onHoverCallback} onMouseLeave={endHover}>
      
        <div className={styles["rectangle"]}></div>
        <div className={styles["about"]}>{text}</div>
      
    </div>
    </Link>
  );
};

export default NavButton;
