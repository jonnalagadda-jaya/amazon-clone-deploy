import React from 'react';
import { Route, Outlet, RouterProvider, createRoutesFromElements, createBrowserRouter, ScrollRestoration } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import { productsData } from './api/api';
import Cart from './pages/Cart';
import Signin from './pages/Signin';
import Registration from './pages/Registration';
import ProductsDetails from './pages/ProductsDetails';

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
}
function App(){
  const router = createBrowserRouter (createRoutesFromElements(
    <Route>
    <Route path="/" element={<Layout />}>
      <Route index element = {<Home />} loader={productsData}></Route> 
      <Route path="/cart" element={<Cart />}></Route>
      </Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/productDeatils/:id" element={<ProductsDetails />}></Route>
      </Route>
      
  ))
  
  return (
  <div className="font-bodyFont bg-gray-100">
<RouterProvider router={router}></RouterProvider>
  </div>
)
  }

export default App;