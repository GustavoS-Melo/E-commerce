import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Game from "./pages/Game"
import Footer from "./components/Footer"
import Cart from "./pages/Cart"
import CheckoutSuccess from "./pages/CheckoutSuccess/index"
import CheckoutError from "./pages/CheckoutError/index"

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout/success" element={<CheckoutSuccess />} />
        <Route path="/checkout/error" element={<CheckoutError />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App