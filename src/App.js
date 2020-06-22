import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponents';
import './App.css';
import { CAMPSITES } from './shared/campsites'; //if there is no default keyword we need to use the curly braces around the class name

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">EzyCamp</NavbarBrand>
                    </div>
                </Navbar>
                <Directory campsites={this.state.campsites} />
            </div>
        );
    }
}

export default App;