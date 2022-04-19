import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import  productReducer  from '../reducers/productReducer'
import userReducer  from '../reducers/userReducer'
import shoppingCartReducer from '../reducers/shoppingCartReducers'
import reviewsReducer from '../reducers/reviewsReducer'
const rootReducer = combineReducers({
    productReducer,
    userReducer,
    shoppingCartReducer,
    reviewsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store