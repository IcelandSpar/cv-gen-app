import { useState } from 'react'

export function ResponsibilitiesSection() {
    const [numberInput, setNumberInput] = useState([<ResponsInput />]);

    const addResponsInputHandler = () => {
        setNumberInput(prev => [...prev, <ResponsInput />])
        
    }

    return (
    <div className="inputs-and-label">
        {numberInput.map((input, i) => <ResponsInput key={i}/>)}
        
        <button onClick={addResponsInputHandler}>Add Responsibility</button>
    </div>
    )
}



export function ResponsInput() {
    return (
        <>
            <label>Responsibilities: </label>
            <input type="text" className={'respons-input'}/>

        </>
    )
}