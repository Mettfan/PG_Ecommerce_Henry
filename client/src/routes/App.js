import './App.css';
import NavBar from '../components/NavBar/NavBar';
import Home from '../components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { Register } from '../features/Register';
import { Login } from '../features/Login';
import Promotions from '../components/Promotions/Promotions';

function App() {
  return (

    <div className="App">
    
      <Routes>
        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home/>} />

        <Route path="/promotions" element={<Promotions/>} />
          
        <Route path="*" element={<NavBar/>} />

      </Routes>
      
    </div>

  );
}

export default App;
