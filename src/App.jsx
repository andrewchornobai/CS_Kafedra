import React from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { News } from './components/elementsInBurgerMenu/News/News';

import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { ProSpecialnist } from './components/BoxItem_Block/ProSpecialnist/ProSpecialnist';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/ProSpecialnist" element={<ProSpecialnist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
