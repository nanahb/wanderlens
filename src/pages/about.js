// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import * as styles from "../styles/about.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faLinkedin, faImdb } from "@fortawesome/free-brands-svg-icons";
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle={"About me"}>
      <div className={styles["aboutContainer"]}>
      <h1>About Me</h1>
        <p>Hi there! My name is Inah Teresa. I love taking photos.</p>
        <p>I have always been fascinated by the power of photography to freeze a moment in time and create a lasting memory. 
          Whether I'm capturing the beauty of nature, the energy of a city, or the emotion of a portrait, I strive to create images that are both visually stunning and emotionally powerful. 
          I'm always looking for new ways to challenge myself and push my creative boundaries, and I'm constantly inspired by the world around me.</p>
        <div className={styles["socialMedia"]}>
          <a href="[Your Social Media Profile URL]">
            <FontAwesomeIcon className={styles["socialIcon"]} icon={faImdb} />
          </a>
          <a href="[Your Social Media Profile URL]">
          <FontAwesomeIcon className={styles["socialIcon"]} icon={faLinkedin} />
          </a>
          <a href="[Your Social Media Profile URL]">
           <FontAwesomeIcon className={styles["socialIcon"]} icon={faInstagram} />
          </a>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage