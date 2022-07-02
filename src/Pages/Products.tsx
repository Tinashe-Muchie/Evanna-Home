import { useEffect, useState } from 'react';
import { gql} from "@apollo/client";
import client from "../apolloClient";
import { useLocation } from 'react-router-dom';
import { MyQueryQuery } from '../generated/categories_generated';
import { PRODUCT_CARD } from '../Components/ProductCard';
import { Link } from 'react-router-dom';


export const PRODUCTS = () => {
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

  const location = useLocation();
  const data = location.state;

  const PRODUCTS = products?.categories.filter((category)=>category.slug === data)
  console.log(PRODUCTS)

  const product = PRODUCTS?.[0]
  const items = product?.product
  
  return (
    <div className="products_page_container">
      <div className="product_title">{product?.title}</div>
      <div className="products_wrapper">
        {
          items?.map((item)=> (
            <div key={item.id}>
              <Link 
                to="/details"
                state={{
                  item,
                  category_name: product?.title
                }}
                className="product_link"
              >
                <PRODUCT_CARD name={item.name} price={item.price} image={item.productPhoto} />
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};
