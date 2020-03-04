import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityProject {
        edges {
          node {
            title
            slug {
              current
            }
            author {
              name
            }
            image {
              asset {
                fluid(maxHeight: 100, maxWidth: 100) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `)

  return data.allSanityProject.edges.map(post => ({
    title: post.node.title,
    author: post.node.author.name,
    slug: post.node.slug.current,
    image: post.node.image,
    excerpt: post.node.excerpt,
  }))
}

export default usePosts
