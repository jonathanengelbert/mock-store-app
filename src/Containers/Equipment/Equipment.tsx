import React from 'react';
import ProductList from "../../Components/ProductList/ProductList";
import {accessoriesList} from "../../mock_data/accessories";

export default function Equipment() {
    return (
        <div>
            <header>
                <h1>Equipment</h1>
                <p>Recording, producing and making your music just got easier</p>
            </header>
            <main>
                <ProductList
                    data={accessoriesList}
                />

                <article>
                    <p>Not finding what you are looking for?</p>
                    <p>Contact us for special requests!</p>
                </article>
            </main>

        </div>
    )
}