import '@mantine/core/styles.css';

import { MultiLayout } from './layout/MultiLayout.tsx';
import { Product } from './pages/Product.tsx';
import { Products } from './pages/Products.tsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MultiLayout />}>
          <Route index element={<Products />} />
          <Route path="/product" element={<Products />}></Route>
          <Route path="/product/:id" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}