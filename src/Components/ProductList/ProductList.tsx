import React from 'react';
import ProductCard from "../ProductCard/ProductCard";
import {guitarsList} from '../../mock_data/guitars'

import './productListStyles.scss';


export default function ProductList() {

    function generateCards() {
        const products = guitarsList.map((p: any) => {
            return <ProductCard key={p.id} id={p.id} name={p.name} image={p.image} price={p.price}/>
        })
        return products;
    }


    return (
        <div className={'product-list-container'}>
            {generateCards()}
        </div>
    )
}