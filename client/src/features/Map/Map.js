import Booma_mapa2 from '../../assets/Booma_mapa2.jpg';
import './Map.css'

export default function Map(){
    return(
        <>
        <div className="map-container">
        <img src={Booma_mapa2} alt="map"  width="350" heigth="350" />   
        </div>
        <div className="tienda-container" >
            <h2>Nuestra Tienda</h2>
<p>Acercate a conocer nuestros productos</p>
<p>Encontraras las mejores marcas deportivas</p>
<br/>
<p><b>Dirección</b> : 27 de Abril 2022</p>
<p>Ciudad de Córdoba</p>
<p>Argentina</p>

        </div>
        <div className="envios-container" >
            <h2>Envios</h2>
<p>Te enviamos tu compra</p>
<p> <b>sin cargo</b></p>
<p> a cualquier parte del país</p>    
        </div>
        
        
        </>

    )
}

//https://goo.gl/maps/8sUScVbHurNWywQr6
//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.3179442129367!2d-64.22403228485223!3d-31.40536508140783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432992c1e40924d%3A0xb823f9a88fecd467!2sBooma!5e0!3m2!1ses-419!2sar!4v1649877960921!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>