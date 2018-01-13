import React from 'react'
import { Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class UpdateButton extends React.Component {
    constructor(props) {
        super(props)
    }

    editProduct(id) {
        this.props.history.push(`/edit/${id}`)
    }

    render() {
        return (
            <Button onClick={() => this.editProduct(this.props.id)}>edit</Button>
        )
    }
}

UpdateButton.propTypes = {
    id: PropTypes.number,
    history: PropTypes.object
}

export default UpdateButton