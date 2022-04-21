# Networking-Site

<!-- PROJECT SHIELDS -->

<a href="https://www.linkedin.com/in/johndays/">![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)</a>
<a href="https://www.jonathancdays.com/">![Portfolio](https://img.shields.io/badge/Portfolio-%23000000.svg?style=for-the-badge&logo=firefox&logoColor=#FF7)</a>
<a href="https://github.com/jonathancdays">![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)</a>
<a href=" "> </a>
<a href=" "> </a>

<!-- PROJECT LOGO -->

<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="src/assets/logo.svg" alt="Logo" width="400" height="400">
  </a>

  <h3 align="center">Veriscouts</h3>

  <p align="center">
 I have taken inspiration and my experience from my previous employer to design and code a personal project for creative purposes. I do not own any Veriscouts assets.
    <br> 
    <a href="https://github.com/JelaniDays/professional_review_site"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://www.jonathancdays.com/projects/networking-graphic-design.html">View Graphics</a>
    .
    <a href="https://www.figma.com/proto/I1faTmZyVSqyErkWu1jEtF/Veriscouts?node-id=60841%3A14&scaling=min-zoom&page-id=0%3A1">View UX & UI </a>
    ·
    <a href="https://www.jonathancdays.com/projects/networking-branding.html">View Brand Design</a> 
    ·
    <a href="https://jonathan-days-networking-site-project.netlify.app/">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [HTML](https://html.spec.whatwg.org/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

This project uses NPM as package manager

```bash
 npm install --global
```

### Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

<h2>Index</h2>

```javascript
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
```

<h2>App</h2>

```javascript
import React from "react";

import {
  Footer,
  Blog,
  Reviews,
  Testimonials,
  About,
  Header,
} from "./containers";
import { Brand, Navbar, CTA } from "./components";
import "./App.css";

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
  );
};

export default app;
```

<h2>Component Example</h2>

```javascript
import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./imports";

const Brand = () => {
  return (
    <div className="brand">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Create sketch of site.
- [x] Construct sitemap.
- [x] Create wireframe.
- [x] Design prototype
- [x] Program live site.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Jonathan Days - jonathancdays@gmail.com

Linkedin - https://www.linkedin.com/in/johndays/

Project Link: [https://github.com/JelaniDays/professional_review_site](https://github.com/JelaniDays/professional_review_site)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [MIT Liscence](https://opensource.org/licenses/MIT)
- [Material Componentas](https://github.com/material-components)
- [MongoDB](https://github.com/mongodb/mongo)
- [Express](https://github.com/expressjs/express)
- [React](https://github.com/facebook/react)
- [Node](https://github.com/nodejs/node)

<p align="right">(<a href="#top">back to top</a>)</p>
