import { Routes, Route } from "react-router-dom";
import {
  HOME,
  ABOUT_US,
  CONTACT_US,
  PRODUCTS,
  INTERIOR_DECOR,
  DETAILS,
  CART,
  CHECKOUT,
  TERMS_OF_SERVICE,
  REFUND_POLICY
} from "./Pages/index";
import { MyQueryQuery } from './generated/categories_generated';

export const ROUTING = ({products}: {products: MyQueryQuery | undefined}) => {
  return (
    <Routes>
      <Route path="/" element={<HOME />} />
      <Route path="/products" element={<PRODUCTS products={products} />} />
      <Route path="/services" element={<INTERIOR_DECOR />} />
      <Route path="/about_us" element={<ABOUT_US />} />
      <Route path="/contact" element={<CONTACT_US />} />
      <Route path="/details" element={<DETAILS />} />
      <Route path="/cart" element={<CART />} />
      <Route path="/checkout" element={<CHECKOUT />} />
      <Route path="/terms_of_service" element={<TERMS_OF_SERVICE />} />
      <Route path="/refund_policy" element={<REFUND_POLICY />} />
    </Routes>
  );
};
