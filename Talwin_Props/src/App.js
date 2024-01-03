import React from 'react';
import { Card } from './Components/Card';
import './App.css';

function App() {
  return (
    <>
      <h1 className='text-center p-4 rounded-xl  bg-blue-200'>Tailwind test</h1>
      <Card username="About Something" btnText = "Click me"/>
      <Card username="About Else"/>

    </>
  );
}

export default App;
