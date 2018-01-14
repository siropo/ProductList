import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import Routes from '../components/Routes'

const ContainerExampleAlignment = () => (
    <React.Fragment>
        <Container textAlign='left'>
            <Routes />
        </Container>
        <Container textAlign='justified'>
            <Divider />
        </Container>
    </React.Fragment>
)

export default ContainerExampleAlignment
