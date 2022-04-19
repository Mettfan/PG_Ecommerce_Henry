import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import  productReducer  from '../reducers/productReducer'
import userReducer  from '../reducers/userReducer'
import shoppingCartReducer from '../reducers/shoppingCartReducers'
import favoriteReducer from '../reducers/favoriteReducer'
import orderReducer from '../reducers/orderReducer'
const rootReducer = combineReducers({
    productReducer,
    userReducer,
    shoppingCartReducer,
    favoriteReducer,
    orderReducer
    
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store