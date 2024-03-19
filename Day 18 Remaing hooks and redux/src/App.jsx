import { useEffect, useRef, useState,useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Welcome from './components/Welcome'


const nums = new Array(3000000).fill(0).map((_,i)=>{
  return {
    index:i,
    isMagical : i===2900000
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(nums)
  const btnref = useRef()

  const magical = useMemo(() => number.find(item=>item.isMagical===true), [number])

    // useEffect(() => {
    //   btnref.current.style.backgroundColor="red"
    
    // }, [])
  

  let a= useRef(0);
  useEffect(() => {
    console.log("c updated",a)
    a.current=a.current + 1;
    // alert("updated")
  })
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
    },
    {
      path: "/home",
      element: <><Navbar/>
      <span>Magical number is {magical.index}</span>
      <Home/> </>,
    },
    {
      path: "/home/:username",
      element: <><Navbar/><Home/><Welcome/></>,
    },
    {
      path: "/contact",
      element:<><Navbar/><Contact/></>,
    },
    {
      path: "/about",
      element: <> <Navbar/><About/> </>,
    },
  ]);
  return (
    <>
    {/* <Navbar/> */}
    <RouterProvider router={router}/>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React </h1>
      <div className="card">
        <button ref={btnref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {a.current} */}
    </>
  )
}

export default App
