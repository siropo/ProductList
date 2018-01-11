export default function reducer(state = {
    permissions: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case "FETCH_PERMISSIONS":
            {
                return {...state, fetching: true }
            }
        case "FETCH_PERMISSIONS_REJECTED":
            {
                return {...state, fetching: false, error: action.payload }
            }
        case "FETCH_PERMISSIONS_FULFILLED":
            {
                return {
                    ...state,
                    fetching: false,
                    fetched: true,
                    permissions: action.payload,
                }
            }
    }

    return state
}