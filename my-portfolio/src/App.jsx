import { useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="parent">
        <div className="header">
            <div className="title">
              JT.
            </div>
            <nav className="navbar">
              <a>Home</a>
              <a>Education</a>
              <a>Projects</a>
              <a>Other Interests</a>   
            </nav>
            
        </div>
        <div className="content">
              <div className="txt">
                  <div className="txt1">Hi There!</div>
                  <div className="txt2">I'm a Developer</div>
                  <div className="txt3">&lt;  Code, Coffee & Creativity /&gt;</div>
                  
                  <button>Contact me</button>
              </div>
                <div className="photo">
                <img src="/images/background_sm.png"></img>
                </div>
              
              
              
        </div>
    </div>
    
  )
}

export default App
