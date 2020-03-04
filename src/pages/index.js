import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import PostPreview from "../components/post-preview"
import usePosts from "../hooks/use-post.js"

export default () => {
  const posts = usePosts()

  return (
    <>
    <Hero />
    <Layout>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
    </>
  )
}
