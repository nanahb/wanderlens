import * as React from "react"
import { NavBar } from "../uicomponents/navbar"
import Layout from "../components/layout"
import { Banner } from "../components/banner"
import PhotoCarousel from "../components/PhotoCarousel"


const IndexPage = () => {
  return (
    <Layout pageTitle={"Home"}>
      <Banner bannerText={"This is Wanderlens."}/>
      <PhotoCarousel/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
