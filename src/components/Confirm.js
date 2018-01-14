import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

class ConfirmModal extends Component {
    state = { open: false }

    show = () => this.setState({ open: true })
    handleConfirm = () => {
        this.setState({ open: false })
        this.props.confirmCllback()
    }

    handleCancel = () => this.setState({ open: false })

    render() {
        const { open } = this.state

        return (
            <React.Fragment>
                <Button onClick={this.show}>{this.props.name}</Button>
                <Confirm
                    open={open}
                    onCancel={this.handleCancel}
                    onConfirm={this.handleConfirm}
                />
            </React.Fragment>
        )
    }
}

export default ConfirmModal