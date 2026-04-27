import { useState } from 'react'

import './App.css'

import {Redus} from "./components/useReduser.tsx";
import {Callback, Hello, RandomSum} from "./components/memo.tsx";


function App() {
  const [count, setCount] = useState(0)

    const incriment = () =>{
      setCount(count => count + 1)
    }

  return (
    <>
        <button onClick={incriment}>Count: {count}</button>
        <br/>
        <hr style={{margin: '10px', width:"auto"}}/>

        <Redus/>

        <br/>
        <br/>

        <Hello name={'Alex'}/>

        <br/>
        <br/>

        <RandomSum/>

        <br/>
        <br/>


        <Callback/>
    </>
  )
}

export default App
