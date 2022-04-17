import React from 'react'
import './index.css';
import data from './fake'
// import {getUserOrder} from "../../actions/userOrderActions";

function OrdersView() {
    const datas= data
    // const {  isAuthenticated, user  } = useAuth0()
    // let userValidated = useSelector( state => state.userReducer.status.user )
    // let isUserAuthenticated = isAuthenticated || userValidated
  
    // let datas = useSelector( (state) => state.productReducer.order)
  
    // let nav = useNavigate()
    
    //   let dispatch = useDispatch()
    //   let { id } = useParams()
  
    //   useEffect(() => {
    //     dispatch({
    //        dispatch(getOrder(id))
    //   }, [dispatch, id])
  return(<>
    <div className="card-name"><h3>Ordenes de compra</h3></div>
    { datas && datas?.map((order) => {
  return (
    <div className="card-admin-container">
      <div className="card-admin-1">
        
        <div className="card-admin-information">
            <p className="card-admin-name">Numero de orden: { order.id }</p>
            <p className="price-slim-card">Monto Total ${ order.total }</p>
            <p className="card-admin-size">Estado: {order.state }</p>
            
        </div>
        
      </div>
    </div>
     )
})}</>)
}

export default OrdersView;