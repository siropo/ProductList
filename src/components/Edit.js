import React from 'react'
import { connect } from 'react-redux'
import { updateProduct } from '../actions/products'
import Form from '../components/Form'

const mapStateToProps = (store) => {
    return {
        products: store.products,
        permissionsFetched: store.permissions.fetched,
        permissions: store.permissions.permissions,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateProduct: (id) => {
            dispatch(updateProduct(id))
        }
    }
}

class EditProduct extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <React.Fragment>
                <h3>Edit product</h3>
                <Form name={'pesho'} price={222} currency='USD' />
            </React.Fragment>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProduct)
