
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Leafdiagnosis from './Components/Leafdiagnosis/Leafdiagnosis.jsx'
import Profile from './Components/Profile/Profile.jsx'
import Wateranalysis from './Components/Wateranalysis/Wateranalysis.jsx'
import Setting from './Components/Setting/Setting.jsx'
import Login from './Components/Login/Login.jsx'
import Signup from './Components/Signup/Signup.jsx'
import NotFound from './Components/NotFound/NotFound.jsx'


let routers = createBrowserRouter([{
  path: '', element: <Layout />, children: [
    { index: true, element: <Signup /> },
    { path: 'login', element: <Login /> },
    { path: 'home', element: <Home /> },
    { path: 'leafdiagnosis', element: <Leafdiagnosis /> },
    { path: 'wateranalysis', element: <Wateranalysis /> },
    { path: 'profile', element: <Profile /> },
    { path: 'setting', element: <Setting /> },
    { path: '*', element: <NotFound /> },
  ]
}])
function App() {

  return <>

    <RouterProvider router={routers}></RouterProvider>

  </>
}

export default App
