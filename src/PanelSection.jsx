import { useState } from 'react';
import { ContactInfoInput, InputField, SummaryInput } from './InputField';

export function PanelSection({title, input, inputDefault, onChange, occupation}) {
    const [expand, setExpand] = useState('+');

    const expandHandler = () => expand == '+' ? setExpand('-') : setExpand('+');

    return (
        <section className='panel-section-container'>
            <div  onClick={expandHandler} className='panel-section'>
                <h2 className={expand == '+' ? null : 'selected-title'}>{title}</h2>
                <button className='expandBtn' onClick={expandHandler}>{expand}</button>
            </div>
            <div className={expand == '+' ? 'hidden' : 'visible'}>
            <InputField input={input} inputDefault={inputDefault} occupation={occupation} onChange={onChange}/>
            </div>
        </section>
    )
}

export function ContactSection({title, phone, onChange, email, linkedIn, location}) {
    const [expand, setExpand] = useState('+');

    const expandHandler = () => expand == '+' ? setExpand('-') : setExpand('+');
    return (    <section className='panel-section-container'>
    <div  onClick={expandHandler} className='panel-section'>
        <h2 className={expand == '+' ? null : 'selected-title'}>{title}</h2>
        <button className='expandBtn' onClick={expandHandler}>{expand}</button>
    </div>
    <div className={expand == '+' ? 'hidden' : 'visible'}>
        <ContactInfoInput phone={phone} onChange={onChange} email={email} linkedIn={linkedIn} location={location}/>
    </div>
</section>)
}

export function SummarySection({title, summary, onChange}) {
    const [expand, setExpand] = useState('+');

    const expandHandler = () => expand == '+' ? setExpand('-') : setExpand('+');

    return (
        <section className='panel-section-container'>
            <div  onClick={expandHandler} className='panel-section'>
                <h2 className={expand == '+' ? null : 'selected-title'}>{title}</h2>
                <button className='expandBtn' onClick={expandHandler}>{expand}</button>
            </div>
            <div className={expand == '+' ? 'hidden' : 'visible'}>
                <SummaryInput summary={summary} onChange={onChange}/>
            </div>
        </section>
    )
}