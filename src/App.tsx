import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components//Navbar/Navbar"; 
import Room from "./components/Room";
import { InventoryProvider } from "./components/InventoryContext";


const App = () => {

  return (
    <InventoryProvider >
    <BrowserRouter>
    <Navbar /> 
    <Routes>
      <Route path="/" element={<HomePage /> } />
      <Route path="room/:roomPath" element={<Room /> } />
    </Routes>
    </BrowserRouter>
    </InventoryProvider>
  );
 
};

export default App;
