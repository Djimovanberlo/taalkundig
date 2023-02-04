import { gql } from 'graphql-request'

export const homePageQuery = gql`
  {
    blogPostCollection {
      items {
        image {
          title
          description
          width
          height
          url
        }
        title
        introduction
        slug
      }
    }
  }
`
