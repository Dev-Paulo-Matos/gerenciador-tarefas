import React from 'react';
import './app.css';
import { Footer } from './components/core/footer/Footer';
import { Header } from './components/core/header/Header';

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
