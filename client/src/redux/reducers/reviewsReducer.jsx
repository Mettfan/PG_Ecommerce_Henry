

import  { ADD_REVIEW, GET_REVIEWS, ERROR } from '../actions/shoppingCartActions'
const initialState = {
    AllReviews: [],
    reviews: [],
    status: ''
}
function reviewsReducer( state = initialState, action ){
    switch (action.type){

        case ADD_REVIEW: 
            return { ...state, reviews: action.payload, AllReviews: action.payload, status: action.status }
        case GET_REVIEWS:
            return { ...state, reviews: action.payload, AllReviews: action.payload  }

        case ERROR: 
            return { ...state, status: action.status}
        default: 
            return { ...state }
        
    }
}
export default reviewsReducer