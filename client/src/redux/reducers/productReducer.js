
import  { GET_PRODUCTS, GET_PRODUCT, CREATE_PRODUCT, DELETE_PRODUCT, ERROR, FILTER_BY_MEN, FILTER_BY_WOMEN, FILTER_BY_CHILDREN, FILTER_BY_NAME, FILTER_BY_CATEGORY, ADD_SUBTOTAL, DELETE_SUBTOTAL, EDIT_PRODUCT } from '../actions/productActions'
const initialState = {
    productos: [],
    allProductos: [],
    producto: [],
    status: '',
    totalCart: [0],
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
        case EDIT_PRODUCT:
            return { ...state, status: action.payload }
        case ERROR: 
            return { ...state, status: action.payload}


        case FILTER_BY_MEN:
            let allProdsMen = state.allProductos.filter(el =>  el.gender === 'Caballero')
            let filterProdsMen =allProdsMen.filter(el =>  el.gender === 'Caballero' && el.CategoryName === action.payload) 
            console.log(filterProdsMen)
            let prodsFilteredMen = action.payload === 'All' ? allProdsMen : filterProdsMen
            return {
                ...state,
                productos: prodsFilteredMen
            }
        case FILTER_BY_WOMEN:
            let allProdsWomen = state.allProductos.filter(el =>  el.gender === 'Dama')
            const filterProdsWomen =allProdsWomen.filter(el => el.gender === 'Dama' && el.CategoryName === action.payload) 
            console.log(filterProdsWomen)
            const prodsFilteredWomen = action.payload === 'All' ? allProdsWomen : filterProdsWomen
            return {
                ...state,
                productos: prodsFilteredWomen
            }
        case FILTER_BY_CHILDREN:
            let allProdsChildren = state.allProductos.filter(el =>  el.gender === 'Niño')
            const filterProdsChildren =allProdsChildren.filter(el => el.gender === 'Niño' && el.CategoryName === action.payload) 
            console.log(filterProdsChildren)
            const prodsFilteredChildren = action.payload === 'All' ? allProdsChildren : filterProdsChildren
            return {
                ...state,
                productos: prodsFilteredChildren
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

        case ADD_SUBTOTAL: 
            const total = [...state.totalCart]
            total.splice(action.payload[0],1,action.payload[1])
            return { ...state, totalCart : total}

        case DELETE_SUBTOTAL:
            const totalDelete = [...state.totalCart]
            const filterSubtotal = totalDelete.filter((subtotal) => subtotal !== action.payload)
            return { ...state, totalCart: filterSubtotal }

        default: 
            return { ...state }
        
    }
}
export default productReducer