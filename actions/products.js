export function addProduct(data) {
    return {
        type: 'ADD_PRODUCT',
        payload: data,
    }
}

export function updateProduct(id, name, price, currency) {
    return {
        type: 'UPDATE_PRODUCT',
        payload: {
            id,
            name,
            price,
            currency
        },
    }
}

export function deleteProduct(id) {
    return { type: 'DELETE_PRODUCT', payload: id }
}