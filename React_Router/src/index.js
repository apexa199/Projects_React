import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { About } from './Components/About/About';
import { ContactUs } from './Components/ContactUs/ContactUs';
import { User } from './Components/User/User';


// const router = createBrowserRouter([

//   {
//     path:'/',
//     element:<App/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contactus",
//         element:<ContactUs/>
//       }]

//   }
// ])

const router = createBrowserRouter(

  createRoutesFromElements(
    
    <Route Path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contactus' element={<ContactUs/>}/>
      <Route path='user/:userid' element={<User/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={router}/>   
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
