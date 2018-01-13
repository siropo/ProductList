import React from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'semantic-ui-react'
import { fetchPermissions } from '../actions/permissions'
import { deleteProduct } from '../actions/products'
import PropTypes from 'prop-types'

TableProducts.propTypes = {
    history: PropTypes.array,
    products: PropTypes.string,
    dispatch: PropTypes.func,
    deleteProduct: PropTypes.number,
    permissions: PropTypes.string
}

const mapStateToProps = (store) => {
    return {
        products: store.products,
        permissionsFetched: store.permissions.fetched,
        permissions: store.permissions.permissions,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteProduct: (id) => {
            dispatch(deleteProduct(id))
        }
    }
}

class TableProducts extends React.Component {

    constructor(props) {
        super(props)
        this.deleteProduct = this.deleteProduct.bind(this)
        this.editProduct = this.editProduct.bind(this)
        this.handleProductClick = this.handleProductClick.bind(this)
    }

    componentWillMount() {

    }

    editProduct() {
        this.props.history.push('/edit/234')
    }

    fetchPermissions() {
        this.props.dispatch(fetchPermissions())
    }

    deleteProduct(id) {
        this.props.deleteProduct(id)
    }

    handleProductClick(e) {
        const type = e.target.getAttribute('data-type')
        switch (type) {
            case 'delete':
                {
                    const id = e.target.getAttribute('data-id')
                    this.deleteProduct(id)
                    break
                }
            case 'edit':
                {
                    const id = e.target.getAttribute('data-id')
                    this.editProduct(id)
                    break
                }
            default: {
                break;
            }
        }
    }

    render() {
        const { products, permissions } = this.props

        if (!products.products.length) {
            return (
                <React.Fragment>
                    There is no records!
                </React.Fragment>
            )
        }

        const mappedProducts = products.products.map((product, index) => {
            return (<Table.Header key={index}>
                <Table.Row>
                    <Table.HeaderCell>{product.name}</Table.HeaderCell>
                    <Table.HeaderCell>{product.price}</Table.HeaderCell>
                    <Table.HeaderCell>{product.currency}</Table.HeaderCell>
                    <Table.HeaderCell textAlign='right'>
                        <Button data-type='delete' data-id={product.id}>delete</Button>
                        <Button data-type='edit' data-id={product.id}>edit</Button>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            )
        })

        return (
            <Table onClick={this.handleProductClick}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Currency</Table.HeaderCell>
                        <Table.HeaderCell textAlign='right'>Options</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                {mappedProducts}
            </Table>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableProducts)
