import React from "react";
import Home from "./Containers/Home/Home";
import Footer from "./Components/Footer/Footer";
import Guitars from './Containers/Guitars/Guitars';
import About from "./Containers/About/About";
import Register from "./Containers/Authentication/Register";
import Login from "./Containers/Authentication/Login";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import {LinkContainer} from 'react-router-bootstrap'
import logo from './images/guitar.jpg';

// Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

import './App.scss';

export default function App() {
    return (
        <Router>
            <Navbar id="nav-bar" expand="lg" fixed={"top"}>
                <LinkContainer to={'/'}>
                    <Navbar.Brand id={"nav-logo"}>
                        <img src={logo} alt="Minerva Logo"/>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <LinkContainer to={'/guitars'}>
                            <Nav.Link>Guitars</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={'/accessories'}>
                            <Nav.Link>Accessories</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={'/lessons'}>
                            <Nav.Link>Lessons</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={'/about'}>
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>


                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <LinkContainer to={'/login'}>
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={'/register'}>
                        <Nav.Link>Register</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={'/cart'}>
                        <Nav.Link>Cart</Nav.Link>
                    </LinkContainer>

                </Navbar.Collapse>
            </Navbar>
            <main>

                <Switch>
                    <Route path="/guitars" component={Guitars}/>
                    <Route path="/about" component={About}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/topics">
                        <Topics/>
                    </Route>
                    <Route exact path="/" component={Home}>
                    </Route>
                </Switch>

            </main>
            <Footer/>
        </Router>
    );
}


function Topics() {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
            </ul>

            {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic/>
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    let {topicId} = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}
