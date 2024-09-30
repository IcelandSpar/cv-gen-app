
export function InputField({input, inputDefault, onChange, occupation, updateProfileImg}) {

    return (
        <div>
            <div className="inputs-and-label">
                <label htmlFor={input}>{input[0].toUpperCase() + input.slice(1)}: </label>
                <input type="text" defaultValue={inputDefault} onChange={onChange} id={'name'}/>
            </div>
            <div className="inputs-and-label">
                <label htmlFor="occupation">Occupation: </label>
                <input type="text" defaultValue={occupation} onChange={onChange} id={'occupation'}></input>
            </div>
            
            <div className="inputs-and-label">
                <label htmlFor="file">Change your image</label>
                
                <input type="file"  id='file' accept="image/png, image/jpeg" onChange={updateProfileImg}></input>
                
            </div>
        </div>
    )
}

export function ContactInfoInput({phone, onChange, email, linkedIn, location}) {
    return (
    <div>
        <div className='inputs-and-label'>
            <label htmlFor="phone">Phone Number: </label>
            <input type='num' id='phone' defaultValue={phone} onChange={onChange}/>
        </div>
        <div className="inputs-and-label">
            <label htmlFor="email">Email: </label>
            <input type="text" id='email' onChange={onChange} defaultValue={email}/>
        </div>
        <div className="inputs-and-label">
            <label htmlFor="linkedIn">LinkedIn: </label>
            <input type="text" id='linkedIn' defaultValue={linkedIn} onChange={onChange}/>
        </div>
        <div className="inputs-and-label">
            <label htmlFor="location">Location: </label>
            <input type="text" id='location' defaultValue={location} onChange={onChange}/>
        </div>
    </div>)
}

export function SummaryInput({summary, onChange}) {
    return (
        <div>
        <div className='inputs-and-label'>
            <label htmlFor="summary">Summary: </label>
            <textarea type='textarea' id='summary' defaultValue={summary} onChange={onChange} className='resize-input'/>
        </div>
    </div> 
    )
}

export function HobbiesInput({addHobbyHandle}) {
    
    return (
        <div>
        <div className='inputs-and-label'>
            <label htmlFor="hobbies">Hobby: </label>
            <input type='text' id='hobbies' className='hobbies-input'/>
            <button onClick={addHobbyHandle}>Add Hobby</button>
            
        </div>
        </div>
    )
}

export function AddInput({title, addBulletHandle}) {
    return (
        <div>
        <div className='inputs-and-label'>
            <label htmlFor={`${title.toLowerCase()}-input`}>{title}: </label>
            {title == 'Skills' ? <textarea type='text' id={`${title.toLowerCase()}-input`} className={`${title.toLowerCase()}-input`}/> : <input type='text' id={`${title.toLowerCase()}-input`} className={`${title.toLowerCase()}-input`}/>}
            
            <button onClick={addBulletHandle}>Add {title}</button>
            
        </div>
        </div>
    )
}

export function AddEducationInputs({education, setEducation, formatDate}) {

    const setNewEducation = () => {



    formatDate(document.querySelector('#school-date-start').value)

        let newEducation = {
            title: document.getElementById('education-title').value,
            schoolName: document.getElementById('school-name').value,
            dateStart: formatDate(document.getElementById('school-date-start').value),
            dateEnd: formatDate(document.getElementById('school-date-end').value),
            location: document.getElementById('school-location').value,
          }

          setEducation([...education, newEducation])
          document.getElementById('education-title').value = '';
          document.getElementById('school-name').value = '';
          document.getElementById('school-date-start').value = '';
          document.getElementById('school-date-end').value = '';
          document.getElementById('school-location').value = '';

    }

    return (
        <div>
            <div className='inputs-and-label'>
                <label htmlFor="education-title">Education Title: </label>
                <input type="text" id="education-title"/>
            </div>
            <div className='inputs-and-label'>
                <label htmlFor="school-name">School Name: </label>
                <input type="text" id="school-name"/>
            </div>
            <div className='inputs-and-label'>
                <label htmlFor="school-location">School Location: </label>
                <input type="text" id='school-location'/>
            </div>
            <div className='inputs-and-label'>
                <label htmlFor="school-date-start">Date Start: </label>
                <input type="date" id='school-date-start'/>
            </div>
            <div className='inputs-and-label'>
                <label htmlFor="school-date-end">Date End: </label>
                <input type="date" id='school-date-end'/>
                <button onClick={setNewEducation}>Add School</button>
            </div>
            
        </div>
    )
}