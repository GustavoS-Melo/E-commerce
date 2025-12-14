import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Game from "./pages/Game"
import Footer from "./components/Footer"
import Cart from "./pages/Cart"

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App