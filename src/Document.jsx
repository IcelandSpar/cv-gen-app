
export function Document({userName, occupation, phone, email, linkedIn, location, summary, exp}) {
    return (
        <div className='document-file'>
            <div className='document-main'>
                <section className="doc-header-info">
                    <h3 className='name'>{userName}</h3>
                    <h5 className="occupation">{occupation}</h5>
                    <div className='document-contact'>
                        <p>{phone}</p>
                        <p>{email}</p>
                        <p>{linkedIn}</p>
                    </div>
                    <p>{location}</p>
                </section>
                <h4>Summary</h4>
                <p className="summary">{summary}</p>
                <h4>Experience</h4>
                <div>
                    <ul className="exp-list">{
                        exp.map((item, i) => {
                            return (
                            <li key={i}>
                                <div className="exp-title-date-container">
                                    <h5 className="exp-position">{item.position}</h5>
                                    <div>{item.dateStart} - {item.dateEnd}</div>
                                </div>
                                <h6 className='exp-company'>{item.company}</h6>

                            </li>
                            )

                        })}
                    </ul>
                    <li></li>
                    <li></li>
                </div>
                <h4>Education</h4>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
                <h4>Languages</h4>
            </div>
            <div className='document-aside'>
                <div>profileImg</div>
                <h4>Skills</h4>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h4>Hobbies</h4>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}