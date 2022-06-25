import { gql } from 'graphql-request';

export const CATEGORIES = gql`
  query MyQuery {
    categories {
      slug
      title
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
    }
  }
    `