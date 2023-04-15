import React from 'react';
import './App.css';
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
