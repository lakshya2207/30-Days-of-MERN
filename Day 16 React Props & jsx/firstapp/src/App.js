import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Nav from './components/Nav';
function App() {
  const [num, setNum] = useState(0)
  const inc = ()=>{
    setNum(num+1);
  }
  return (
    <div className="App">
      <Nav title="First App" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {num}
        </a>
        <button onClick={inc}>Click to react {num}</button>
      </header>
    </div>
  );
}

export default App;
