import React from "react";
import { connect } from "react-redux";
import { updateProduct } from "../actions/products"

const mapStateToProps = (store) => {
    return {
        products: store.products,
        permissionsFetched: store.permissions.fetched,
        permissions: store.permissions.permissions,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        updateProduct: (id) => {
            dispatch(updateProduct(id))
        }
    }
}

class EditProduct extends React.Component {
    render() {
        return (
            <div>
                hi
            {console.log(this.props)}
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProduct)
