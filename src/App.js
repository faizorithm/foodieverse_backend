import { useState } from "react";
import Navbar from "./Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./Footer";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart([...cart, item]);
  }

  function removeFromCart(index) {
    setCart(cart.filter((_, i) => i !== index));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              clearCart={clearCart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;