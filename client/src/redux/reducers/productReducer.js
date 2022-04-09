
import  { GET_PRODUCTS, GET_PRODUCT, CREATE_PRODUCT, DELETE_PRODUCT, ERROR, FILTER_BY_GENRE, FILTER_BY_NAME, FILTER_BY_CATEGORY } from '../actions/productActions'
const initialState = {
    productos: [],
    allProductos: [],
    producto: [],
    status: ''
}
function productReducer( state = initialState, action ){
    switch (action.type){

        case GET_PRODUCTS: 
            return { ...state, productos: action.payload, allProductos: action.payload, }
        case GET_PRODUCT:
            return { ...state, producto: action.payload  }
        case CREATE_PRODUCT: 
            return { ...state, status: action.payload }
        case DELETE_PRODUCT:
            return { ...state, status: action.payload }
        case ERROR: 
            return { ...state, status: action.payload}


        case FILTER_BY_GENRE:
            const allProds = state.allProductos
            const filterProds =allProds.filter(el => el.gender.includes(action.payload)) 
            console.log(filterProds)
            const prodsFiltered = action.payload === 'All' ? allProds : filterProds
            return {
                ...state,
                productos: prodsFiltered
            }


        case FILTER_BY_NAME:
            const TodoslosProds = state.allProductos
            const filterProdsName = TodoslosProds.filter(el => el.name.toLowerCase().includes(action.payload)) 
            console.log(filterProdsName)
            return {
                ...state,
                productos: filterProdsName
            }

        case FILTER_BY_CATEGORY:
            const TodoslosProd = state.allProductos
            const filterProdCategory = TodoslosProd.filter(el => el.CategoryName === action.payload) 
            console.log(filterProdCategory)
            const prodsFilteredByCat = action.payload === 'todos' ? TodoslosProd : filterProdCategory
            return {
                ...state,
                productos: prodsFilteredByCat
            }


        default: 
            return { ...state }
        
    }
}
export default productReducer