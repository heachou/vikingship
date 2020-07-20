import React from 'react'
import Button,{ ButtonType, ButtonSize }  from './components/button'

function App() {
  return (
    <div className="App">
      <Button size={ButtonSize.Small} btnType={ButtonType.Danger}>hello</Button>
    </div>
  )
}

export default App
