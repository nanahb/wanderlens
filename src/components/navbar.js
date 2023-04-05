/* Code generated with AutoHTML Plugin for Figma */
import React from "react";
import { NavButton } from './NavButton'
import * as styles from "./navbar.module.css";

export const NavBar = ({ ...props }) => {
  return (
    <div className={styles["blanknavbarframe"]}>
      <div className={styles["navitemlist"]}>
        <div className={styles["navitem"]}>
          <NavButton text="About" to="/about"> </NavButton>
          {/* <div className={styles["navbutton"]}>
            <div className={styles["rectangle-3"]}></div>

            <div className={styles["about"]}>About</div>
          </div> */}
        </div>

        <div className={styles["navitem2"]}>
        <NavButton text="Photos" to="/photos"> </NavButton>
          {/* <div className={styles["rectangle-32"]}></div>
          <div className={styles["about2"]}>Photos</div> */}
        </div>

        <div className={styles["navitem2"]}>
        <NavButton text="Contact" to="/contact"> </NavButton>
          {/* <div className={styles["rectangle-32"]}></div>

          <div className={styles["about2"]}>Contact</div> */}
        </div>
        <div className={styles["navitem2"]}>
        <NavButton text="Blog" to="/blog"> </NavButton>

        </div>
      </div>
    </div>
  );
};
