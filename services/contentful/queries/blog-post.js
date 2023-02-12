import { gql } from 'graphql-request'

export const blogPostDetailQuery = slug => gql`
  {
    blogPostCollection(where: {slug: "${slug}"}, limit: 1) {
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
        content {
          json
          links {
            assets {
              block {
                title
                description
                width
                height
                url
                sys {
                  id
                }
              }
            }
            entries {
              block {
                sys {
                  id
                }
                __typename
              }
            }
          }
        }
        sys {
          publishedAt
        }
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
