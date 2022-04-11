/* eslint-disable import/no-anonymous-default-export */
import './index.css';
import CardSlim from "../../components/CardSlim/CardSlim";
import { Link } from "react-router-dom";

const ProductosParaMostrar = [
    {
        name: 'Nike Sportswear oversize - Mujer',
        description: 'Combina tu estilo con esta amplia sudadera con capucha de tejido French terry. Las costuras sobrehiladas y elevadas, junto con las intensas combinaciones de colores, resaltan su estructura tipo patchwork para aportar un toque innovador a tus básicos para el día a día.',
        size: 'S-M-L',
        color: 'Negro',
        stock: 1346,
        price: 74.99,
        image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a5aef494-2caa-4b56-a2b9-f886a08e2988/sportswear-sudadera-con-capucha-oversize-C1lS6b.png',
        category: 'Sudaderas',
        gender: 'Dama',
        // discount: null
    },
    {
        name: 'Jordan Essentials - Sudadera de chándal',
        description: 'Luce un look básico con esta sudadera de chándal de tejido Fleece. Está confeccionada con un tejido French terry de alta densidad, cepillado para ofrecer suavidad, y cuenta con un ajuste oversize.',
        size: 'S-M-L',
        color: 'Sanddrift',
        stock: 2050,
        price: 79.99,
        image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/eec5b441-96a1-49d6-a4c2-72dd5fa23b7a/jordan-essentials-sudadera-de-chandal-de-tejido-fleece-ZS5qzn.png',
        category: 'Sudaderas',
        gender: 'Dama',
        // discount: 15
    },
    {
        name: 'Nike ACG Therma-FIT “Wolf Tree”',
        description: 'Vístete con la calidez premium de la parte de arriba Nike ACG Therma-FIT “Wolf Tree”. Cuenta con un ajuste holgado, amplio y suave. Los detalles discretos rinden homenaje a Smith Rock de Oregón, que sirvió de inspiración para el diseño de esta sudadera de tejido Fleece. Este producto está confeccionado al 100 % con poliéster reciclado y fibras de nylon recicladas.',
        size: 'S-M-L',
        color: 'Hazel Rush/Negro/Summit White',
        stock: 40,
        price: 134.99,
        image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e230fcfd-2237-4c6e-9028-ee370f0894e2/acg-wolf-tree-sudadera-de-media-cremallera-con-estampado-4tMccj.png',
        category: 'Sudaderas',
        gender: 'Dama',
        // discount: 20
    }
]

export default function ( ) {
    return (<>
        {ProductosParaMostrar && 
            <div className="fav-cart-container">
                <div className="into-container-fav">
                    <div className="cart-container-1">
                        <div className="title-container-fav">
                            <h2>FAVORITOS</h2>
                        </div>
                            { ProductosParaMostrar && ProductosParaMostrar?.map((product, i) => {
                            return <CardSlim 
                            key= { i }
                            index= { i }
                            image= { product?.image }
                            name= { product?.name }
                            size= { product?.size }
                            color= { product?.color }
                            // discount= { product?.discount }
                            discount = { 0 }
                            price= { product?.price }
                            />
                        })}
                        </div>
                </div>
            </div>              
        }
    </>)
}