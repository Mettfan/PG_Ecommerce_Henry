import './App.css';
import NavBar from '../components/NavBar/NavBar';
import Home from '../components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { Register } from '../features/Register';
import { Login } from '../features/Login';
//import { DetailProduct } from '../features/DetailProduct';
import Promotions from '../components/Promotions/Promotions';
import PromotionDetails from '../components/PromotionDetails/PromotionDetails';
import GetProducts from '../features/Admin/ProductActions/GetProduct/GetProducts'
import CreateProduct from '../features/Admin/ProductActions/CreateProduct/CreateProduct';
import DeleteProduct from '../features/Admin/ProductActions/DeleteProduct/DeleteProduct';
import ProductDetail from '../features/ProductDetail/ProductDetail';
import UserDetail from '../features/UserDetail/UserDetail';
import UserFavorites from '../features/UserFavorites/UserFavorites';
import ShoppingCart from '../features/ShoppingCart/ShoppingCart';
import Landing from '../features/Landing/Landing';
import EditSend from '../features/EditSend/EditSend';
import Map from '../features/Map/Map';
import SesionExpirada from '../features/SesionExpirada/SesionExpirada';
import Footer from '../components/Footer';
import UserOrderView from '../features/UserOrderView/UserOrderView';
import { CartPay } from '../features/CartPay/index';

import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import CreateUser from '../features/Admin/UserActions/CreateUser/CreateUser';
import OrderFinder from '../features/OrderFinder/OrderFinder';


function App() {

  let userValidated = useSelector( state => state.userReducer.status.user )
  const dispatch = useDispatch()
  const email = userValidated?.email

  useEffect(()=> {
    if(userValidated) {
      axios.post(`http://localhost:3001/usuario/shopping`, { productId: Number(60), userEmail: email}).then( response => {
        console.log(response.data)
        dispatch({ type: 'ADD_PRODUCT', payload: response.data })
      })
    }
  })

  return (

    
    <div className="App">

      <NavBar/>
      <Routes>
        {/* <Route exact path="/"  element={<RedirectRouteToHome />} /> */}
        <Route path="/sesionexpirada" element={<SesionExpirada />} />
        <Route path="/register" element={<Register />} />
        <Route exact path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home/>} />
        <Route path="/productos/:id" element={<ProductDetail/>} />

        <Route path="/promotions" element={<Promotions/>} />
        <Route path="/promotions/:id" element={<PromotionDetails/>} />
                
        <Route path="/user/profile" element={<UserDetail></UserDetail>} />
        <Route path="/user/favorites" element={<UserFavorites></UserFavorites>} />
        <Route path="/user/products" element={<ShoppingCart></ShoppingCart>} />
        <Route path="/user/products/pay" element={<CartPay></CartPay> } />
        <Route path="/user/products/send" element={<EditSend></EditSend> } />
        
        <Route path="/map" element={<Map></Map> } />
        <Route path="/order" element={<UserOrderView></UserOrderView> } />

        <Route path="/admin/products" element={<GetProducts></GetProducts>} />
        <Route path="/admin/product/create" element={<CreateProduct></CreateProduct> } />
        <Route path="/admin/product/delete" element={<DeleteProduct></DeleteProduct> } />

        <Route path="/admin/user/create" element={<CreateUser></CreateUser> } />
        <Route path="/order/finder/" element={<OrderFinder></OrderFinder> } />
        
      </Routes>
      <Footer />      
    </div>

  );
}

export default App;
