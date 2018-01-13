import React from 'react'
import { connect } from 'react-redux'
import { deleteProduct } from '../actions/products'
import { Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteProduct: (id) => {
            dispatch(deleteProduct(id))
        }
    }
}

class DeleteButton extends React.Component {
    constructor(props) {
        super(props)
    }
    
    deleteProduct(id) {
        this.props.deleteProduct(id)
    }

    render() {
        return (
            <Button onClick={() => this.deleteProduct(this.props.id)}>delete</Button>
        )
    }
}

DeleteButton.propTypes = {
    id: PropTypes.number,
    history: PropTypes.object,
    deleteProduct: PropTypes.func
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteButton)