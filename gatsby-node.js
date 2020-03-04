exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allSanityProject {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }

  const posts = result.data.allSanityProject.edges;

  posts.forEach(post => {
    actions.createPage({
      path: post.node.slug.current,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: post.node.slug.current,
      }
    });
  })
}