import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import LoginForm from "./pages/LoginForm";
import Order from "./pages/Order";
import PreviousOrders from "./pages/PreviousOrders";
import ProductDetail from "./pages/ProductDetail";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import Team from "./pages/Team";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="order" element={<Order />} />
          <Route path="previous-orders" element={<PreviousOrders />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signup" element={<Signup />} />
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
