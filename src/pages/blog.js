import * as React from 'react'
import Layout from '../components/layout'
// Step 2: Define your component
const Blog = () => {
  return (
    <Layout pageTitle={"Blog"}>
      <main>
        <p>Articles go here.</p>
      </main>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default Blog