import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import MainLayout from './Layout/MainLayout';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home></Home>
            </MainLayout>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <MainLayout>
              <About></About>
            </MainLayout>
          }
        ></Route>

        <Route
          path="/products"
          element={
            <MainLayout>
              <Products></Products>
            </MainLayout>
          }
        ></Route>

        <Route
          path="/products/:id"
          element={
            <MainLayout>
              <ProductDetails></ProductDetails>
            </MainLayout>
          }
        ></Route>
        <Route
          path="*"
          element={
            <MainLayout>
              <ErrorPage></ErrorPage>
            </MainLayout>
          }
        ></Route>

        <Route
          path="/caart"
          element={
            <MainLayout>
              <Cart></Cart>
            </MainLayout>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
