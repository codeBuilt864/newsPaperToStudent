import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import Logout from "./components/Logout";


function App() {

  return (
    
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
