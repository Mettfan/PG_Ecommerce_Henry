import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import  productReducer  from '../reducers/productReducer'
import userReducer  from '../reducers/userReducer'

const rootReducer = combineReducers({
    productReducer,
    userReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store