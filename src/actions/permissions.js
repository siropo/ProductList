import axios from "axios";

export function fetchPermissions() {
    return function(dispatch) {
        dispatch({ type: "FETCH_PERMISSIONS" });

        axios.get("http://localhost/api/permissions")
            .then((response) => {
                dispatch({ type: "FETCH_PERMISSIONS_FULFILLED", payload: response.data })
            })
            .catch((err) => {
                dispatch({ type: "FETCH_PERMISSIONS_REJECTED", payload: err })
            })
    }
}