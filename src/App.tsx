import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { Banners } from './components/Banners/Banners';
import { Traker } from './components/Traker/Traker';
import { BannersScroll } from './components/mainBannersScroll/BannersScroll';
import { Info } from './components/Info/Info';
import { Advantages } from './components/Advatages/Advatages';



function App() {
  return (
    <div className="root">
         <style>{'body { min-width: 1440px;width: 100%; background-color: #F8F8F9;}'}</style>
        <Navbar/>
        <Header/>
        <Banners/>
        <Traker searchType='auto' containerId='auto' company='auto'/>
        <BannersScroll/>
        <Info/>
        <Advantages/>
    </div>
  )
}

export default App;
