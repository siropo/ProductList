import React from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../actions/products'
import { Button, Form, Select, Message } from 'semantic-ui-react'

const mapStateToProps = (store) => {
    return {
        idCounter: store.products.counterIds
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addProduct: (productData) => {
            dispatch(addProduct(productData))
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
        super();
        this.state = {
            name: '',
            price: '',
            currency: 'EUR',
            hideMessage: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {

    }

    handleChange(e) {
        const type = e.target.name;
        let value = e.target.value;
        if (type === 'price') {
            value = (e.target.validity.valid) ? value : this.state.price;
        }
        this.setState({ [type]: value });
    }

    handleSelect(e, data) {
        this.setState({ currency: data.value });
    }

    handleSubmit(event) {
        this.setState((state) => ({ idCounter: state.idCounter + 1 }));
        const productData = {
            id: this.props.idCounter,
            name: this.state.name,
            price: this.state.price,
            currency: this.state.currency
        }
        this.props.addProduct(productData);
        this.setState({ hideMessage: false });
        setTimeout(() => {
            this.setState({ hideMessage: true });
        }, 2000)
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Name</label>
                        <input required placeholder='Name' type="text" value={this.state.name} name="name" onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Price</label>
                        <input required placeholder='Price' pattern="[0-9]*" value={this.state.price} name="price" onChange={this.handleChange} />
                    </Form.Field>

                    <Form.Field defaultValue='EUR' required control={Select} label='Currency' options={options} placeholder='Currency' onChange={this.handleSelect} />
                    <Button type='submit'>Submit</Button>
                </Form>
                <Message hidden={this.state.hideMessage}>
                    Product was successfully added
                </Message>
            </React.Fragment>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormProducts)