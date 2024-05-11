import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import ProductDeatails from './pages/productDeatails/ProductDeatails';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import Layout from './componants/layout/Layout';
import ProtectedRoute from './customHooks/ProtectedRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:id" element={<ProductDeatails />} />
            <Route path="cart" element={<Cart />} />
            <Route
              path="checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
