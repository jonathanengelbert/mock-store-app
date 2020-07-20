import React from 'react';

import './aboutStyles.scss';

const About = (props: any) => {
    return (
        <div className={'about-container'}>
            <header>
                <h1>Our Mission and Remembering Nigel Boyle</h1>
            </header>
            <article>
                <div className={'statement'}>
                    <p>
                        Minerva guitars has been committed to provide the community with
                        the best equipment, at the fairest price for nearly four decades
                    </p>
                    <hr/>
                    <p>
                        Founded by Nigel Boyle in the fall of 1984 at a small corner shop
                        at Avenue X, Minerva Guitars quickly became the best place for guitarists
                        of all styles and backgrounds to shop, meet and grow.
                    </p>
                    <hr/>
                    <p>
                        Nigel, an accomplished guitarist himself, has sadly passed away on December
                        2009. His legacy however lives on, as Minerva Guitars continues to be owned
                        and operated by his children, Tom and Lilly
                    </p>
                </div>
            </article>
        </div>
    )
}

export default About;