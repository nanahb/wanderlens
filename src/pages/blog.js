import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import BlogCard from '../components/blogCard'
import styled from "styled-components"

/**
 * 
 * @param {id:string,
 * title:string,
 * slug:string,
 * childContentfulPageBlogpostShortDescriptionTextNode{
 *  shortDescription:string
 * }
 * } node 
 */
function nodeToCard(node) {
  return (<BlogCard title={node.title} 
    desctiption={node.childContentfulPageBlogpostShortDescriptionTextNode.shortDescription}>

    </BlogCard>
  )
}

const GridDiv = styled.div`
display: flex;
flex-wrap: wrap;
`
// Step 2: Define your component
const Blog = (props) => {
  console.log(props)
  let { data } = props;
  let blogCards = data.allContentfulPageBlogpost.nodes.map(nodeToCard)
  return (
    <Layout pageTitle={"Blog"}>
      <GridDiv>
        {blogCards}
      </GridDiv>
    </Layout>
  )
}

export const pageQuery = graphql`
query blogCollectionQuery {
  allContentfulPageBlogpost(filter: {node_locale: {eq: "en-US"}}) {
    nodes {
      title
      childContentfulPageBlogpostShortDescriptionTextNode {
        shortDescription
      }
      slug
      id
    }
  }
}
`

// Step 3: Export your component
export default Blog