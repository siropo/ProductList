import React from 'react'
import { withRouter } from 'react-router'

// const permissions = {
//     'permissions': ['CREATE', 'READ', 'UPDATE', 'DELETE']
// }

const permissions = {
    CREATE: 'CREATE',
    READ: 'READ'
}


export default function requireAuth() {
    class Permissions extends React.Component {

        componentWillMount() {
            this.checkAuth()
        }

        checkAuth() {
            if (!this.permissions.READ) {
                console.log('no')
            }
        }

        render() {
            return permissions.READ ?
                <div>OK</div> : null
        }

    }

    return withRouter(Permissions)
}