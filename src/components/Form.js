import React from 'react'
import { connect } from 'react-redux'
import { addProduct, updateProduct } from '../actions/products'
import { Button, Form, Select, Message } from 'semantic-ui-react'
import messages from '../utils/messages'
import PropTypes from 'prop-types'

const mapStateToProps = (store) => {
    return {
        products: store.products.products,
        idCounter: store.products.counterIds
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProduct: (productData) => {
            dispatch(addProduct(productData))
        },
        updateProduct: (productData) => {
            dispatch(updateProduct(productData))
        }
    }
}

const options = [
    { key: 'u', text: 'EUR', value: 'EUR' },
    { key: 'e', text: 'USD', value: 'USD' },
    { key: 'b', text: 'BGN', value: 'BGN' }
]

class FormProducts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            price: '',
            currency: 'EUR',
            hideMessage: true,
            pageName: 'Create'
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.addProduct = this.addProduct.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
    }

    componentDidMount() {
        this._ismounted = true

        if (!this.props.match.params.hasOwnProperty('id')) {
            return
        }

        const id = parseInt(this.props.match.params.id)
        const products = this.props.products

        const productIndex = products.findIndex((product) => {
            return product.id === id
        })

        if (productIndex !== -1) {
            const product = products[productIndex]
            const { id, name, price, currency } = product
            this.setState(() => ({
                id: id,
                name: name,
                price: price,
                currency: currency,
                pageName: 'Edit'
            }))

        } else {
            this.props.history.push('/create')
        }
    }

    componentWillUnmount() {
        this._ismounted = false
    }

    handleChange(e) {
        const type = e.target.name
        let value = e.target.value
        if (type === 'price') {
            value = (e.target.validity.valid) ? value : this.state.price
        }
        this.setState({ [type]: value })
    }

    handleSelect(e, data) {
        this.setState({ currency: data.value })
    }

    handleSubmit(e, data) {
        const type = data['data-type']
        switch (type) {
            case 'Create':
                this.message = messages.Create
                this.addProduct()
                break
            case 'Edit':
                this.message = messages.Edit
                this.updateProduct()
                break
            default:
                break
        }
        e.preventDefault()
    }

    updateProduct() {

        const productData = {
            id: this.state.id,
            name: this.state.name,
            price: this.state.price,
            currency: this.state.currency
        }
        this.props.updateProduct(productData)

        this.showMessage()
    }

    addProduct() {
        this.setState((state) => ({ idCounter: state.idCounter + 1 }))
        const productData = {
            id: this.props.idCounter,
            name: this.state.name,
            price: this.state.price,
            currency: this.state.currency
        }
        this.props.addProduct(productData)

        this.showMessage()
    }

    showMessage() {
        this.setState({ hideMessage: false })
        setTimeout(() => {
            if (this._ismounted) {
                this.setState({ hideMessage: true })
            }
        }, 2000)
    }

    render() {
        return (
            <React.Fragment>
                <h3>{this.state.pageName} product</h3>
                <Form onSubmit={this.handleSubmit} data-type={this.state.pageName}>
                    <Form.Field>
                        <label>Name</label>
                        <input required placeholder='Name' type="text" value={this.state.name} name="name" onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Price</label>
                        <input required placeholder='Price' pattern="[0-9]*" value={this.state.price} name="price" onChange={this.handleChange} />
                    </Form.Field>

                    <Form.Field defaultValue={this.state.currency} required control={Select} label='Currency' options={options} placeholder='Currency' onChange={this.handleSelect} />
                    <Button type='submit'>Submit</Button>
                </Form>
                <Message hidden={this.state.hideMessage}>
                    {this.message}
                </Message>
            </React.Fragment>
        )
    }
}

FormProducts.propTypes = {
    pageName: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
    products: PropTypes.array,
    hideMessage: PropTypes.bool,
    idCounter: PropTypes.number,
    addProduct: PropTypes.func,
    updateProduct: PropTypes.func,
    history: PropTypes.object,
    match: PropTypes.object,
    _ismounted: PropTypes.bool
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormProducts)