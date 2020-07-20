import React from 'react';
import ProductCard from "../ProductCard/ProductCard";

import './productListStyles.scss';


export default function ProductList(props: any) {


    function generateCards() {
       return  props.data.map((p: any) => {
            return <ProductCard key={p.id} id={p.id} name={p.name} image={p.image} price={p.price}/>
        })
    }


    return (
        <div className={'product-list-container'}>
            {generateCards()}
        </div>
    )
}