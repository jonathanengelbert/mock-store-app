import React from 'react';
import ProductCarousel from "../../Components/ProductCarousel/ProductCarousel";
import { testList } from "../../mock_data/guitars";
import './homeStyles.scss';

// BOOTSTRAP

const Home = (props: any) => {

    return (
        <>
            <header>
                <h1>Minerva Guitars</h1>
                <h2>Serving our community for 36 years</h2>
            </header>

            <article>
                <h3>Guitars</h3>
                <ProductCarousel
                  productList={testList}
                />
            </article>

            <article>
                <h3>Accessories</h3>
                <ProductCarousel
                    productList={testList}
                />
            </article>
        </>
    )
}

export default Home;