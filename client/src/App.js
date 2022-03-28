import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
