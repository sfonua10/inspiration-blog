import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import ReadLink from "../components/read-link"

export const query = graphql`
  query($slug:String!) {
    sanityProject(slug:{current:{eq: $slug }}) {
      title
      author {
        name
      }
      slug {
        current
      }
      description
    }
  }
`;

const PostTemplate = ({ data: { sanityProject: post } }) => (
  <Layout>
    <h1>{post.title}</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      Posted by {post.author.name}
    </p>
    
    <p>{post.description}</p>
    <ReadLink to="/">&larr; back to all posts</ReadLink>
  </Layout>
)

export default PostTemplate