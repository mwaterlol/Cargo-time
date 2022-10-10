import React, {useState} from 'react';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Banners } from './components/Banners';
import { Calculator } from './components/Calculator';
import { BannersScroll } from './components/BannersScroll';



function App() {
  return (
    <div className="root">
        <Navbar/>
        <Header/>
        <Banners/>
        <Calculator searchType='auto' containerId='auto' company='auto'/>
        <BannersScroll/>
    </div>
  )
}

export default App;
