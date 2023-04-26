import * as React from "react"
import { NavBar } from "../uicomponents/navbar"
import Layout from "../components/layout"
import { Banner } from "../components/banner"


const IndexPage = () => {
  return (
    <Layout pageTitle={"Home"}>
      <Banner bannerText={"This is Wanderlens."}/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
