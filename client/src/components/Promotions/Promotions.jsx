// import React from 'react'
// import Card from '../CardTemplate/Card'
// import NavBar from '../NavBar/NavBar'
// import './Promotions.css'

// const mockup = [


//     {
//         id: 1,
//         name: 'Nike Sportswear oversize - Mujer',
//         description: 'Combina tu estilo con esta amplia sudadera con capucha de tejido French terry. Las costuras sobrehiladas y elevadas, junto con las intensas combinaciones de colores, resaltan su estructura tipo patchwork para aportar un toque innovador a tus básicos para el día a día.',
//         size: 'S-M-L',
//         color: 'Negro',
//         stock: 1346,
//         price: 74.99,
//         discount: "%54",
//         image: 'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw7f481efc/products/AD_GL4171/AD_GL4171-1.JPG?sw=400&sh=400',
//         category: 'Sudaderas',
//         gender: 'Dama'
//     },
//     {
//         id: 2,
//         name: 'Jordan Essentials - Sudadera de chándal',
//         description: 'Luce un look básico con esta sudadera de chándal de tejido Fleece. Está confeccionada con un tejido French terry de alta densidad, cepillado para ofrecer suavidad, y cuenta con un ajuste oversize.',
//         size: 'S-M-L',
//         color: 'Sanddrift',
//         stock: 2050,
//         price: 79.99,
//         discount: "%24",
//         image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/eec5b441-96a1-49d6-a4c2-72dd5fa23b7a/jordan-essentials-sudadera-de-chandal-de-tejido-fleece-ZS5qzn.png',
//         category: 'Sudaderas',
//         gender: 'Dama'
//     },
//     {
//         id: 3,
//         name: 'Nike ACG Therma-FIT “Wolf Tree”',
//         description: 'Vístete con la calidez premium de la parte de arriba Nike ACG Therma-FIT “Wolf Tree”. Cuenta con un ajuste holgado, amplio y suave. Los detalles discretos rinden homenaje a Smith Rock de Oregón, que sirvió de inspiración para el diseño de esta sudadera de tejido Fleece. Este producto está confeccionado al 100 % con poliéster reciclado y fibras de nylon recicladas.',
//         size: 'S-M-L',
//         color: 'Hazel Rush/Negro/Summit White',
//         stock: 40,
//         price: 134.99,
//         discount: "%15",
//         image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e230fcfd-2237-4c6e-9028-ee370f0894e2/acg-wolf-tree-sudadera-de-media-cremallera-con-estampado-4tMccj.png',
//         category: 'Sudaderas',
//         gender: 'Dama'
//     },
//     {
//         id: 4,
//         name: 'Nike Dri-FIT Fast',
//         description: 'Los leggings Nike Dri-FIT Fast combinan la suavidad de uno de tus favoritos de siempre con la frescura que necesitas para correr cuando hace calor. El almacenamiento importa, por lo que hemos añadido tres bolsillos de distintos tamaños para guardar las llaves, el teléfono y la tarjeta para cuando lo necesites. Este producto se ha confeccionado con, al menos, un 75 % de fibras de poliéster reciclado.',
//         size: '7-8',
//         color: 'Madder Root',
//         stock: 205,
//         price: 60,
//         discount: "%50",
//         image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/871d2f33-cbf0-47be-afc2-7ade83102cb2/dri-fit-fast-leggings-de-running-de-7-8-de-talle-medio-cplSSN.png',
//         category: 'Pantalones',
//         gender: 'Dama'
//     },
//     {
//         id: 5,
//         name: 'Calza Nike Dri-FIT',
//         description: 'Vístete para tu carrera diaria con el mejor estilo. Estos leggings son ligeros y transpirables para mantener la frescura y la sujeción en cada pisada. Incluye muchos bolsillos para guardar tus básicos de forma segura. Este producto se ha confeccionado con, al menos, un 75 % de fibras de poliéster reciclado',
//         size: '7-8',
//         color: 'Sangria/Burdeos',
//         stock: 300,
//         price: 74.99,
//         discount: "%20",
//         image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/faad3920-de5b-4b1b-9713-4ed2c9043a11/dri-fit-leggings-de-7-8-de-talle-medio-de-running-4szWwC.png',
//         category: 'Pantalones',
//         gender: 'Dama'
//     },
//     {
//         id: 6,
//         name: 'Camiseta adidas Boca Juniors Local 2021',
//         description: 'Vístete para tu carrera diaria con el mejor estilo. Estos leggings son ligeros y transpirables para mantener la frescura y la sujeción en cada pisada. Incluye muchos bolsillos para guardar tus básicos de forma segura. Este producto se ha confeccionado con, al menos, un 75 % de fibras de poliéster reciclado',
//         size: '7-8',
//         color: 'Sangria/Burdeos',
//         stock: 300,
//         price: 74.99,
//         discount: "%20",
//         image: 'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwb3a31687/products/AD_GL4175/AD_GL4175-1.JPG?sw=400&sh=400',
//         category: 'Pantalones',
//         gender: 'Dama'
//     },
//     {
//         id: 7,
//         name: 'Remera adidas AEROREADY Level 3',
//         description: 'Vístete para tu carrera diaria con el mejor estilo. Estos leggings son ligeros y transpirables para mantener la frescura y la sujeción en cada pisada. Incluye muchos bolsillos para guardar tus básicos de forma segura. Este producto se ha confeccionado con, al menos, un 75 % de fibras de poliéster reciclado',
//         size: '7-8',
//         color: 'Sangria/Burdeos',
//         stock: 300,
//         price: 74.99,
//         discount: "%20",
//         image: 'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw48d7b268/products/AD_GN7312/AD_GN7312-1.JPG?sw=400&sh=400',
//         category: 'Pantalones',
//         gender: 'Dama'
//     },
//     {
//         id: 8,
//         name: 'Remera Nike Summer Fun 3',
//         description: 'Vístete para tu carrera diaria con el mejor estilo. Estos leggings son ligeros y transpirables para mantener la frescura y la sujeción en cada pisada. Incluye muchos bolsillos para guardar tus básicos de forma segura. Este producto se ha confeccionado con, al menos, un 75 % de fibras de poliéster reciclado',
//         size: '7-8',
//         color: 'Sangria/Burdeos',
//         stock: 300,
//         price: 74.99,
//         discount: "%20",
//         image: 'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwdbb0998d/products/NI_CU9699-010/NI_CU9699-010-1.JPG?sw=400&sh=400',
//         category: 'Pantalones',
//         gender: 'Dama'
//     },
//     {
//         id: 9,
//         name: 'Calza Lotto Smart',
//         description: 'Vístete para tu carrera diaria con el mejor estilo. Estos leggings son ligeros y transpirables para mantener la frescura y la sujeción en cada pisada. Incluye muchos bolsillos para guardar tus básicos de forma segura. Este producto se ha confeccionado con, al menos, un 75 % de fibras de poliéster reciclado',
//         size: '7-8',
//         color: 'Sangria/Burdeos',
//         stock: 300,
//         price: 74.99,
//         discount: "%20",
//         image: 'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwde8494be/products/LO_NIFW21093/LO_NIFW21093-1.JPG?sw=400&sh=400',
//         category: 'Pantalones',
//         gender: 'Dama'
//     },
//     {
//         id: 10,
//         name: 'Remera Under Armour Coldgear Armour Crew',
//         description: 'Vístete para tu carrera diaria con el mejor estilo. Estos leggings son ligeros y transpirables para mantener la frescura y la sujeción en cada pisada. Incluye muchos bolsillos para guardar tus básicos de forma segura. Este producto se ha confeccionado con, al menos, un 75 % de fibras de poliéster reciclado',
//         size: '7-8',
//         color: 'Sangria/Burdeos',
//         stock: 300,
//         price: 74.99,
//         discount: "%20",
//         image: 'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwb0c1c452/products/UA_1298214-001/UA_1298214-001-1.JPG?sw=400&sh=400',
//         category: 'Pantalones',
//         gender: 'Dama'
//     },
//     {
//         id: 11,
//         name: 'Camiseta Nike Dri-Fit Element Run Division',
//         description: 'Vístete para tu carrera diaria con el mejor estilo. Estos leggings son ligeros y transpirables para mantener la frescura y la sujeción en cada pisada. Incluye muchos bolsillos para guardar tus básicos de forma segura. Este producto se ha confeccionado con, al menos, un 75 % de fibras de poliéster reciclado',
//         size: '7-8',
//         color: 'Sangria/Burdeos',
//         stock: 300,
//         price: 74.99,
//         discount: "%20",
//         image: 'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw7a9e78e6/products/NI_DA0430-010/NI_DA0430-010-1.JPG?sw=400&sh=400',
//         category: 'Pantalones',
//         gender: 'Dama'
//     },
//     {
//         id: 12,
//         name: 'Camiseta adidas Boca Juniors Tercera 2021',
//         description: 'Vístete para tu carrera diaria con el mejor estilo. Estos leggings son ligeros y transpirables para mantener la frescura y la sujeción en cada pisada. Incluye muchos bolsillos para guardar tus básicos de forma segura. Este producto se ha confeccionado con, al menos, un 75 % de fibras de poliéster reciclado',
//         size: '7-8',
//         color: 'Sangria/Burdeos',
//         stock: 300,
//         price: 74.99,
//         discount: "%20",
//         image: 'https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwf18c4d87/products/AD_GK3334/AD_GK3334-1.JPG?sw=400&sh=400',
//         category: 'Pantalones',
//         gender: 'Dama'
//     },
//     {
//         id: 13,
//         name: 'Nike Air Zoom Pegasus',
//         description: 'Vístete para tu carrera diaria con el mejor estilo. Estos leggings son ligeros y transpirables para mantener la frescura y la sujeción en cada pisada. Incluye muchos bolsillos para guardar tus básicos de forma segura. Este producto se ha confeccionado con, al menos, un 75 % de fibras de poliéster reciclado',
//         size: '7-8',
//         color: 'Sangria/Burdeos',
//         stock: 300,
//         price: 34.99,
//         discount: "%20",
//         image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/16b6acf7-9be3-4f81-9513-322382da742f/air-zoom-pegasus-38-zapatillas-de-running-carretera-zkH56D.png',
//         category: 'Pantalones',
//         gender: 'Dama'
//     },
//     {
//         id: 14,
//         name: 'Nike Wildhorse 7',
//         description: 'Vístete para tu carrera diaria con el mejor estilo. Estos leggings son ligeros y transpirables para mantener la frescura y la sujeción en cada pisada. Incluye muchos bolsillos para guardar tus básicos de forma segura. Este producto se ha confeccionado con, al menos, un 75 % de fibras de poliéster reciclado',
//         size: '7-8',
//         color: 'Sangria/Burdeos',
//         stock: 300,
//         price: 74.99,
//         discount: "%10",
//         image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8f15f60f-151f-4e0f-8625-d28491814cb6/air-zoom-superrep-3-zapatillas-las-clases-de-hiit-bjJmZ8.png',
//         category: 'Pantalones',
//         gender: 'Dama'
//     },
//     {
//         id: 15,
//         name: 'Campera Nike ESC',
//         description: 'Vístete para tu carrera diaria con el mejor estilo. Estos leggings son ligeros y transpirables para mantener la frescura y la sujeción en cada pisada. Incluye muchos bolsillos para guardar tus básicos de forma segura. Este producto se ha confeccionado con, al menos, un 75 % de fibras de poliéster reciclado',
//         size: '7-8',
//         color: 'Sangria/Burdeos',
//         stock: 300,
//         price: 74.99,
//         discount: "%20",
//         image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f66d6bcb-f7a8-423a-bfef-bb8acdae9e62/esc-sudadera-con-capucha-de-tejido-fleece-con-cremallera-completa-cgmBnH.png',
//         category: 'Pantalones',
//         gender: 'Dama'
//     },
//     {
//         id: 16,
//         name: 'Jordan Dri-FIT Air',
//         description: 'Vístete para tu carrera diaria con el mejor estilo. Estos leggings son ligeros y transpirables para mantener la frescura y la sujeción en cada pisada. Incluye muchos bolsillos para guardar tus básicos de forma segura. Este producto se ha confeccionado con, al menos, un 75 % de fibras de poliéster reciclado',
//         size: '7-8',
//         color: 'Sangria/Burdeos',
//         stock: 300,
//         price: 14.99,
//         discount: "%70",
//         image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e00fbf3d-908a-481b-8265-69a92ad0e5af/jordan-dri-fit-air-sudadera-con-capucha-de-tejido-fleece-VMbzfg.png',
//         category: 'Pantalones',
//         gender: 'Dama'
//     },
//     {
//         id: 17,
//         name: 'Nike Dri-FIT F.C. Libero',
//         description: 'Vístete para tu carrera diaria con el mejor estilo. Estos leggings son ligeros y transpirables para mantener la frescura y la sujeción en cada pisada. Incluye muchos bolsillos para guardar tus básicos de forma segura. Este producto se ha confeccionado con, al menos, un 75 % de fibras de poliéster reciclado',
//         size: '7-8',
//         color: 'Sangria/Burdeos',
//         stock: 300,
//         price: 74.99,
//         discount: "%50",
//         image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4387117d-10d6-4eef-b752-95f01a6e9082/dri-fit-fc-libero-pantalon-de-futbol-dVMvpL.png',
//         category: 'Pantalones',
//         gender: 'Dama'
//     },
//     {
//         id: 18,
//         name: 'Nike Air',
//         description: 'Vístete para tu carrera diaria con el mejor estilo. Estos leggings son ligeros y transpirables para mantener la frescura y la sujeción en cada pisada. Incluye muchos bolsillos para guardar tus básicos de forma segura. Este producto se ha confeccionado con, al menos, un 75 % de fibras de poliéster reciclado',
//         size: '7-8',
//         color: 'Sangria/Burdeos',
//         stock: 300,
//         price: 74.99,
//         discount: "%10",
//         image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0c933c07-e8e5-4c1b-b022-979c26448547/air-jogger-de-tejido-fleece-cepillado-en-la-parte-trasera-fHTgw4.png',
//         category: 'Pantalones',
//         gender: 'Dama'
//     },
//     {
//         id: 19,
//         name: 'Nike Sportswear French terry - Niño',
//         description: 'Vístete para tu carrera diaria con el mejor estilo. Estos leggings son ligeros y transpirables para mantener la frescura y la sujeción en cada pisada. Incluye muchos bolsillos para guardar tus básicos de forma segura. Este producto se ha confeccionado con, al menos, un 75 % de fibras de poliéster reciclado',
//         size: '7-8',
//         color: 'Sangria/Burdeos',
//         stock: 300,
//         price: 74.99,
//         discount: "%30",
//         image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/061909dc-9910-4bd9-aec4-b9a226543efa/sportswear-sudadera-de-tejido-french-terry-nino-R0VmDv.png',
//         category: 'Pantalones',
//         gender: 'Dama'
//     },
// ]

// function Promotions() {
//   return (
//     <>

    

//     <img src="https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Moov-Library/default/dw498d0dc7/01abr/full3pony.jpg?sw=1440&sfrm=png" alt="" width="100%" />

//     <h1>Descuentos</h1>

//     <div className="promotions-cardcontainer">
//         {mockup.map((el) => {
//             return (

//             <div>
//                 <Card
//                         key={el.id}
//                         image={el.image}
//                         name={el.name}
//                         discount={el.discount}
//                         price={el.price}
//                         id={el.id}
//                         />
//             </div>
//             )
//         })}
//     </div>
//     </>
//   )
// }

// export default Promotions

//----------------------------------------------------------

import React from 'react'
import Card from '../CardTemplate/Card'
import NavBar from '../NavBar/NavBar'
import './Promotions.css'
import {useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {useEffect} from 'react'
import {getProducts} from '../../redux/actions/productActions'
import Cookies from 'universal-cookie';








function Promotions() {

  let cookie = new Cookies()
  const dispatch= useDispatch()

  useEffect(() => {
    dispatch(getProducts());
}, [dispatch]);

  
  const productos= useSelector( (state) => state.productReducer.productos) ||cookie.get('product')
  console.log('productos', productos)
  const discount=productos.filter(el=>el.discount!==0)
  console.log('discount', discount)
  
  
  return (
    <>

    

    <img src="https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Moov-Library/default/dw498d0dc7/01abr/full3pony.jpg?sw=1440&sfrm=png" alt="" width="100%" />

    <h1>Descuentos</h1>

    <div className="promotions-cardcontainer">
        

{
  
  discount?.map((el,i) => {
               return(
                
                <div>
               <Card  
                        key={i}
                        image={el.image}
                        name={el.name}
                        id={el.id}
                        price={el.price}
                        discount={el.discount}
                        />
                        
                        </div>
                        
                  );})}
                 
    </div>
    </>
  )}


export default Promotions