import "./App.css";
import HeroSection from "./Resume/Hero/HeroSection";
import Navbar from "./Resume/Navbar/Navbar";

function App() {
  return (
    <div className="w-full h-full bg-richblack-900 text-richblack-5">
      <Navbar/>
      <div className="py-4">
        <HeroSection/>
      </div>
    </div>  
  );
}

export default App;
