import React from 'react'
import About from './components/About'
import Counter from './components/Counter'
import Disp from './components/Disp'
import TitleUpdater from './components/Usereffect'
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
    </div>
  )
}

export default App