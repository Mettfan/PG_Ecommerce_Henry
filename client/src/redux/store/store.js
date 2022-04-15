import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import  productReducer  from '../reducers/productReducer'
import userReducer  from '../reducers/userReducer'
import shoppingCartReducer from '../reducers/shoppingCartReducers'
const rootReducer = combineReducers({
    productReducer,
    userReducer,
    shoppingCartReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store