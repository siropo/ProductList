import React from 'react'
import Menu from './Menu'
import Table from './Table'
import Form from './Form'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import messages from '../utils/messages'
import { getPermissions } from '../utils/heplers'

class AppRoutes extends React.Component {
    
    componentWillMount() {
        this.permissions = getPermissions()
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Menu />
                    <Switch>
                        {[
                            this.permissions.READ && allowREAD,
                            this.permissions.CREATE && allowCREATE,
                            this.permissions.UPDATE && allowEDIT,
                            [<Route key='notFound'
                                render={function () {
                                    return <p>{messages.notFound}</p>
                                }}></Route>]
                        ]}
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

const allowREAD = [
    <Route exact path='/' key='read' component={Table} />
]

const allowCREATE = [
    <Route path='/create' key='create' component={Form} />
]

const allowEDIT = [
    <Route path='/edit/:id' key='edit' component={Form} />
]


export default AppRoutes
