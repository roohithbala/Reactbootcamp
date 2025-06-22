import React, { useState } from 'react'

const Disp= () => {
  const init = ""
  const [count, setCount] = useState(init)

  return (
    <>
<div>

      <form id = "abc">
        <label htmlFor="Text">Please Enter the text</label>
        <div style={{ color: "red" }}>
      <h1 >{count}</h1>
        <input type="text" id='inp ' onChange={(e)=> setCount(e.target.value)}>
        </input>
        </div>
      </form>
    </div>
     
    </>
  )
}

export default Disp
