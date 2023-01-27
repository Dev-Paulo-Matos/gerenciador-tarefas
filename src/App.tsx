import React from 'react';
import Main from './components/core/main/Main';
import './app.css';
import { Header } from './components/core/header/Header';
import { SectionMain } from './components/sections/main/Section-Main';
import { Footer } from './components/core/footer/Footer';
import { SectionContato } from './components/sections/contato/Section-Contato';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <SectionMain />
      <SectionContato />
      <Footer />
    </React.Fragment>
  );
}

export default App;
