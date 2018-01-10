import { combineReducers } from "redux"

import permissions from "./permissions"
import products from "./products"

export default combineReducers({
    permissions,
    products,
})