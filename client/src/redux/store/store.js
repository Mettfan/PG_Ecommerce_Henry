import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import  productReducer  from '../reducers/productReducer'
import userReducer  from '../reducers/userReducer'
import shoppingCartReducer from '../reducers/shoppingCartReducers'
import favoriteReducer from '../reducers/favoriteReducer'
const rootReducer = combineReducers({
    productReducer,
    userReducer,
    shoppingCartReducer,
    favoriteReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store