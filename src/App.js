import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Contact from './container/Contact/Contact';

const App = () => (
    <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Contact />
        <Footer />
    </div>
);

export default App;