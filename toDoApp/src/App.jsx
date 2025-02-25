import { NavBar } from './components/navBar'
import { DivForDisplayingUsers } from './components/divForDisplayingUsers'
import { ButtonThatChangesNumber } from './components/ButtonThatChangesNumber'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { ColorComponent } from './components/ColorComponent';
import { Route, Routes } from 'react-router-dom';
import { Elective } from './components/Elective';

export const colourContext = createContext();
function Home() {
  let [colorValue, setColorValue] = useState(0, 0, 0)
  return (
    <>
      <div>
        <InputField></InputField>
        <div className='ml-4'>
          <ButtonThatChangesNumber></ButtonThatChangesNumber>
        </div>
        <input type="color" value={colorValue} className='ml-3 rounded-4xl border-amber-50 border-r-2' onChange={e => setColorValue(e.target.value)} />
        <colourContext.Provider value={colorValue}>
          <ColorComponent />
        </colourContext.Provider>
      </div>

    </>
  )
}

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

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className='ml-4'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/elective' element={<Elective/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App

