
import { useState } from 'react';
import editIcon from './edit.svg';
import deleteIcon from './delete.svg';
import saveIcon from './save.svg';

export function EditDeleteHobbies({keyNum, hobbyValue, setHobbies, hobbies}) {

    const [toggleHide, setToggleHide] = useState(true);

    
    

    return (
        <li key={keyNum} className='edit-delete-hobby-cont'>
            <div onClick={() => {
                    
                    document.querySelector('.visible-no-anim-input') == null ? setToggleHide(prev => !prev) : null;
                    

                }}>
                <p className={!toggleHide == true ? 'hidden-no-anim' : 'visible-no-anim'} defaultValue={hobbyValue}>{hobbyValue}</p>

                    <input type="text" className={toggleHide == true ? 'hidden-no-anim' : 'visible-no-anim-input'} defaultValue={hobbyValue}/>
                    <button className={toggleHide == true ? 'hidden-no-anim' : 'visible-no-anim'} onClick={() => {
                        setHobbies(prevHob => {
                            const newHobArr = [...prevHob];
                            newHobArr[keyNum] = document.querySelector('.visible-no-anim-input').value;
                            return newHobArr
                        })
                        setToggleHide(prev => !prev)


                    }}><img src={saveIcon} alt='save'></img></button>
            </div>
            
            <div className="edit-delete-btns" >
                <button onClick={() => {
                    
                    document.querySelector('.visible-no-anim-input') == null ? setToggleHide(prev => !prev) : null;

                }} className={!toggleHide == true ? 'hidden-no-anim' : 'visible-no-anim'}><img src={editIcon} alt='edit'></img></button>
                <button onClick={() => {
                    setHobbies(prev => prev.filter((currVal, index) => index !== keyNum))
                }} className={!toggleHide == true ? 'hidden-no-anim' : 'visible-no-anim'}><img src={deleteIcon} alt='delete'></img></button>
            </div>
        </li>
    )
}

export function EditDeleteBullets({keyNum, bulletValue, setBullets, bullets}) {
    const [toggleHide, setToggleHide] = useState(true);
    return (
        <li key={keyNum} className='edit-delete-hobby-cont'>
            <div onClick={() => {
                    
                    document.querySelector('.visible-no-anim-input') == null ? setToggleHide(prev => !prev) : null;
                    

                }}>
                <p className={!toggleHide == true ? 'hidden-no-anim' : 'visible-no-anim'} defaultValue={bulletValue}>{bulletValue}</p>

                    <input type="text" className={toggleHide == true ? 'hidden-no-anim' : 'visible-no-anim-input'} defaultValue={bulletValue}/>
                    <button className={toggleHide == true ? 'hidden-no-anim' : 'visible-no-anim'} onClick={() => {
                        setBullets(prevHob => {
                            const newHobArr = [...prevHob];
                            newHobArr[keyNum] = document.querySelector('.visible-no-anim-input').value;
                            return newHobArr
                        })
                        setToggleHide(prev => !prev)


                    }}><img src={saveIcon} alt='save'></img></button>
            </div>
            
            <div className="edit-delete-btns" >
                <button onClick={() => {
                    
                    document.querySelector('.visible-no-anim-input') == null ? setToggleHide(prev => !prev) : null;

                }} className={!toggleHide == true ? 'hidden-no-anim' : 'visible-no-anim'}><img src={editIcon} alt='edit'></img></button>
                <button onClick={() => {
                    setBullets(prev => prev.filter((currVal, index) => index !== keyNum))
                }} className={!toggleHide == true ? 'hidden-no-anim' : 'visible-no-anim'}><img src={deleteIcon} alt='delete'></img></button>
            </div>
        </li>
    )
}