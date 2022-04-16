import axios from "axios"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import './OrderFinder.css'
export default function OrderFinder()  {
    let [searchParams, setSearchParams] = useSearchParams()
    let payment_id = searchParams.get('payment_id')
    let [state, setState] = useState({
        searchId: payment_id,
        orderFound: {}
    })
    let token = 'APP_USR-4206952764594865-041216-86c66dae1de7c07e9a7a855ed313ba08-355601564'
   
    let handleOnChange = ( e ) => {
        setState({...state, searchId: e.target.value })
    } 
    let handleOnSubmit = async ( e ) =>  {
        e.preventDefault()
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
    return ( <>

        <div>
            ORDER FINDER
            {payment_id && <div>
                El numero de seguimiento de tu ultima orden es: <b>{' '+payment_id}</b>

            </div>}
            <form onSubmit={ ( e ) => handleOnSubmit(e)}>
                <input type={'text'} placeholder='Copie y pegue su numero de seguimiento...' value= {state.searchId}  onChange = {( e ) => handleOnChange(e)} ></input>
                <button type="submit">BUSCAR ORDEN</button>
            </form>
            <div>
                Search: {state.searchId}
            </div>

            {state.orderFound && <img className="orderImgState" src={state.orderFound.status === 'pending'?
            'https://images.vexels.com/media/users/3/142363/isolated/preview/76cc00e3681f38ed4956be2394cccd38-reloj-de-pared-plano-de-oficina.png':
            state.orderFound.status === 'approved' ? 'https://www.pngkey.com/png/full/26-267424_icon-check-tick-transparent.png': state.orderFound.status === 'rejected' || state.orderFound.status_detail === 'Not Found'?'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Cross_red_circle.svg/1024px-Cross_red_circle.svg.png':
            ''
            } alt=''></img>}

            <div>
            {state.orderFound && state.orderFound.status_detail}

            </div>
            <div>
            {state.orderFound.status === 'pending' && <button onClick={( ) => window.location.href = state.orderFound.transaction_details?.external_resource_url }> Ticket</button>  }

            </div>
        </div>
    
    </>)
}