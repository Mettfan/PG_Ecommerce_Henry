import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Register } from '../features/Register';
import { Login } from '../features/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
