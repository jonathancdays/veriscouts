import React from 'react';

import { Footer, Blog, Reviews, Features, About, Header} from './containers';
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
      <Features />
      <Reviews />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default app