import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components//Navbar/Navbar"; 
import Room from "./components/Room";

const App = () => {

  return (
    <BrowserRouter>
    <Navbar /> 
    <Routes>
      <Route path="/" element={<HomePage /> } />
      <Route path="room/:roomPath" element={<Room /> } />
      {/* <Route path="room/:roomPath" element={<RoomDetails /> } />  */}
  
    </Routes>
    </BrowserRouter>
  )
 

};

export default App;
