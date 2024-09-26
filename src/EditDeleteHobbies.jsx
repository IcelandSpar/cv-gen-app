
export function EditDeleteHobbies({keyNum, hobbyValue, setHobbies}) {
    return (
        <li key={keyNum} className='edit-delete-hobby-cont'>
            <p>{hobbyValue}</p>
            <div className="edit-delete-btns">
                <button>Edit</button>
                <button onClick={() => setHobbies(prev => prev.filter((currVal, index) => index !== keyNum))}>Delete</button>
            </div>
        </li>
    )
}