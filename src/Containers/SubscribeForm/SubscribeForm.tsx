import React from 'react';
import Button from 'react-bootstrap/esm/Button';

import './subscribeFormStyles.scss';

export default function SubscribeForm() {
    return (
        <div className={'form-container'}>
            <p>Be in the know!</p>
            <p>Subscribe to our newsletter </p>
            <form action="/">
                <label htmlFor="email"></label>
                <input type="email" name="email" placeholder={"Enter your email"}/>
                <Button>Subscribe</Button>
            </form>
        </div>
    )
}