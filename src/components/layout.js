import * as React from 'react'
import { Link } from 'gatsby'
import { container } from './layout.module.css'
import { NavButton } from './NavButton'
import { NavBar } from './navbar'
const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <NavBar></NavBar>
      <main>
        <div style={{height : "30px"}}></div>
        {children}
      </main>
    </div>
  )
}

export default Layout