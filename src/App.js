import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Resume/Navbar/Navbar";
import MainPage from "./Resume/Hero/MainPage";

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
        <Navbar/>
        <Routes>
            <Route path="/" element={<MainPage/>} /> 
        </Routes>
    </div> 
  );
}

export default App;
