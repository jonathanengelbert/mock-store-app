import React from 'react';
import ProductCarousel from "../../Components/ProductCarousel/ProductCarousel";
import SubscribeForm from "../SubscribeForm/SubscribeForm";
import {guitarsList} from "../../mock_data/guitars";
import {accessoriesList} from "../../mock_data/accessories";
import {lessonsList} from "../../mock_data/lessons";

import './homeStyles.scss';

// BOOTSTRAP
import Button from 'react-bootstrap/esm/Button';
import {LinkContainer} from "react-router-bootstrap";

const Home = (props: any) => {

    return (
        <>
            <header>
                <h1>Minerva Guitars</h1>
                <h2>Serving our community for 36 years</h2>
            </header>

            <article className={'featured-container'}>
                <div className={`featured-description `}>
                    <p>Featured Guitars</p>
                    <p>No matter the style, we have what you are looking for</p>
                    <LinkContainer to={'/guitars'}>
                        <Button>Guitar Catalogue</Button>
                    </LinkContainer>
                </div>
                <div className={"carousel-container"}>
                    <ProductCarousel
                        productList={guitarsList}
                    ></ProductCarousel>
                </div>
            </article>

            <article className={"featured-container"}>
                <div className={'featured-description description-left'}>
                    <p>Latest Equipment</p>
                    <p>Equipment for recording, producing <br/>and making your music</p>
                    <LinkContainer to={'/equipment'}>
                        <Button>Equipment Catalogue</Button>
                    </LinkContainer>
                </div>
                <div className={"carousel-container carousel-right"}>
                    <ProductCarousel
                        productList={accessoriesList}
                    ></ProductCarousel>
                </div>
            </article>

            <article className={"featured-container"}>
                <div className={'featured-description'}>
                    <p>Lesson Packages</p>
                    <p>Individual and group lesson bundles with top instructors</p>
                    <LinkContainer to={'/lessons'}>
                        <Button>Lessons Catalogue</Button>
                    </LinkContainer>
                </div>
                <div className={"carousel-container"}>
                    <ProductCarousel
                        productList={lessonsList}
                    ></ProductCarousel>
                </div>
            </article>
            <article>
                <SubscribeForm/>
            </article>
        </>
    )
};

export default Home;