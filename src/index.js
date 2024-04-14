import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/Main';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Project2 from './components/routes/Project2';

const router = createBrowserRouter([
  {
    path: "/Portfolio",
    element: <Main />
  },
  {
    path: "/Portfolio/Projects/:projectId",
    element: <Project2 />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);