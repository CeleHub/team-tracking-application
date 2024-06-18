import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: Import your global styles
import App from './App'; // Import your main component
import EmployeePage from './body/EmployeePage';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import AddEmployee from './body/manageemployee';
import Manageemployee from './body/manageemployee';
// Import your main component

const route=createBrowserRouter([
    {
 path:'/',
 element:<App/>
},
{
    path:'/employees',
    element:<EmployeePage/>
},
{
    path:"/manageemployee",
    element:<Manageemployee/>

},
{
    path:"/manageemployee",
    element:<Manageemployee/>

}
])



const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <RouterProvider router={route}/>
               
    </React.StrictMode>
);

