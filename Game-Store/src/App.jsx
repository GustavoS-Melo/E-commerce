import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Game from "./pages/Game"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Header/>
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Game />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
