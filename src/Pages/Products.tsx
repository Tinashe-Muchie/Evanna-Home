import React, { useEffect, useState } from 'react';
import { gql} from "@apollo/client";
import client from "../apolloClient";


export const PRODUCTS = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await client.query({
        query: gql`
        query MyQuery {
          categories(first: 25) {
            slug
            title
            id
            product(first: 25) {
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
      });

      setProducts(data);
    };

    fetchProducts();
  }, []);
  console.log(products)

  return <div>products page</div>;
};
