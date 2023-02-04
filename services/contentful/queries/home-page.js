import { gql } from 'graphql-request'

export const homePageQuery = gql`
  {
    blogPostCollection {
      items {
        title
        introduction
      }
    }
  }
`
