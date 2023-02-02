import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Success from "./pages/Success";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products/:category" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/carts" element={<Cart />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
