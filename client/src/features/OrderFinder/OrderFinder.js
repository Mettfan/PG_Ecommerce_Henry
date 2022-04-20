import axios from "axios"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import Cookies from "universal-cookie"
import './OrderFinder.css'
import { useNavigate } from "react-router-dom"
import { deleteProductFavorite } from "../../redux/actions/favoriteActions"
import { useDispatch } from "react-redux"
import { addOrder } from "../../redux/actions/orderActions"
export default function OrderFinder()  {
    let nav = useNavigate()
    let dispatch = useDispatch()
    let cookie = new Cookies()
    let [searchParams, setSearchParams] = useSearchParams()
    let payment_id = searchParams.get('payment_id') || cookie.get('searchId')
    let [state, setState] = useState({
        searchId: payment_id || cookie.get('searchId'),
        orderFound: {}
    })
    
    let token = 'APP_USR-4206952764594865-041216-86c66dae1de7c07e9a7a855ed313ba08-355601564'
   useEffect(()=> { 
       if (payment_id){
           cookie.set('searchId', payment_id )
            axios.post('http://localhost:3001/usuario/order', {email: cookie.get('user')?.user?.email, payment_id: payment_id}).then( response => {
                console.log(response.data);
            })

        //    cookie.get('shopping')?.msg?.forEach(product => {

        //        deleteProductFavorite({productId: product?.id, userEmail: cookie.get('user')?.user?.email } )
        //    })
           
           handleOnSubmit()
       } 
   }, [])
    let handleOnChange = ( e ) => {
        setState({...state, searchId: e.target.value })
    } 
    let handleOnSubmit = async ( e ) =>  {
        e?.preventDefault()
        await axios({
            method: 'get', //you can set what request you want to be
            url: 'https://api.mercadopago.com/v1/payments/'+state.searchId,
            
            headers: {
              Authorization: 'Bearer ' + token
            }
          }).then( response => {
            console.log(response.data)
            setState({...state, orderFound: response.data})
        }).catch( error  => {
            setState({...state, orderFound: {...state.orderFound, status: 'Not found', status_detail: 'Not found'}} )
        })  
        console.log(state, "submited!")
    }
    let goToOrder = async ( ) => {
        nav('/order')
    }
    let datas = state.orderFound.additional_info?.items
    return ( <>

        <div className="orderfinder">           
            <form className="formFinder" onSubmit={ ( e ) => handleOnSubmit(e)}>
                <input className="formInputFinder" type={'text'} placeholder='Copie y pegue su numero de seguimiento...' value= {state.searchId || cookie.get('searchId') }  onChange = {( e ) => handleOnChange(e)} ></input>
                <button className="formButtonFinder" type="submit">BUSCAR ORDEN</button>
            </form>
            {payment_id && <div>
                El numero de seguimiento de tu ultima orden es: <b>{' '+payment_id}</b>

            </div>}
            <div>
                /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
            </div>
            <div>
                ----------------------------------------------------------
            </div>
            <div className="status_pad">
                {/* La siguiente parte es la imagen que se renderizara de acuerdo al estado de la transaccion */}
                {state.orderFound && <img className="orderImgState" src={state.orderFound.status === 'pending'?
                'https://images.vexels.com/media/users/3/142363/isolated/preview/76cc00e3681f38ed4956be2394cccd38-reloj-de-pared-plano-de-oficina.png':
                state.orderFound.status === 'approved' ? 'https://www.pngkey.com/png/full/26-267424_icon-check-tick-transparent.png': state.orderFound.status === 'rejected' || state.orderFound.status_detail === 'Not Found'?'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Cross_red_circle.svg/1024px-Cross_red_circle.svg.png':
                ''
                } alt=''></img>}

                {/* El estado dela transaccion  */}
                <div>
                {state.orderFound && state.orderFound.status_detail}
                </div>

               
            </div>
            <div>
                {/* En la siguiente variable comentada se guardan los productos de la transaccion */}
            {/* {state && JSON.stringify(state.orderFound.additional_info.items)} */}
            </div>
        </div>
        <div >
      <div>
   
       { datas && datas?.map((product) => {
            return (
                <div >
      <div><img src={ product.picture_url } alt="imagen rota" width="70px"></img></div>
      <div><h5> {product.title}</h5></div>
      <div>Categoria: {product.category_id}  </div>
      {/* <div>Description: {product.description}</div> */}
      <div>Cantidad: {product.quantity}</div>
      <div>Precio: $ {product.unit_price} </div>
      <div>-----------------------------------------------</div>
                </div>
             )
            })}:
   </div>
    {/* El boton que te redirige al ticket */}
                {state.orderFound.status === 'pending' && <button className="goOrder"  onClick={( ) =>  goToOrder() }> Ver Orden</button>  }
    <div>
                {/* {state.orderFound.status === 'pending' && <button onClick={( ) => window.location.href = state.orderFound.transaction_details?.external_resource_url }> Ticket</button>  } */}
                {<a  target={'_blank'} href={state.orderFound.transaction_details?.external_resource_url} download= 'Ticket'>Ticket</a>}
                </div>
    <div>

                </div>
  </div>
  <div>
                ----------------------------------------------------------
            </div>
  <div>
                /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
            </div>
           
    
    </>)
}