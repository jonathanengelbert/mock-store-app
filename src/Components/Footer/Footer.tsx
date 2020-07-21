import React from 'react';

import './footerStyles.scss';
import Navbar from 'react-bootstrap/esm/Navbar';

export default function Footer() {
    return (
        <footer id={"footer"}>
            <Navbar id="footer-bar" bg="dark" expand="lg" sticky-bottom>
                <strong>
                    <p>
                        <a href="tel:+1-555-555-5555">+1-555-555-5555</a>
                    </p>
                    <p>
                        minervaguitars@nowhere.com
                    </p>
                    <p>
                        555 Avenue X, Nowhere Town, NW, Nowhere Land
                    </p>
                    <p>
                        © 2020 Jonathan Engelbert
                    </p>
                </strong>
            </Navbar>
        </footer>
    )
}