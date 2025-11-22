import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddNew from "./pages/AddNew";
import Stats from "./pages/Stats";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddNew />} />
        <Route path="/stats/:code" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
