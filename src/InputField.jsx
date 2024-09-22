
export function InputField({input, inputDefault, onChange, occupation}) {

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
        </div>
    )
}