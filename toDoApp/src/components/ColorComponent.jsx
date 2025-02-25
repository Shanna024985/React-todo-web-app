import React, { useContext } from 'react'
import { colourContext } from '../App'

export const ColorComponent = () => {
  let colorContext = useContext(colourContext)
  return (
    <div className='ml-4'>{colorContext}</div>
  )
}
