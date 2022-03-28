import React from "react";
import {Link} from 'react-router-dom';
import style from './inicio.module.css';

function LandingPage() {
  return (
    
      <div >
        
        <Link className={style.btnInicio} to="/home">BIENVENIDO</Link>
      </div>
  
  );
}

export default LandingPage;