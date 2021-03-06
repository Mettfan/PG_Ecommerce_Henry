import './App.css';
import NavBar from '../components/NavBar/NavBar';
import Home from '../components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { Register } from '../features/Register';
import { Login } from '../features/Login';
import GetProducts from '../features/Admin/ProductActions/GetProduct/GetProducts'
import PromotionDetails from '../components/PromotionDetails/PromotionDetails';
import Promotions from '../components/Promotions/Promotions';
import ProductDetail from '../features/ProductDetail/ProductDetail';
import UserDetail from '../features/UserDetail/UserDetail';
import UserFavorites from '../features/UserFavorites/UserFavorites';
import ShoppingCart from '../features/ShoppingCart/ShoppingCart';
import Landing from '../features/Landing/Landing';
import EditSend from '../features/EditSend/EditSend';
import EditUser from '../features/EditUser/EditUser';
import Map from '../features/Map/Map';
import SesionExpirada from '../features/SesionExpirada/SesionExpirada';
import Footer from '../components/Footer';
import UserOrderView from '../features/UserOrderView/UserOrderView';
import OrdersView from '../features/Admin/OrdersView/OrdersView';
import { CartPay } from '../features/CartPay/index';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import CreateUser from '../features/Admin/UserActions/CreateUser/CreateUser';
import HomeAdmin from '../features/Admin/HomeAdmin';
import OrderFinder from '../features/OrderFinder/OrderFinder';
import { CreateProduct } from '../features/Admin/ProductActions/CreateProduct/CreateProduct';
import Terminos from '../components/Terminos/Terminos';
import { DrawerEdit } from '../features/Admin/component/DrawerEdit';
import Cookies from 'universal-cookie';

import NewPassword from '../features/NewPassword/NewPassword';
import UpdateRol from '../features/UpdateRol/UpdateRol';

import CardSlim from '../components/CardSlim/CardSlim';




function App() {

  const cookie = new Cookies();
  const user = cookie.get('user');
  const dispatch = useDispatch();


  const email = cookie?.get('user').user?.email;
  
  const products = useSelector(state => state.shoppingCartReducer.productos.msg);
  console.log('email', email)
  console.log('products', products)
  
  cookie.set('shopping', products, { path: '/' });
  console.log('cookie', cookie.get('shopping'))


  return (

    <div className="App">
      <NavBar />

      <Routes>

        <Route path="/sesionexpirada" element={<SesionExpirada />} />
        <Route path="/register" element={<Register />} />
        <Route exact path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />
        <Route path="/productos/:id" element={<ProductDetail />} />

        <Route path="/promotions" element={<Promotions />} />
        <Route path="/promotions/:id" element={<PromotionDetails />} />

        <Route path="/promotions" element={<Promotions></Promotions>} />



        <Route path="/user/profile" element={<UserDetail></UserDetail>} />
        <Route path="/user/favorites" element={<UserFavorites></UserFavorites>} />
        <Route path="/user/products" element={<ShoppingCart></ShoppingCart>} />
        <Route path="/user/products/pay" element={<CartPay></CartPay>} />
        <Route path="/user/products/send" element={<EditSend></EditSend>} />
        <Route path='/user/newpassword' element={<NewPassword></NewPassword>} />
        <Route path="/editar" element={<EditUser></EditUser>} />

        <Route path="/map" element={<Map></Map>} />

        <Route path="/admin/products" element={<GetProducts></GetProducts>} />
        <Route path="/admin/orders" element={<OrdersView></OrdersView>} />
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/admin/updaterol" element={<UpdateRol />} />
        <Route path="/createproducts" element={<CreateProduct />} />
        <Route path="/drawerEdit" element={<DrawerEdit />} />

        <Route path="/order" element={<UserOrderView></UserOrderView>} />

        <Route path="/admin/user/create" element={<CreateUser></CreateUser>} />
        <Route path="/order/finder/" element={<OrderFinder></OrderFinder>} />

        <Route path='/terminos' element={<Terminos></Terminos>} />
        <Route path='/cardslim' element={<CardSlim/>} />

      </Routes>
      <Footer />
    </div>

  );
}

export default App;
