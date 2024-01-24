
import React from 'react';
import { Footer } from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Header1 } from './Components/Header/Header1';

function App() {
  return (
    <>
      <Header1/>
      <Outlet/>
      <Footer/>
    </>
    
    );
}

export default App;
