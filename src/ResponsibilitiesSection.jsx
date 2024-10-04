import { useState } from 'react';
import editIcon from './edit.svg';
import deleteIcon from './delete.svg';
import saveIcon from './save.svg';

export function ResponsibilitiesSection({respons, setRespons}) {

    const [hidden, setHidden] = useState(true);

    const addResponsHandler = (e) => {
        e.preventDefault();
        setRespons(prev => [...prev, document.getElementById('add-respons-input').value]);
    }

    const deleteResponsHandler = (e) => {
        e.preventDefault();
        let copyResponsArr = [...respons];
        copyResponsArr.filter((currVal, indx) => indx == index)
    }

    const deformatDate = (setDate) => {
        const day = setDate.slice(3, 5);
        const month = setDate.slice(0, 2);
        const year = setDate.slice(6, 10);
        return `${year}-${month}-${day}`
    }
    

    return (
    <>
        <div className="inputs-and-label" style={{borderBottom: '1px solid black', padding: '0 0 1rem 0'}}>
            <label htmlFor="add-respons-input">Responsibility: </label>
            <textarea type="text" id='add-respons-input'/>
            
            <button onClick={addResponsHandler}>Add Responsibility</button>
        </div>
        <ul style={{margin: '1rem 0', padding: '0', listStyle: 'none'}}>
            {respons.map((responsValue, index) => {
                return (<li key={index} style={{display: 'flex', flexDirection:'column', gap: '.1rem', borderBottom: '1px solid black', padding: '1rem 0'}}>
                    <div className={`respons-value${index}`}>{responsValue}</div>
                    <div className={`inputs-and-label${index} hidden`}>
                        <label htmlFor={`edit-respons-input${index}`}>Edit Responsibility: </label>
                        <textarea type="text" id={`edit-respons-input${index}`} defaultValue={respons[index]}/>
                    </div>
                    <div className={`exp-save-btn${index} hidden`}>
                        <button onClick={(e) => {
                            e.preventDefault();
                            // setHidden(true);
                            document.querySelector(`.inputs-and-label${index}`).classList.add('hidden')
                            document.querySelector(`.exp-save-btn${index}`).classList.add('hidden')
                            document.querySelector(`.exp-edit-delete-btns${index}`).classList.remove('hidden')
                            document.querySelector(`.respons-value${index}`).classList.remove('hidden')
                            setRespons(prev => {
                                let newArr = [...prev];
                                newArr[index] = document.getElementById(`edit-respons-input${index}`).value;
                                return newArr;
                            })
                        }}><img src={saveIcon} alt="save" /></button>
                    </div>
                    <div style={{display: 'flex', gap: '.5rem', alignItems: 'flex-start'}} className={`exp-edit-delete-btns${index}`}>
                        <button style={{alignSelf: 'flex-start'}} onClick={(e) => {
                            e.preventDefault();
                            // setHidden(false)
                            document.querySelector(`.inputs-and-label${index}`).classList.remove('hidden')
                            document.querySelector(`.exp-save-btn${index}`).classList.remove('hidden')
                            document.querySelector(`.exp-edit-delete-btns${index}`).classList.add('hidden')
                            document.querySelector(`.respons-value${index}`).classList.add('hidden')
                        }}><img src={editIcon} alt="edit" /></button>
                        <button onClick={(e) => {
                            e.preventDefault();
                            let copyResponsArr = [...respons];
                            setRespons(copyResponsArr.filter((currVal, indx) => indx != index))
                        }}><img src={deleteIcon} alt="delete" /></button>
                    </div>
                </li>)
            })}
        </ul>
    </>
    )
}



