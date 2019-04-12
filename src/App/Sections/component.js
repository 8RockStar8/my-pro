import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function Sections() {
    return (
        <BrowserRouter>
            <Header />
            <Content />
            <Footer />
        </BrowserRouter>
    );
}

export default Sections;
