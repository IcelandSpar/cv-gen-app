import { useState } from 'react';

export function PanelSection({title, inputs}) {
    const [expand, setExpand] = useState('+');

    const expandHandler = () => expand == '+' ? setExpand('-') : setExpand('+');
    

    return (
        <section className='panel-section-container'>
            <div  onClick={expandHandler} className='panel-section'>
                <h2>{title}</h2>
                <button className='expandBtn' onClick={expandHandler}>{expand}</button>
            </div>
            <div className={expand == '+' ? 'hidden' : null}>
                <div className='inputs-and-label'>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id='name'/>
                </div>
                <div className='inputs-and-label'>
                    <label htmlFor="occupation">Occupation: </label>
                    <input type="text" id='occupation'/>
                </div>
            </div>
        </section>
    )
}