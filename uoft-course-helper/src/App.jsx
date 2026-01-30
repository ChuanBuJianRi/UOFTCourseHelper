import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Codes from "./pages/Codes";
import Comment from "./pages/Comment";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/codes" element={<Codes />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
