import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import Logout from "./components/Logout";
import Login from "./components/Login";
import News from "./components/News";
import About from "./components/About";
import Dashboard from "./components/Dashboard";


function App() {

  return (
    
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
