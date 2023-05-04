// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import AboutCard from '../components/aboutCard';
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle={"About me"}>
      <AboutCard/>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage