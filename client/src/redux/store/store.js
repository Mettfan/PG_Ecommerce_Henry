import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import  productReducer  from '../reducers/productReducer'
import userReducer  from '../reducers/userReducer'
import shoppingCartReducer from '../reducers/shoppingCartReducers'

import reviewsReducer from '../reducers/reviewsReducer'
import favoriteReducer from '../reducers/favoriteReducer'
import orderReducer from '../reducers/orderReducer'


const rootReducer = combineReducers({
    productReducer,
    userReducer,
    shoppingCartReducer,

    reviewsReducer,

    favoriteReducer,
    orderReducer
    

})

const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store
