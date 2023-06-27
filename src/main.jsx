import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Layouts/Home/Home.jsx';
import Main from './Main/Main.jsx';
import Features from './Components/Features/Features';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {path:"/", element:<Home></Home>},
      {path:"/features" , element:<Features></Features>},
      {path:"/skills" , element:<Skills></Skills>},
      {path:"/contact-with-me" , element:<Contact></Contact>}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
