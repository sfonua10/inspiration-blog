import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import ReadLink from "./read-link"

const PostHeadingLink = styled(Link)`
  text-decoration: none;
  color: #212225;
`

const PostPreview = ({ post }) => {
  return (
    <article
      css={css`
        border-bottom: 1px solid #ddd;
        margin-top: 0;
        padding-bottom: 1rem;

        :first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <h3>
        <PostHeadingLink to={post.slug}>{post.title}</PostHeadingLink>
      </h3>
      <div
        css={css`
          display: flex;
          align-items: flex-start;
          margin-top: 1rem;
        `}
      >
        <Link
          to={post.slug}
          css={css`
            position: relative;
            flex: 0 0 6.25rem;
            align-self: flex-start;
            width: 100px;
          `}
        >
          <Img
            fluid={post.image.asset.fluid}
            css={css`
              * {
                margin-top: 0;
              }
            `}
            style={{ width: "100px" }}
            alt={post.title}
          />
        </Link>
        <p
          css={css`
            position: relative;
            overflow: hidden;
            min-height: 2.5rem;
            max-height: 6.375rem;
            align-items: flex-start;
          `}
        >
          {post.excerpt}
        </p>
        <span
          css={css`
            background: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0),
              #fff
            );
            pointer-events: none;
            display: block;
            height: 2.5rem;
            position: absolute;
            right: 0;
            left: 0;
            bottom: 0;
          `}
        ></span>
        {/* <ReadLink to={post.slug}>read this post &rarr;</ReadLink> */}
      </div>
    </article>
  )
}
export default PostPreview
