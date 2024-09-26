import { useState } from 'react';
import { ContactInfoInput, InputField, SummaryInput, HobbiesInput } from './InputField';
import { ResponsibilitiesSection } from './ResponsibilitiesSection';
import { EditDeleteHobbies } from './EditDeleteHobbies';

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

export function ExperienceSection({title, expBtnHandle}) {
    const [expand, setExpand] = useState('+');

    const expandHandler = () => expand == '+' ? setExpand('-') : setExpand('+');



    return (
        <section className='panel-section-container'>
            <div  onClick={expandHandler} className='panel-section'>
                <h2 className={expand == '+' ? null : 'selected-title'}>{title}</h2>
                <button className='expandBtn' onClick={expandHandler}>{expand}</button>
            </div>
            <div className={expand == '+' ? 'hidden' : 'visible'}>
                <div className="inputs-and-label">
                    <label>
                        Position Title: 
                        <input type="text" className='position-input'/>
                    </label>
                    
                </div>
                <div className="inputs-and-label">
                    <label>Company: </label>
                    <input type="text" className='company-input'/>
                </div>

                <div className="inputs-and-label">
                    <label>Date Start: </label>
                    <input type="date" className='date-start-input'/>
                </div>
                <div className="inputs-and-label">
                    <label>Date End: </label>
                    <input type="date" className='date-end-input'/>
                </div>
                <ResponsibilitiesSection/>
                <button onClick={expBtnHandle}>Add Work</button>
                
            </div>
        </section>
    )
}

export function HobbySection({title, addHobbyHandle, hobbies, setHobbies}) {
    const [expand, setExpand] = useState('+');

    const expandHandler = () => expand == '+' ? setExpand('-') : setExpand('+');

    return (
        <section className='panel-section-container'>
            <div  onClick={expandHandler} className='panel-section'>
                <h2 className={expand == '+' ? null : 'selected-title'}>{title}</h2>
                <button className='expandBtn' onClick={expandHandler}>{expand}</button>
            </div>
            <div className={expand == '+' ? 'hidden' : 'visible'}>
                <HobbiesInput addHobbyHandle={addHobbyHandle}/>
                <ul className='hobbies-ul'>
                {hobbies.map((hobby, i) => <EditDeleteHobbies key ={i} keyNum={i} hobbyValue={hobby} setHobbies={setHobbies} hobbies={hobbies}/>)}
                </ul>
            </div>
        </section>
    )
}