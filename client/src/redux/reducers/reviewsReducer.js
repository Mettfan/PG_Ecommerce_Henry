

import  { ADD_REVIEW, GET_REVIEWS, ERROR } from '../actions/reviewsActions'
const initialState = {
    AllReviews: [],
    reviews: [],
    status: ''
}
function reviewsReducer( state = initialState, action ){
    switch (action.type){

        case ADD_REVIEW: 
            return { ...state, reviews: action.payload, AllReviews: action.payload}
        case GET_REVIEWS:
            return { ...state, reviews: action.payload, AllReviews: action.payload  }

        case ERROR: 
            return { ...state, status: action.payload}
        default: 
            return { ...state }
        
    }
}
export default reviewsReducer