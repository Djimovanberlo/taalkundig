import { gql } from "graphql-request";

export const blogPostDetailQuery = (slug) => gql`
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
                ... on TranslationTable {
                  table {
                    json
                  }
                  caption {
                    json
                  }
                }
                ... on ExampleTable {
                  table {
                    json
                  }
                  caption {
                    json
                  }
                }
                ... on ComparativeTable {
                  table {
                    json
                  }
                  caption {
                    json
                  }
                }
                ... on EmbeddedImage {
              	  caption {
                    json
                  }
                  image {
                    url
                    width
                    height
                  }
                }
              }
              inline {
                sys {
                  id
                }
                __typename
                ... on InlineAudio {
                  audioAsset {
                    url
                  }
                }
              }
            }
          }
        }
        sidenotesCollection {
          items {
            pxTop
            content {
              json
            }
          }
        }
        sys {
          publishedAt
        }
      }
    }
  }
`;

export const blogPostCollectionSlugs = gql`
  {
    blogPostCollection {
      items {
        slug
      }
    }
  }
`;
