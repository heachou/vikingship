import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/button'

function App() {
  return (
    <div className="App">
      <Button
        className="my-btn"
        size={ButtonSize.Large} 
        btnType={ButtonType.Danger}
      >hello</Button>
    </div>
  )
}

export default App
