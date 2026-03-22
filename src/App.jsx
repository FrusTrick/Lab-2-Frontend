import Home from "./pages/Home"
import About from "./pages/About"
import Resume from "./pages/Resume"
import Portfolio from "./pages/Portfolio"
import NavBar from "./components/NavBar"
import{ HashRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </HashRouter>
  )
}

export default App
