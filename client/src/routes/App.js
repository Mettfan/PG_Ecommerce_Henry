import './App.css';
import Home from '../components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { Register } from '../features/Register';
import { Login } from '../features/Login';
import { DetailProduct } from '../features/DetailProduct';
import Promotions from '../components/Promotions/Promotions';
import NavBar from '../components/NavBar/NavBar';

function App() {
  return (

    <div className="App">
      
      <NavBar/>

      <Routes>
        <Route path="/" exact element={<Home/>} />
        
        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/promotions" element={<Promotions/>} />

        <Route path="/detail" element={<DetailProduct/>} />

      </Routes>
      
    </div>

  );
}

export default App;
