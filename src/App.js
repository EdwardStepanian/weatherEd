import React, {Component} from 'react';
import './App.css';
import WeatherDisplay from './WeatherDisplay';
import "bootswatch/superhero/bootstrap.css";
import {Navbar, NavItem, Nav, Grid, Row, Col} from "react-bootstrap";
const PLACES = [
    {name: "Yerevan",zip:"0002"},
    {name: "Ejmiatsin", zip: "616062"},
    {name: "Artashat", zip: "174979"},
    {name: "Kapan",zip:"174875"},
    {name: "Goris",zip:"174895"},
    {name: "Vanadzor", zip: "616530"},
    {name: "Ijevan", zip: "616627"},
    {name: "Gyumri", zip: "616635"},
    {name: "Dilijan", zip: "616752"},
    {name: "Hrazdan",zip:"616629"},
    {name: "Agarak",zip:"175007"},
    {name: "Metsamor", zip: '616417'}

];


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePlace: 0,
        }
    }


    render() {
        const activePlace = this.state.activePlace;
        return (
            <div className="App">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            WeatherEd
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
                <Grid>
                    <Row>
                        <Col md={4} sm={4}>
                            <h3>Select a city</h3>
                            <Nav
                                bsStyle="pills"
                                stacked
                                activeKey={activePlace}
                                onSelect={index => {
                                    this.setState({activePlace: index});
                                }}
                            >
                                {PLACES.map((place, index) => (
                                    <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                                ))}
                            </Nav>
                        </Col>
                        <Col md={8} sm={8}>
                            <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} place={PLACES[activePlace].name}/>
                        </Col>
                    </Row>
                </Grid>
                <div className="copyCont">
                    <div className="copy">Copyrights © Edward Stepanian . All Rights Reserved</div>
                    <div className="git">
                        <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-128.png" alt="github " />

                        <a href="https://github.com/EdwardStepanian">GitHub repo</a>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
