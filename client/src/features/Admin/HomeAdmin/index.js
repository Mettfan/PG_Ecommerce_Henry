import {React, useState} from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import GetProduct from '../ProductActions/GetProduct/GetProducts';
import logo from '../../../assets/Booma_logo_backless_white.png'
import { DrawerEdit } from '../component/DrawerEdit';

function HomeAdmin() {
  const [drawerActive, setDraweActive] = useState(false)
  const [state, setState] = useState("")
  const [productSend, setProductSend] = useState(null)

  const activeDrawer = () => {
      setDraweActive(!drawerActive)
  }

  const receiveProduct = (product) => {
    setProductSend(product)
  }

  const DrawerContents = () => (
      <div className="DrawerContents__Container"><DrawerEdit product={productSend} activeDrawer={activeDrawer} /></div>
  );

  const Drawer = ({ drawerActive }) => (
      <div className={`Drawer__Container ${drawerActive ? "Drawer__Container--isOpen" : ''}`}>
          <DrawerContents />
      </div>
  );

  const handleView = (select) => {
    setState(select)
  }
  return (
    <div className="HomeAdmin-container">
        <Drawer drawerActive={drawerActive} />
      <div className="admin-drawer">
        <img src={logo} className="logo" alt="a " />
        <Link to= '/createproducts' className="link-home"><p>Crear producto</p></Link>
        <button className="link-home" onClick={() => handleView("")}><p>Home</p></button>
        <button className="link-home" onClick={() => handleView("")}><p>Órdenes</p></button>
        <button className="link-home" onClick={() => handleView("")}><p>Manejo de usuario</p></button>
        <button className="link-home" onClick={() => handleView("")}><p>Mi cuenta</p></button>
        {/* <p>Cerrar sesión</p> */}
      </div>
      <div className="admin-info">
        {
          state === "" ? <GetProduct receiveProduct={receiveProduct} activeDrawer={activeDrawer} />
          // : state === "orders" ? <Orders /> 
          // : state === "userManagment" ? <UserManagment />
          // : state === "myAccount" ? <MyAccount />
          : null
        }
      </div>
    </div>
  )
}

export default HomeAdmin