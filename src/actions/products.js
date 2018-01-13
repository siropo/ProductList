export function addProduct(data) {
    return {
        type: 'ADD_PRODUCT',
        payload: data,
    }
}

export function updateProduct(data) {
    return {
        type: 'UPDATE_PRODUCT',
        payload: data,
    }
}

export function getProduct(id) {
    return { type: 'DELETE_PRODUCT', payload: id }
}

export function deleteProduct(id) {
    return { type: 'DELETE_PRODUCT', payload: id }
}