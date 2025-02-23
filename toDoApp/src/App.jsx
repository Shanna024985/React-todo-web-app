import { NavBar } from './components/navBar'
import { DivForDisplayingUsers } from './components/divForDisplayingUsers'
import { ButtonThatChangesNumber } from './components/ButtonThatChangesNumber'
import { createContext, useContext, useEffect, useRef, useState } from 'react'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <InputField></InputField>
      <div className='ml-4'>
        <ButtonThatChangesNumber></ButtonThatChangesNumber>
      </div>
    </>
  )
}

export default App

function InputField() {
  let inputReference = useRef(null)
  let [array, setArray] = useState(["User1", "User2", "User3", "User4", "User5"])
  let buttonToAddToArray = () => {
    setArray([...array, inputReference.current.value])
  }
  return (
    <>
      <div className='m-3'>
        <input type='text' ref={inputReference} className='bg-gray-200 p-3 rounded-xl' />
        <button className='ml-5 bg-emerald-100 p-3 rounded-xl hover:cursor-pointer' onClick={buttonToAddToArray}>Submit</button>
      </div>
      <DisplayData arrayForData={array}></DisplayData>
    </>
  )
}

function DisplayData(data) {
  let array = data.arrayForData
  return (
    <div className='flex gap-8 mt-6 ml-4 p-3 flex-wrap'>
      {array.map((value, index) => {
        return <DivForDisplayingUsers data={value} index={index} />
      })}
    </div>
  )
}