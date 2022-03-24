import React from 'react';

import { Footer, Blog, Possibility, Features, What, Header} from './containers';
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
      <What />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default app