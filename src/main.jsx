import React from 'react'
import ReactDOM from 'react-dom/client'
import  './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Home from './components/Home/Home.jsx';
import First from './components/First/First.jsx';
import Frind from './components/Frinds/Frind.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>This is the main content</div>,
//   },
//   {
//     path:'/about',
//     element: <About/>
//   },
//   {
//     path:'/contact',
//     element: <Contact/>
//   }
// ]);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
   
    children: [
      {
        path: "/",
        element: <First/>,
      },
      {
        path: "/frinds",
        element: <Frind/>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: 'contact',
        element: <Contact/>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
