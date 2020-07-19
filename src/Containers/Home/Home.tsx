import React from 'react';
import ProductCarousel from "../../Components/ProductCarousel/ProductCarousel";
import {guitarsList} from "../../mock_data/guitars";
import {accessoriesList} from "../../mock_data/accessories";
import {lessonsList} from "../../mock_data/lessons";
import './homeStyles.scss';

// BOOTSTRAP

const Home = (props: any) => {

    return (
        <>
            <header>
                <h1>Minerva Guitars</h1>
                <h2>Serving our community for 36 years</h2>
            </header>

            <article className={"featured-container"}>
                <div className={'featured-description'}>
                    <p>Featured Guitars</p>
                    <p>No matter the style, we have what you are looking for</p>
                </div>
                <div className={"carousel-container"}>
                    <ProductCarousel
                        productList={guitarsList}
                    ></ProductCarousel>
                </div>
            </article>

            <article className={"featured-container"}>
                <div className={'featured-description'}>
                    <p>Latest Accesories</p>
                    <p>Equipment for recording, producing and making your music</p>
                </div>
                <div className={"carousel-container"}>
                    <ProductCarousel
                        productList={accessoriesList}
                    ></ProductCarousel>
                </div>
            </article>

            <article className={"featured-container"}>
                <div className={'featured-description'}>
                    <p>Lesson Packages</p>
                    <p>Individual and group lesson bundles with top instructors</p>
                </div>
                <div className={"carousel-container"}>
                    <ProductCarousel
                        productList={lessonsList}
                    ></ProductCarousel>
                </div>
            </article>

        </>
    )
};

export default Home;