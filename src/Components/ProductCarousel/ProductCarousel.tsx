import React from 'react';

// BOOTSTRAP
import Carousel from 'react-bootstrap/Carousel'


import {LinkContainer} from 'react-router-bootstrap'

import './productCarouselStyles.scss';

const ProductCarousel = (props: any) => {
    function generateList(l: any) {
        return l.map((i: any) => {
            return (
                <LinkContainer to={`/products:${i.id}`} key={i.id}>
                    <Carousel.Item>

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
            <Carousel>
                {generateList(props.productList)}
            </Carousel>
    )
};

export default ProductCarousel;
