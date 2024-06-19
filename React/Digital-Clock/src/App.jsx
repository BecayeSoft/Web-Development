import { useState } from 'react'
import DigitalClock from './DigitalClock'
import './App.css'

function App() {

    const [showClock, setShowClock] = useState(true)

    return (
      <>
        <div className="app">
            {showClock && <DigitalClock />}
        </div>

        <button style={ {marginTop: '20px'} } 
          onClick={() => setShowClock(!showClock)}>
            {showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
      </>
    )
  
}

export default App
