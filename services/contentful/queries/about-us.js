import { gql } from 'graphql-request'

export const aboutPageQuery = gql`
  {
    aboutPage(id: "6HqXFMs4B0GTuip4pFnrIB") {
      aboutUs {
        json
      }
    }
  }
`
