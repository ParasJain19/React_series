import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter,setCounter] =useState(5)


  const addvalue=()=>{
    if(counter<=19)
    counter=counter+1;
    setCounter(counter);
}
const dec_value=()=>{
  if(counter>0)
  counter=counter-1;
  setCounter(counter);
}

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>counter value:{counter}</h2>
    <button
    onClick={addvalue}>Add Value {counter}</button>
    <br />
    <button
    onClick={dec_value}>Decrease Value {counter}</button>
    </>
  )
}

export default App
