import React, {useState} from "react";
import Home from "./Containers/Home/Home";
import Footer from "./Components/Footer/Footer";
import Guitars from './Containers/Guitars/Guitars';
import Lessons from "./Containers/Lessons/Lessons";
import Equipment from "./Containers/Equipment/Equipment";
import About from "./Containers/About/About";
import Register from "./Containers/Authentication/Register";
import Login from "./Containers/Authentication/Login";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {LinkContainer} from 'react-router-bootstrap'
import logo from './images/favicon-32x32.png';

// Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './App.scss';

export default function App() {
    // The type declaration below is needed because of a typescript limitation
    //
    const [expanded, setExpanded] = useState<false | true>(false);

    return (
        <Router>
            <Navbar id="nav-bar" expand="lg" fixed={"top"}
                expanded={expanded}
            >

                <LinkContainer to={'/'} onClick={() => setExpanded(false)}>
                    <Navbar.Brand id={"nav-logo"}>
                        <img src={logo} alt="Minerva Logo"/>
                        <span id={'logo-span'}>inerva</span>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={() => setExpanded(expanded ? false : true)}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <LinkContainer to={'/guitars'} onClick={() => setExpanded(false)}>
                            <Nav.Link>Guitars</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={'/equipment'} onClick={() => setExpanded(false)}>
                            <Nav.Link>Equipment</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={'/lessons'} onClick={() => setExpanded(false)}>
                            <Nav.Link>Lessons</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={'/about'} onClick={() => setExpanded(false)}>
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>

                    </Nav>

                    <LinkContainer to={'/login'} onClick={() => setExpanded(false)}>
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={'/register'} onClick={() => setExpanded(false)}>
                        <Nav.Link>Register</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={'/cart'} onClick={() => setExpanded(false)}>
                        <Nav.Link>Cart</Nav.Link>
                    </LinkContainer>

                </Navbar.Collapse>
            </Navbar>
            <main>

                <Switch>
                    <Route path="/guitars" component={Guitars}/>
                    <Route path="/lessons" component={Lessons}/>
                    <Route path="/equipment" component={Equipment}/>
                    <Route path="/about" component={About}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route exact path="/" component={Home}>
                    </Route>
                </Switch>

            </main>
            <Footer/>
        </Router>
    );
}

