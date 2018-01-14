import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import DeleteButton from './DeleteButton'
import UpdateButton from './UpdateButton'
import PropTypes from 'prop-types'

const mapStateToProps = (store) => {
    return {
        products: store.products,
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

class TableProducts extends React.Component {

    render() {
        const { products } = this.props

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
