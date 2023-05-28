import React from 'react';
import MyComponent from './myComponent.js';

const landingPage = () => {
    return (
    <a className="landing-page-a" href="/main">
        <div id="container"><MyComponent /></div>
        <div className="hover-native" id="hover-native"></div>
    </a>
     );
}
 
export default landingPage;