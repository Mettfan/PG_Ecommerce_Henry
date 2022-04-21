import Booma_mapa2 from '../../assets/Booma_mapa2.jpg';
import './Map.css'

export default function Map(){
    return(
        <>
        <div className="container-ppal">

        <div className="map-container">
            <img src={Booma_mapa2} alt="map"  width="350" heigth="350" />   
        </div>
        <div className="tienda-container" >
            <h2>Nuestra Tienda</h2>
                <p>Acercate a conocer nuestros productos</p>
                <p>Encontraras las mejores marcas deportivas</p>
                <p>Atendido por los mejores asesores de ventas!</p>
                <br/>
                <p><b>Dirección</b> : 27 de Abril 2022</p>
                <p>Ciudad de Córdoba</p>
                <p>Argentina</p>
        </div>
        <div className="envios-container" >
            <h2>Envios</h2>
            <p>Te enviamos tu compra</p>
            <p> <b>sin cargo</b></p>
            <p> a cualquier parte del país !</p>    
            <p> En caso de estar buscado para otra zona</p>    
            <p> Podes comunicarte a nuestro correo</p>    
            <p> Para coordinar con nosotros!</p>    
        </div>
        
        </div>
        
        </>

    )
}

