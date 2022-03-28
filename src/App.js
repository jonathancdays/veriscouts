import React from 'react';

import { Footer, Blog, Reviews, Testimonials, About, Header} from './containers';
import {Article, Brand, Navbar, CTA} from './components';
import './App.css';

const app = () => {
  return (
    <div className="App">
      <div ClassName="bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <About />
      <Testimonials />
      <Reviews />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default app