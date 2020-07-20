import React from 'react';
import { LinkContainer } from "react-router-bootstrap";

import './productCardStyles.scss';


// BOOTSTRAP
import Card from 'react-bootstrap/Card'

type Props = {
    id: number,
    name: string,
    image: string,
    price: string
}

export default function ProductCard(props: Props) {
    return (
        <LinkContainer className={'card-container'} to={`/products:${props.id}`} key={props.id}>
            <Card style={{ width: '10rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </LinkContainer>
    )
}