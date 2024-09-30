import saveIcon from './save.svg';

export function EditEducationForm() {
    return (
        <div>
            <div className='inputs-and-label'>
                <label htmlFor="edit-school-title">Edit School Title: </label>
                <input type="text" id='edit-school-title'/>
            </div>
            <div className='inputs-and-label'>
                <label htmlFor="edit-school-name">Edit School Name: </label>
                <input type="text" id='edit-school-name'/>
            </div>
            <div className='inputs-and-label'>
                <label htmlFor="edit-school-location">Edit School Location: </label>
                <input type="text" id='edit-school-location'/>
            </div>
            <div className='inputs-and-label'>
                <label htmlFor="edit-school-start-date">Edit School Start Date: </label>
                <input type="text" id='edit-school-start-date'/>
            </div>
            <div className='inputs-and-label'>
                <label htmlFor="edit-school-end-date">Edit School End Date: </label>
                <input type="text" id='edit-school-end-date'/>
            </div>
        </div>
    )
}