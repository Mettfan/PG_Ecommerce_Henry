

import  { FILTER_BY_CHILDREN, GET_PRODUCT_BY_DISCOUNT } from '../actions/productActions'


import {
    GET_PRODUCTS,
    GET_PRODUCT,
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    ERROR,
    FILTER_BY_MEN,
    FILTER_BY_WOMEN,
    FILTER_BY_UNISEX,
    FILTER_BY_NINO,
    FILTER_BY_NINA,
    FILTER_BY_NAME,
    FILTER_BY_CATEGORY,
    ADD_SUBTOTAL,
    DELETE_SUBTOTAL,
    FILTER_BY_PRICE,
    CLEAN_PRODUCT,
    EDIT_PRODUCT,
    FILTER_BY_BRAND
} from '../actions/productActions'

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
            return { ...state, productos: action.payload, allProductos: action.payload, producto: [] }
        case CLEAN_PRODUCT:
            return { ...state, producto: [] }
        case GET_PRODUCT:

            return { ...state, producto: action.payload }

        case CREATE_PRODUCT: 
            return { ...state, status: action.payload }
        case DELETE_PRODUCT:
            return { ...state, status: action.payload }
        case EDIT_PRODUCT:
            return { ...state, status: action.payload }
        case ERROR: 
            return { ...state, status: action.payload}
 
        case FILTER_BY_MEN:
            let allProdsMen = state.allProductos.filter(el =>  el.gender === 'Hombre')
            let filterProdsMen =allProdsMen.filter(el =>  el.gender === 'Hombre' && el.CategoryName === action.payload) 
            console.log(filterProdsMen)
            let prodsFilteredMen = action.payload === 'All' ? allProdsMen : filterProdsMen
            return {
                ...state,
                productos: prodsFilteredMen
            }
        case FILTER_BY_WOMEN:
            let allProdsWomen = state.allProductos.filter(el =>  el.gender === 'Mujer')
            const filterProdsWomen =allProdsWomen.filter(el => el.gender === 'Mujer' && el.CategoryName === action.payload) 
            console.log(filterProdsWomen)
            const prodsFilteredWomen = action.payload === 'All' ? allProdsWomen : filterProdsWomen
            return {
                ...state,
                productos: prodsFilteredWomen
            }
        case FILTER_BY_UNISEX:
            let allProdsUnisex = state.allProductos.filter(el =>  el.gender === 'Unisex')
            const filterProdsUnisex =allProdsUnisex.filter(el => el.gender === 'Unisex' && el.CategoryName === action.payload) 
            console.log(filterProdsUnisex)
            const prodsFilteredUnisex = action.payload === 'All' ? allProdsUnisex : filterProdsUnisex
            return {
                ...state,
                productos: prodsFilteredUnisex
            }
        case FILTER_BY_NINO:
            let allProdsNino = state.allProductos.filter(el =>  el.gender === 'Niño')
            const filterProdsNino =allProdsNino.filter(el => el.gender === 'Niño' && el.CategoryName === action.payload) 
            console.log(filterProdsNino)
            const prodsFilteredNino = action.payload === 'All' ? allProdsNino : filterProdsNino
            return {
                ...state,
                productos: prodsFilteredNino
            }
        case FILTER_BY_NINA:
            let allProdsNina = state.allProductos.filter(el =>  el.gender === 'Niña')
            const filterProdsNina =allProdsNina.filter(el => el.gender === 'Niña' && el.CategoryName === action.payload) 
            console.log(filterProdsNina)
            const prodsFilteredNina = action.payload === 'All' ? allProdsNina : filterProdsNina
            return {
                ...state,
                productos: prodsFilteredNina
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

            case FILTER_BY_BRAND:
            const TodoslosProdBrand = state.allProductos
            const filterProdBrand = TodoslosProdBrand.filter(el => el.brand === action.payload) 
            console.log(filterProdBrand)
            const prodsFilteredByBrand = action.payload === 'todos' ? TodoslosProdBrand : filterProdBrand
            return {
                ...state,
                productos: prodsFilteredByBrand
            }

        case FILTER_BY_PRICE:
            let TodoslosProduPrice = state.allProductos
            let priceProducts;
 
            if (action.payload === "0-5") {
                priceProducts = state.allProductos.filter(el => el.price >= 0 && el.price <= 5000)
            };
            if (action.payload === "5-10") {
                priceProducts = state.allProductos.filter(el => el.price >= 5000 && el.price <= 10000)
            };
            if (action.payload === "10-15") {
                priceProducts = state.allProductos.filter(el => el.price >= 10000 && el.price <= 15000)
            };
            if (action.payload === "15000") {
                priceProducts = state.allProductos.filter(el => el.price >= 15000)
            };
            console.log(priceProducts)

            return {
                ...state,
                productos: action.payload === 'todos' ? TodoslosProduPrice : priceProducts
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
