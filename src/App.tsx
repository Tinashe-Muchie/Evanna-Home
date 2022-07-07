import { useState, useEffect } from 'react'
import "./styles.css";
import { HEADER, FOOTER } from "./Components/index";
import { ROUTING } from "./Routing";
import { ApolloProvider } from "@apollo/client";
import client from './apolloClient';
import { CartProvider } from "react-use-cart";
import { MyQueryQuery } from './generated/categories_generated';
import { gql } from '@apollo/client';

export default function App() {

  const [products, setProducts] = useState<MyQueryQuery | undefined>(undefined);

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

  return (
    <ApolloProvider client={client}>
      <CartProvider>
        <div className="app_wrapper">
        <main className="main_content">
          <HEADER />
          <ROUTING products={products} />
        </main>
        <footer className="footer">
          <FOOTER />
        </footer>
        </div>
      </CartProvider>
    </ApolloProvider>
  );
}
