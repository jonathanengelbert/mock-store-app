import React from 'react';
import ProductList from "../../Components/ProductList/ProductList";
import {lessonsList} from "../../mock_data/lessons";

import './lessonsStyles.scss';

export default function Lessons() {
    return (
        <div>
            <header>
                <h1>Guitars</h1>
                <p>No matter the style, we got you covered</p>
            </header>
            <main>
                <ProductList
                    data={lessonsList}
                />

                <article>
                    <p>Not finding what you are looking for?</p>
                    <p>Contact us for special requests!</p>
                </article>
            </main>

        </div>
    )
}