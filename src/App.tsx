import "./App.css";
import ActaForm from "./components/ActaForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acta" element={<ActaForm />} />
      </Routes>
    </>
  );
}

export default App;
