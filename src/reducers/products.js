export default function reducer(state = {
    counterIds: 0,
    products: [{
        id: 234,
        name: 'Pesho',
        price: 543543,
        currency: 'USD'
    }]
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
                const { id, name, price, currency } = action.payload
                const newProducts = [...state.products]
                const productToUpdate = newProducts.findIndex(product => product.id === id)
                newProducts[productToUpdate] = action.payload;

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
    }

    return state
}