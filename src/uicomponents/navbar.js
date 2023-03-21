import React, { useState } from "react";
import { Link } from "gatsby";
import icon from "../images/icon.png";
import "./styles.css"
export function NavBar() {
    return (
    <div className="content">
        <div className="tagList">
    <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
    >
        <div className="container">
        <ul className="navbar-start has-text-centered navbar-menu is-active">
        <div className="navbar-start has-text-centered">
            <li id="about" className="navbar-item" >
                <Link className="navbar-item" to="/about" >
                    About
                </Link>
            </li>
            <li id="photos" className="navbar-item" >
                Photos
            </li>
            <li id="blog" className="navbar-item" >
                Blog
            </li>
            <li id="projects" className="navbar-item" >
                Projects
            </li>
            </div>
        </ul>
        </div>
    </nav></div></div>);
}