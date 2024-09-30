import { useState } from 'react';

import editIcon from './edit.svg';
import deleteIcon from './delete.svg';
import saveIcon from './save.svg';
import { EditEducationForm } from './EditEducationForm.jsx';

export function EditDeleteEducation({keyNum, eduValue, setEducation, education, formatDate}) {
    const [toggleHide, setToggleHide] = useState(true);

    const deformatDate = (setDate) => {
        const day = setDate.slice(3, 5);
        const month = setDate.slice(0, 2);
        const year = setDate.slice(6, 10);
        return `${year}-${month}-${day}`
    }


    return (
        <li key={keyNum} className='edit-delete-hobby-cont'>
            <p className={toggleHide ? 'visible' : 'hidden-no-anim'}>{eduValue.title}</p>

            <div className={!toggleHide ? 'visible' : 'hidden-no-anim'}>
                <div className='inputs-and-label'>
                    <label htmlFor="edit-school-title">Edit School Title: </label>
                    <input type="text" id='edit-school-title'className={toggleHide == true ? 'hidden-no-anim' : 'visible-no-anim-input-title'} defaultValue={eduValue.title}/>
                </div>
                <div className='inputs-and-label'>
                    <label htmlFor="edit-school-name">Edit School Name: </label>
                    <input type="text" id='edit-school-name'  className={toggleHide == true ? 'hidden-no-anim' : 'visible-no-anim-input-name'} defaultValue={eduValue.schoolName}/>
                </div>
                <div className='inputs-and-label'>
                    <label htmlFor="edit-school-location">Edit School Location: </label>
                    <input type="text" id='edit-school-location' className={toggleHide == true ? 'hidden-no-anim' : 'visible-no-anim-input-location'} defaultValue={eduValue.location}/>
                </div>
                <div className='inputs-and-label'>
                    <label htmlFor="edit-school-start-date">Edit School Start Date: </label>
                    <input type="date" id='edit-school-start-date' className={toggleHide == true ? 'hidden-no-anim' : 'visible-no-anim-input-date-start'} defaultValue={deformatDate(eduValue.dateStart)}/>
                </div>
                <div className='inputs-and-label'>
                    <label htmlFor="edit-school-end-date">Edit School End Date: </label>
                    <input type="date" id='edit-school-end-date' className={toggleHide == true ? 'hidden-no-anim' : 'visible-no-anim-input-date-end'} defaultValue={deformatDate(eduValue.dateEnd)}/>
                </div>
                <button onClick={() => {
                    const updatedEducation = {
                        title: document.querySelector('.visible-no-anim-input-title').value,
                        schoolName: document.querySelector('.visible-no-anim-input-name').value,
                        dateStart: formatDate(document.querySelector('.visible-no-anim-input-date-start').value),
                        dateEnd: formatDate(document.querySelector('.visible-no-anim-input-date-end').value),
                        location: document.querySelector('.visible-no-anim-input-location').value,


                    }


                    setEducation(prev => {
                        let newArr = [...prev];
                        newArr[keyNum] = updatedEducation;
                        return newArr
                    });

                    setToggleHide(true)
                }}><img src={saveIcon} alt="save" /></button>
            </div>
            <div className={`edit-delete-btns ${toggleHide ? 'visible' : 'hidden-no-anim'}`} >
                <button><img src={editIcon} alt="edit" onClick={() => {
                    
                    document.querySelector('.visible-no-anim-input-name') == null ? setToggleHide(prev => !prev) : null;

                }}/></button>
                <button onClick={() => {
                    setEducation(prev => prev.filter((currVal, index) => index !== keyNum))
                }}><img src={deleteIcon} alt="delete" /></button>
            </div>
        </li>
    )
}