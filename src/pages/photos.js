import * as React from 'react'
import Layout from '../components/layout'
import Photogrid from '../components/photogrid'
// Step 2: Define your component
const Photos = () => {
  return (
    <Layout pageTitle={"Photos"}>
      <main>
        <p>Photo Grid goes here.</p>
        <Photogrid></Photogrid>
      </main>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default Photos