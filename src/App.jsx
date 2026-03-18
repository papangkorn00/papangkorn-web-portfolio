import {Route, Routes} from "react-router-dom"
import "./App.css"
import Home from "./components/Home"
import Portfolio from "./components/Portfolio"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>

  )
}

export default App
