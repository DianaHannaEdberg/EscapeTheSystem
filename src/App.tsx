import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/HomePage/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage /> } />
      <Route path="ServerRoom" element={<ServerRoom /> } />
      <Route path="SecurityRoom" element={<SecurityRoom /> } />
      <Route path="Archives" element={<Archives /> } />
      <Route path="ReactorRoom" element={<ReactorRoom /> } />
      <Route path="Vault" element={<Vault /> } />
      <Route path="ExitNode" element={<ExitNode /> } />
    </Routes>
    </BrowserRouter>
  )


};

export default App;
