import { gql } from '@apollo/client';

export const CATEGORIES_CONNECTION = gql`
query MyQuery {
    categoriesConnection {
      edges {
        node {
          id
          product {
            ... on Product {
              id
              name
              productPhoto {
                url
              }
              slug
              price
            }
          }
          title
          slug
        }
      }
    }
  }
`