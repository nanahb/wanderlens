import * as React from 'react'
import Layout from '../components/layout'
// Step 2: Define your component
const Photos = () => {
  return (
    <Layout pageTitle={"Photos"}>
      <main>
        <p>Photo Grid goes here.</p>
      </main>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default Photos