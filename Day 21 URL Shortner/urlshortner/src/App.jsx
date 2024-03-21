import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Url_Input from './components/Url_Input'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div className="main h-screen bg-slate-950">

      <div className="nav top-0 bg-slate-900 text-center text-white p-5">
      <h1 className='text-4xl'>URL Shortner</h1>
      </div>
          <Url_Input/>
      </div>
      
    </>
  )
}

export default App
