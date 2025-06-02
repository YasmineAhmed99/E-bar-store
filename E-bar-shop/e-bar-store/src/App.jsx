import './App.css';
import {Routes, Route } from 'react-router-dom';
import ProductsPage from './features/products/ProductsPage';
import Layout from './shared/Layout';
import CartPage from './features/cart/CartPage';

function App() {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<ProductsPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Route>
      </Routes>
  );
}

export default App;
