import { useState } from 'react';
import { ContactInfoInput, InputField, SummaryInput, HobbiesInput, AddInput, AddEducationInputs } from './InputField';
import { ResponsibilitiesSection } from './ResponsibilitiesSection';
import { EditDeleteBullets, EditDeleteHobbies } from './EditDeleteHobbies';
import { EditDeleteEducation } from './EditDeleteEducation';
import contactIcon from './contact-icon.png';
import summaryIcon from './summary-icon.svg';
import hobbiesIcon from './hobbies.png';
import workExpIcon from './work-exp-icon.svg';


export function PanelSection({title, input, inputDefault, onChange, occupation, updateProfileImg, profilePic}) {
    const [expand, setExpand] = useState('-');

    const expandHandler = () => expand == '+' ? setExpand('-') : setExpand('+');

    return (
        <section className='panel-section-container'>
            <div  onClick={expandHandler} className='panel-section'>
                <div className="img-title-container">
                    <img className='edit-panel-img' src={profilePic} alt="profile" width='30px' height='30px'/>
                    <h2 className={expand == '+' ? null : 'selected-title'}>{title}</h2>
                </div>
                <button className='expandBtn' onClick={expandHandler}>{expand}</button>
            </div>
            <div className={expand == '+' ? 'hidden' : 'visible'}>
            <InputField input={input} inputDefault={inputDefault} occupation={occupation} onChange={onChange} updateProfileImg={updateProfileImg}/>
            </div>
        </section>
    )
}

export function ContactSection({title, phone, onChange, email, linkedIn, location}) {
    const [expand, setExpand] = useState('+');

    const expandHandler = () => expand == '+' ? setExpand('-') : setExpand('+');
    return (    <section className='panel-section-container'>
    <div  onClick={expandHandler} className='panel-section'>
        <div className="img-title-container">
            <img src={contactIcon} alt="contact" width='30px' height='30px'/>
            <h2 className={expand == '+' ? null : 'selected-title'}>{title}</h2>
        </div>
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
                <div className="img-title-container">
                    <img src={summaryIcon} alt="summary" width='30px' height='30px'/>
                    <h2 className={expand == '+' ? null : 'selected-title'}>{title}</h2>
                </div>
                <button className='expandBtn' onClick={expandHandler}>{expand}</button>
            </div>
            <div className={expand == '+' ? 'hidden' : 'visible'}>
                <SummaryInput summary={summary} onChange={onChange}/>
            </div>
        </section>
    )
}

export function ExperienceSection({title, setExp, exp}) {
    const [expand, setExpand] = useState('+');
    const [respons, setRespons] = useState(['Your Responsibilities...'])

    const expandHandler = () => expand == '+' ? setExpand('-') : setExpand('+');

    const formatDate = (inputValue) => {
        const year = inputValue.slice(0, 4);
        const month = inputValue.slice(5, 7);
        const day = inputValue.slice(8, 10);

        return `${month}/${day}/${year}`
}




    const expBtnHandle = (e) => {
        e.preventDefault()
        
    
        
        setExp([...exp, {
          
          position: document.querySelector('.position-input').value,
          company: document.querySelector('.company-input').value,
          dateStart: formatDate(document.querySelector('.date-start-input').value),
          dateEnd: formatDate(document.querySelector('.date-end-input').value),
          respons: respons
        }])
        setRespons([])
        
    }



    return (
        <section className='panel-section-container'>
            <div  onClick={expandHandler} className='panel-section'>
                <div className="img-title-container">
                    <img src={workExpIcon} alt="work history" width='30px' height='30px'/>
                    {/* <a href="https://www.flaticon.com/free-icons/work-experience" title="work experience icons">Work experience icons created by Design Circle - Flaticon</a> */}
                    <h2 className={expand == '+' ? null : 'selected-title'}>{title}</h2>
                </div>
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
                <ResponsibilitiesSection respons={respons} setRespons={setRespons}/>
                <button onClick={expBtnHandle}>Add Work</button>
                <ul>
                    {exp.map((obj, index) => <li key={index}>{obj.position}</li>)}
                </ul>
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
                <div className="img-title-container">
                    <img src={hobbiesIcon} alt="hobbies icon" width='30px' height='30px'/>
                        {/* <a href="https://www.flaticon.com/free-icons/hobbies" title="hobbies icons">Hobbies icons created by GOWI - Flaticon</a> */}
                    <h2 className={expand == '+' ? null : 'selected-title'}>{title}</h2>
                </div>
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

export function AddBulletPointPanel({title, bullets, setBullets, addBulletHandle, iconSrc}) {
    const [expand, setExpand] = useState('+');

    const expandHandler = () => expand == '+' ? setExpand('-') : setExpand('+');

    return (
        <section className='panel-section-container'>
            <div  onClick={expandHandler} className='panel-section'>
                <div className="img-title-container">
                    <img src={iconSrc} alt={`${title} icon`} width='30px' height='30px'/>
                    {/* {<a href="https://www.flaticon.com/free-icons/translate" title="translate icons">Translate icons created by Atif Arshad - Flaticon</a>} */}
                    {/* {<a href="https://www.flaticon.com/free-icons/capacity" title="capacity icons">Capacity icons created by Nuaba - Flaticon</a>} */}
                     
                    <h2 className={expand == '+' ? null : 'selected-title'}>{title}</h2>
                </div>
                <button className='expandBtn' onClick={expandHandler}>{expand}</button>
            </div>
            <div className={expand == '+' ? 'hidden' : 'visible'}>
                <AddInput title={title} addBulletHandle={addBulletHandle}/>
                <ul className='hobbies-ul'>
                    {bullets.map((bullet, i) =>  <EditDeleteBullets key={i} keyNum={i} bulletValue={bullet} setBullets={setBullets} bullets={bullets}/>)}
                </ul>
                
            </div>
        </section>
    )
}

export function EducationSection({srcIcon, title, education, setEducation}) {
    const [expand, setExpand] = useState('+');

    const expandHandler = () => expand == '+' ? setExpand('-') : setExpand('+');

    const formatDate = (inputValue) => {
        const year = inputValue.slice(0, 4);
        const month = inputValue.slice(5, 7);
        const day = inputValue.slice(8, 10);

        return `${month}/${day}/${year}`
}

    return (
        <section className='panel-section-container'>
            <div  onClick={expandHandler} className='panel-section'>
                <div className="img-title-container">
                    <img src={srcIcon} alt={title} width='30px' height='30px'/>
                    {/* <a href="https://www.flaticon.com/free-icons/work-experience" title="work experience icons">Work experience icons created by Design Circle - Flaticon</a> */}
                    <h2 className={expand == '+' ? null : 'selected-title'}>{title}</h2>
                </div>
                <button className='expandBtn' onClick={expandHandler}>{expand}</button>
            </div>
            <div className={expand == '+' ? 'hidden' : 'visible'}>
                <AddEducationInputs  education={education} setEducation={setEducation} formatDate={formatDate}/>
                <ul className='hobbies-ul'>
                    {education.map((edu, i) => <EditDeleteEducation keyNum={i} key={i} setEducation={setEducation} eduValue={edu} education={education} formatDate={formatDate}/>)}
                </ul>
            </div>
        </section>
    )
}