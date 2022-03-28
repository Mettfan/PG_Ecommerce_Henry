import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/home";
import Acerca from "./components/Acerca/acerca";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path= "/home" element= {<Home />}></Route> 
          <Route path= "/acerca/" element= {<Acerca />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
