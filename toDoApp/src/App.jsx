import { NavBar }  from './components/navBar'
import './App.css'
import { useState } from 'react'
import { DivForDisplayingUsers } from './components/divForDisplayingUsers'

function App() {
  let array = ["User1", "User2", "User3", "User4", "User5"]
  return (
    <>
      <NavBar></NavBar>
      <div className='flex gap-8 mt-6 ml-4 p-3'>
        {array.map((value,index)=>{
          return <DivForDisplayingUsers data={value} index={index}/>
        })}
      </div>
    </>
  )
}

export default App
