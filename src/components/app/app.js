import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css';


export default class App extends Component {
    constructor() {
        super();
        this.toggleActivity = this.toggleActivity.bind(this);
    }

    state = {
        activityRandomChar: true
    };

    toggleActivity() {
        this.setState({
            activityRandomChar: !this.state.activityRandomChar
        });
    }

    render() {
        const {activityRandomChar} = this.state;

        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <Button onClick={this.toggleActivity} color={activityRandomChar ? 'secondary' : 'primary'} block>
                                Toggle random character
                            </Button>
                            {activityRandomChar ? <RandomChar/> : null}
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};
