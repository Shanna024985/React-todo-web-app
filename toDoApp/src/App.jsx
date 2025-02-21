import { NavBar }  from './components/navBar'
import './App.css'
import { DivForDisplayingUsers } from './components/divForDisplayingUsers'
import { ButtonThatChangesNumber } from './components/ButtonThatChangesNumber'
import { useEffect, useRef, useState } from 'react'

function App() {
  let inputReference = useRef(null)
  let [array,setArray] = useState(["User1", "User2", "User3", "User4", "User5"])
  let buttonToAddToArray = ()=>{
    setArray([...array,inputReference.current.value]) 
  }
  useEffect(()=>{
    console.log("pos")
    return ()=>{
      console.log("Cleaned up the function")
    }
  },[array])
  return (
    <>
      <NavBar></NavBar>
      <div className='m-3'>
        <input type='text' ref={inputReference} className='bg-gray-200 p-3 rounded-xl'/>
        <button className='ml-5 bg-emerald-100 p-3 rounded-xl' onClick={buttonToAddToArray}>Submit</button>
      </div>
      <div className='flex gap-8 mt-6 ml-4 p-3 flex-wrap'>
        {array.map((value,index)=>{
          return <DivForDisplayingUsers data={value} index={index}/>
        })}
      </div>
      <ButtonThatChangesNumber></ButtonThatChangesNumber>
    </>
  )
}

export default App
