import { gql } from 'graphql-request'

export const aboutPageQuery = gql`
  {
    aboutPage(id: "6HqXFMs4B0GTuip4pFnrIB") {
      aboutUs {
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
              ... on TranslationTable {
                table {
                  json
                }
              }
              ... on ExampleTable {
                table {
                  json
                }
              }
              ... on ComparativeTable {
                table {
                  json
                }
              }
              ... on EmbeddedImage {
              	caption {
                  json
                }
                image {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
