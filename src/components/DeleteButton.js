import React from 'react'
import { connect } from 'react-redux'
import { deleteProduct } from '../actions/products'
import PropTypes from 'prop-types'
import { getPermissions } from '../utils/heplers'
import Confirm from './Confirm'

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

    deleteProduct(id) {
        this.props.deleteProduct(id)
    }

    render() {
        const showDeleteBtn = getPermissions().DELETE

        if (!showDeleteBtn) {
            return null
        }

        return (
            <Confirm name='delete' confirmCllback={() => this.deleteProduct(this.props.id)} />
        )
    }
}

DeleteButton.propTypes = {
    id: PropTypes.number,
    deleteProduct: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteButton)