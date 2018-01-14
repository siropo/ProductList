import products from '../store/db.json'

export default function reducer(state = {
    counterIds: products.length + 1,
    products: products,
}, action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            {
                return {
                    ...state,
                    counterIds: state.counterIds + 1,
                    products: [...state.products, action.payload],
                }
            }
        case 'UPDATE_PRODUCT':
            {
                const { id } = action.payload
                const newProducts = [...state.products]
                const productToUpdate = newProducts.findIndex(product => product.id === id)
                newProducts[productToUpdate] = action.payload

                return {
                    ...state,
                    products: newProducts,
                }
            }
        case 'DELETE_PRODUCT':
            {
                return {
                    ...state,
                    products: state.products.filter(product => product.id !== ~~action.payload),
                }
            }
        default:
            break
    }

    return state
}