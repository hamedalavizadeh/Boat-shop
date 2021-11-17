import React, { Fragment } from 'react';
import Navbar from './components/header';
import { BrowserRouter as Router } from 'react-router-dom';
import Slider from './components/body/Slider/index';
import VideoBox from './components/body/VideoBox';
import Product from './components/body/Products';
import ShowAll from './components/body/ShowAll';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Slider />
        <VideoBox />
        <Product />
        <ShowAll />
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
