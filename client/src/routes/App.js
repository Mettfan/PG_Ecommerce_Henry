import './App.css';
import Home from '../components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { Register } from '../features/Register';
import { Login } from '../features/Login';
import { DetailProduct } from '../features/DetailProduct';
import Promotions from '../components/Promotions/Promotions';
import NavBar from '../components/NavBar/NavBar';
import PromotionDetails from '../components/PromotionDetails/PromotionDetails';
import GetProducts from '../features/Admin/ProductActions/GetProduct/GetProducts'
import CreateProduct from '../features/Admin/ProductActions/CreateProduct/CreateProduct';


function App() {
  return (

    <div className="App">
      
      <NavBar/>

      <Routes>
        <Route path="/" exact element={<Home/>} />
        
        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/productos/:id" element={<DetailProduct/>} />

        <Route path="/promotions" element={<Promotions/>} />
        <Route path="/promotions/:id" element={<PromotionDetails/>} />
          
        <Route path="*" element={<NavBar/>} />

        <Route path="/admin/products" element={<GetProducts></GetProducts>} />

        <Route path="/admin/product/create" element={<CreateProduct></CreateProduct> } />
      </Routes>
      
    </div>

  );
}

export default App;
