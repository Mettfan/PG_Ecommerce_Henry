import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import  productReducer  from '../reducers/productReducer'
import userReducer  from '../reducers/userReducer'
import shoppingCartReducer from '../reducers/shoppingCartReducers'
import favoriteReducer from '../reducers/favoriteReducer'
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    productReducer,
    userReducer,
    shoppingCartReducer,
    favoriteReducer
})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store