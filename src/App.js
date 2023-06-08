import "./css/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { products } from "./products";
import Layout from "./components/Layout";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import ContextProvider from "./components/Context";
import Cart from "./components/Cart";

export default function App() {
  return (
    <div>
      <ContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path=":id"
                element={<ProductDetail products={products} />}
              />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}
