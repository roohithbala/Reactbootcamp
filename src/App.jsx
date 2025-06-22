import React from 'react'
import About from './components/About'
import Counter from './components/Counter'
import Disp from './components/Disp'
import TitleUpdater from './components/Usereffect'
import Timer from './components/Timer'
const App = () => {
  return (
    <div>
      This is in app
      <br></br>
      <About/>
      <br></br>
      <Counter/>
      <br></br>
      <Disp/>
      <br />
      <TitleUpdater/>
      <br />
      <Timer/>
    </div>
  )
}

export default App