import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Goals from "./components/Goals";
import Ticklist from "./components/Ticklist";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ticklist" element={<Ticklist />} />
      </Routes>
    </div>
  );
}

export default App;
