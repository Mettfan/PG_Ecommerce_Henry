import './App.css';
import {Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar';
import Home from '../components/Home/Home';
import { Register } from '../features/Register';

function App() {
  return (
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />
        <Route path="*" element={<NavBar/>} />
      </Routes>
  );
}

export default App;
