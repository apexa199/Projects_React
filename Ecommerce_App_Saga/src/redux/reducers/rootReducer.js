import { combineReducers } from "redux" 
import {productsReducer, selectedProductsReducer} from "./productsReducer"
import { selectedProduct } from "../actions/productActions";

const reducer = combineReducers({
    
    allProducts : productsReducer,
    product : selectedProductsReducer
})

export default reducer;