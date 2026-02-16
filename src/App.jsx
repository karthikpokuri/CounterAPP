import { useState } from 'react'
import './App.css'

function App() {
  const [txt, setTxt] = useState("")
  const changeTxt = (event) => {
    setTxt(event.target.value)
  }
  return (
    <>
      <div>
        <input value={txt} onChange={changeTxt} type="text" />
        <p>{txt}</p>
      </div>
    </>
  );
}

export default App
