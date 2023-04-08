import * as React from 'react'
import Layout from '../components/layout'
// Step 2: Define your component
const Contact = () => {
  return (
    <Layout pageTitle={"Contact"}>
      <main>
        <p>Here are my socials...</p>
      </main>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default Contact