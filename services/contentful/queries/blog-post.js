import { gql } from 'graphql-request'

export const blogPostDetailQuery = slug => gql`
  {
    blogPostCollection(where: {slug: "${slug}"}) {
      items {
        title
        introduction
      }
    }
  }
`

export const blogPostCollectionSlugs = gql`
  {
    blogPostCollection {
      items {
        slug
      }
    }
  }
`
