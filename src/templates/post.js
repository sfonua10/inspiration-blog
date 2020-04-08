import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import ReadLink from "../components/read-link"
import Img from "gatsby-image"
import Header from "../components/header"
// import BlockContent = from '@sanity/block-content-to-react';

export const query = graphql`
  query($slug: String!) {
    sanityProject(slug: { current: { eq: $slug } }) {
      title
      author {
        name
      }
      slug {
        current
      }
      _rawDescription
      image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

const PostTemplate = ({ data: { sanityProject: post } }) => {
  // const htmlDescription = post.description.split("\n").join("<br />")
  console.log("post", post)
  return (
    <>
      <Header />
      <Layout>
        <h1>{post.title}</h1>
        <p
          css={css`
            font-size: 0.75rem;
          `}
        >
          Posted by {post.author.name}
        </p>
        <br />
        {post.image && <Img fluid={post.image.asset.fluid} alt={post.title} />}
        <br />
        {post._rawDescription.map(content => (
          <pre>{JSON.stringify(content, null, 2)}</pre>
        ))}
        <ReadLink to="/">&larr; back to all posts</ReadLink>
      </Layout>
    </>
  )
}
export default PostTemplate
