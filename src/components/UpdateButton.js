import React from 'react'
import { Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { getPermissions } from '../utils/heplers'
class UpdateButton extends React.Component {

    editProduct(id) {
        this.props.history.push(`/edit/${id}`)
    }

    render() {
        const showUpdateBtn = getPermissions().UPDATE
        
        if (!showUpdateBtn) {
            return null
        }

        return (
            <Button onClick={() => this.editProduct(this.props.id)}>edit</Button>
        )
    }
}

UpdateButton.propTypes = {
    id: PropTypes.number.isRequired,
    history: PropTypes.object.isRequired
}

export default UpdateButton