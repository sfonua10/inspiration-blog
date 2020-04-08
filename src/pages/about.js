import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>About Me</h1>
    <p>
      If you would like to contribute and have your blog featured, contact
      Josiah at gospelinsights@gmail.com
    </p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
)
