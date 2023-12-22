import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from './Components/MainLayout/MainLayout';
import Home from './Components/Homepage/Home';
import Dash from './Components/Dashboard/Dash';
import Dashboardtabs from './Components/daShcom/Dashboardtabs';
import All from './Components/Alltask.jsx/All';
import Ongoing from './Components/Alltask.jsx/Ongoing';
import Complete from './Components/Alltask.jsx/Complete';
import New from './Components/Alltask.jsx/New ';
import Pending from './Components/Alltask.jsx/Pending';
import AuthPro from './Components/AuthProvider/AuthPro';
import Login from './Components/AuthProvider/Login';
import Register from './Components/AuthProvider/Register';
import AddTask from './Components/AddTask/AddTask';
import Up from './Components/UpdateTask.jsx/Up';
import Viewpro from './Components/ViewProfile]/Viewpro';
import Edit from './Components/ViewProfile]/Edit';
import Managealltask from './Components/Alltask.jsx/Managealltask';
import DataofCom from './Components/com/DataofCom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
     {
      path:"/",
      element:<Home></Home>
     },
     {
      path:"/log",
      element:<Login></Login>
     },{
      path:'/res',
      element:<Register></Register>
     }
  
    ]
  },{
    path:'/des',
    element:<Dash></Dash>,
    children:[
      {
        path:"/des",
        element:<Dashboardtabs></Dashboardtabs>
      },{
        path:'/des/all',
        element:<Managealltask></Managealltask>
      },{
        path:'/des/on',
        element:<Ongoing></Ongoing>
      },{
        path:'/des/com',
        element:<Complete></Complete>
      },{
        path:"/des/new",
        element:<New></New>
      },{
        path:"/des/pen",
        element:<Pending></Pending>
      },{
        path:"/des/add",
        element:<AddTask></AddTask>
      },{
        path:"/des/up/:id",
        element:<Up></Up>,
        loader:({params})=>fetch(`http://localhost:5000/task/data/${params.id}`),
      },{
        path:'/des/v',
        element:<Viewpro></Viewpro>
      },{
        path:'/des/e',
        element:<Edit></Edit>,
     
      },{
        path:'/des/complete/:id',
        element:<DataofCom></DataofCom>,
        loader:({params})=>fetch(`http://localhost:5000/task/data/${params.id}`),
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthPro>
    <RouterProvider router={router}></RouterProvider>
    </AuthPro>
 
  </React.StrictMode>,
)
