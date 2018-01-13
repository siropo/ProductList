import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import { fetchPermissions } from '../actions/permissions'
import DeleteButton from '../components/DeleteButton'
import UpdateButton from '../components/UpdateButton'
import PropTypes from 'prop-types'

const mapStateToProps = (store) => {
    return {
        products: store.products,
        permissionsFetched: store.permissions.fetched,
        permissions: store.permissions.permissions,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

class TableProducts extends React.Component {

    constructor(props) {
        super(props)
    }

    fetchPermissions() {
        this.props.dispatch(fetchPermissions())
    }

    // handleProductClick(e) {
    //     const type = e.target.getAttribute('data-type')
    //     switch (type) {
    //         case 'delete':
    //             {
    //                 const id = e.target.getAttribute('data-id')
    //                 this.deleteProduct(id)
    //                 break
    //             }
    //         case 'edit':
    //             {
    //                 const id = e.target.getAttribute('data-id')
    //                 this.editProduct(id)
    //                 break
    //             }
    //         default: {
    //             break
    //         }
    //     }
    // }

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
                        <DeleteButton id={product.id} />
                        <UpdateButton id={product.id} history={this.props.history} />
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

TableProducts.propTypes = {
    dispatch: PropTypes.func,
    history: PropTypes.object,
    products: PropTypes.object,
    permissions: PropTypes.array
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableProducts)
