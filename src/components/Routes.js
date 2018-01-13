import React from 'react'
import Menu from './Menu'
import Table from './Table'
import Form from './Form'
import Permissions from './Permissions'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const AppRoutes = () => (
    <BrowserRouter>
        <div className="container">
            <Menu />
            <Switch>
                <Route exact path='/' component={Table}></Route>
                <Route path='/create' key='create' component={Form} ></Route>
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

export default AppRoutes
