import { useState } from 'react';
import { InputField } from './InputField';

export function PanelSection({title, input, inputDefault, onChange, occupation}) {
    const [expand, setExpand] = useState('+');

    const expandHandler = () => expand == '+' ? setExpand('-') : setExpand('+');

    return (
        <section className='panel-section-container'>
            <div  onClick={expandHandler} className='panel-section'>
                <h2>{title}</h2>
                <button className='expandBtn' onClick={expandHandler}>{expand}</button>
            </div>
            <div className={expand == '+' ? 'hidden' : 'visible'}>
                <InputField input={input} inputDefault={inputDefault} occupation={occupation} onChange={onChange}/>
            </div>
        </section>
    )
}