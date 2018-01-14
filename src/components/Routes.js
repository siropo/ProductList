import React from 'react'
import Menu from './Menu'
import Table from './Table'
import Form from './Form'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'


const permissions = {
    CREATE: 'CREATE',
    READ: 'READ'
}

const AppRoutes = () => (
    <BrowserRouter>
        <div className="container">
            <Menu />
            <Switch>
                <Route exact path='/' render={() => {
                    return permissions.READ ?
                        <Redirect to="/" />
                        : <Table />
                }}></Route>
                {[
                    !permissions.CREATE && LoggedOutRoutes,
                    permissions.CREATE  && LoggedInRoutes]}
                {/* <Route path='/create' key='create' component={Form}></Route> */}
                <Route path='/edit/:id' key='edit' component={Form}></Route>
                <Route path='/permissions' component={Permissions}></Route>
                <Route
                    render={function () {
                        return <p>Not Found</p>
                    }}></Route>
            </Switch>
        </div>
    </BrowserRouter>
)

const LoggedInRoutes = [
    <Route path='/create' key='create' component={Form} />
]

const LoggedOutRoutes = [
    <Redirect key='redirect' to='/' />
]

export default AppRoutes
