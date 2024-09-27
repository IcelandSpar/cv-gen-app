
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