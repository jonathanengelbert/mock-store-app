import React from 'react';

// BOOTSTRAP
import Carousel from 'react-bootstrap/Carousel'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import {LinkContainer} from 'react-router-bootstrap'

import './productCarouselStyles.scss';

const ProductCarousel = (props: any) => {
    function generateList(l: any) {
        return l.map((i: any) => {
            return (
                <LinkContainer to={`/about`}>
                    <Carousel.Item key={i.id}>

                        <img
                            className="d-block w-100"
                            src={i.image}
                            alt={i.name}
                        />
                        <Carousel.Caption>
                            <h3>{i.name}</h3>
                            <p>{i.price}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </LinkContainer>
            )
        })
    }

    return (
        <Router>
            <Carousel>
                {generateList(props.productList)}
            </Carousel>
        </Router>

    )
};

export default ProductCarousel;
