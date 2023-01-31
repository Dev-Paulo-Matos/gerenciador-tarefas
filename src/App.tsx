import React from 'react';
import Main from './components/core/main/Main';
import './app.css';
import { Header } from './components/core/header/Header';
import { SectionMain } from './components/sections/main/Section-Main';
import { Footer } from './components/core/footer/Footer';

import { Routers } from './routers/Routers';


function App() {
  return (
    <React.Fragment>
      <Routers />
      <Footer />
    </React.Fragment>
  );
}

export default App;
