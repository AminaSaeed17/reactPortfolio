import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Work from './Components/Work/Work';

function App() {





  const router = createBrowserRouter([
    {path: '/', element: <Layout/>, children: [
      {index: true, element: <Home/>},
      {path: 'about', element: <About/>},
      {path: 'skills', element: <Skills/>},
      {path: 'experience', element: <Experience/>},
      {path: 'work', element: <Work/>},
    ]},
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
