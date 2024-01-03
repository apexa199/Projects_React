import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Registration } from './pages/Registration';
import { ApplicationNav } from './components/ApplicationNav';
import { LogIn } from './pages/LogIn';
import { Home } from './pages/Home';
import { GridData } from './components/GridData';
import LangContext  from './pages/LangContext';
import { useState } from 'react';


function App() {


  const[lan,setLan] = useState('en')

  return (
    <LangContext.Provider value={{lan,setLan}} >
      
    <ApplicationNav/>
     

    <Routes>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/' element={<Registration></Registration>}></Route>
      <Route path='/login' element={<LogIn></LogIn>}></Route>
      <Route path='/GridData' element={<GridData></GridData>}></Route>
    </Routes>

    
    </LangContext.Provider> 
    
    );
}

export default App;
