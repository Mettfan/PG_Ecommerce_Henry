import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import GetProduct from '../ProductActions/GetProduct/GetProducts';
import './index.css';
import logo from '../../../assets/Booma_logo_backless_white.png'
import { CreateProduct } from '../ProductActions/CreateProduct/CreateProduct';
import EditCard from '../component/EditCard';

function HomeAdmin() {
  const [drawerActive, setDraweActive] = useState(false)
  const [state, setState] = useState("")

  const activeDrawer = () => {
      setDraweActive(!drawerActive)
      console.log('activado')
  }

  const DrawerContents = () => (
      <div className="DrawerContents__Container"><EditCard activeDrawer={activeDrawer} /></div>
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
        {/* <Link to= '/home' className="link-home"><p>Home page</p></Link> */}
        <button className="link-home" onClick={() => handleView("")}><p>Home</p></button>
        <button className="link-home" onClick={() => handleView("create")}><p>Crear producto</p></button>
        <p>Manejo de usuario</p>
        <p>Órdenes</p>
        <p>Mi cuenta</p>
        <p>Cerrar sesión</p>
      </div>
      <div className="admin-info">
        {
          state === "" ? <GetProduct activeDrawer={activeDrawer} />
          : state === "create" ? <CreateProduct /> 
          : null
        }
        
         
      </div>

    </div>
  )
}

export default HomeAdmin