import { gql } from '@apollo/client';

export const CATEGORIES = gql`
    query MyQuery {
        categories {
          id
          product {
            ... on Product {
              id
              name
              availability
              price
              productDescription
              slug
              productPhoto {
                id
                url
              }
            }
          }
          slug
          title
        }
      }
    `