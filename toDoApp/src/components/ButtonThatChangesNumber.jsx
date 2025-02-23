import { useRef, useState } from "react"

export const ButtonThatChangesNumber = () => {
    let [number,setNumber] = useState(0)
    let paragraphRef = useRef(null)
    let changeNumber = ()=>{
        setNumber(number += 1)
        console.log(paragraphRef.current.textContent)
    }
    return (
    <div>
        <button onClick={changeNumber} className="hover:cursor-pointer">Click me</button>
        <p ref={paragraphRef}>{number}</p>
    </div>
  )
}
