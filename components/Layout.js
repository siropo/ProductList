import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import Menu from './Menu';
import Table from './Table';
import Form from './Form';
import Edit from './Edit';
import Permissions from './Permissions';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

const ContainerExampleAlignment = () => (
    <React.Fragment>
        <Container textAlign='left'>
            <Router>
                <div className="container">
                    <Menu />
                    <Switch>
                        <Route exact path='/' component={Table}></Route>
                        <Route path='/create' component={Form}></Route>
                        <Route path='/edit/:id' component={Edit}></Route>
                        <Route path='/permissions' component={Permissions}></Route>
                        <Route
                            render={function () {
                                return <p>Not Found</p>
                            }}></Route>
                    </Switch>
                </div>
            </Router>
        </Container>

        <Container textAlign='justified'>
            <Divider />
        </Container>
    </React.Fragment>
)

export default ContainerExampleAlignment
