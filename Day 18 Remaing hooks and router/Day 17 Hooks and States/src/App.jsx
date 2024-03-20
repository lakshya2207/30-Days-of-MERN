import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carad from './components/Carad'
import { counterContext } from './context/context'
function App() {
  const [count, setCount] = useState(0)


  // case 1:run on every render
  useEffect(() => {
    // alert("case 1")
  
  })
  // Case 2 : run only time
  useEffect(() => {
    // alert("case 2")
  
  }, [])
  // Case 3 run on change
  useEffect(() => {
    // alert("count changed")
  
  }, [count])

  const handleMouse=(e)=>{
    const bell=document.getElementById('bell')
    console.log(bell);
    bell.play()
    setTimeout(() => {
      bell.load()
    }, 2000);
  }
  

  return (
    <>
    <counterContext.Provider value={count}>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      {count?<Carad/>:"none"}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p onMouseOver={handleMouse} className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <audio id='bell' src="./public/service-bell-ring-14610.mp3" controls="true">hi</audio>
    </counterContext.Provider>
    </>
  )
}

export default App
