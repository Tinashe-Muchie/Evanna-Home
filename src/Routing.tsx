import { Routes, Route } from "react-router-dom";
import {
  HOME,
  ABOUT_US,
  CONTACT_US,
  PRODUCTS,
  INTERIOR_DECOR
} from "./Pages/index";

export const ROUTING = () => {
  return (
    <Routes>
      <Route path="/" element={<HOME />} />
      <Route path="/products" element={<PRODUCTS />} />
      <Route path="/services" element={<INTERIOR_DECOR />} />
      <Route path="/about_us" element={<ABOUT_US />} />
      <Route path="/contact" element={<CONTACT_US />} />
    </Routes>
  );
};
