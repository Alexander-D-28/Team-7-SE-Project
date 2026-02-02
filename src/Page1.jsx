import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0);

  return (
    <>
      
      <div>

        <p style={{fontSize: '54px'}}>
          Hello team 7 SE group
        </p>

        <button onClick={() => setCount((count) => count + 1)}>
          You have clicked me: {count} times
        </button>
        
        <div style={{marginTop: '500px'}}>
          <button onClick={() => setCount2((count2) => count2 + 1)}>
            You have clicked not_me: {count2} times
          </button>
        </div>

      </div>

    </>
  )
}

export default App
