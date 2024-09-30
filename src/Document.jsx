import contactIcon from './contact-icon.png';
import emailIcon from './letter.png';
import linkedinIcon from './linkedin.png';
import locationIcon from './world.png';

export function Document({userName, occupation, phone, email, linkedIn, location, summary, exp, hobbies, profilePic, skills, languages, education}) {
    return (
        <div className='document-file'>
            <div className='document-main'>
                <section className="doc-header-info">
                    <h3 className='name'>{userName}</h3>
                    <h5 className="occupation">{occupation}</h5>
                    <div className='document-contact'>
                        <div className="document-icon-para">
                            <img src={contactIcon} alt="phone" width="25px" />
                            <p>{phone}</p>
                        </div>
                        <div className="document-icon-para">
                            <img src={emailIcon} alt="email" width='25px'/>
                            {/* <a href="https://www.flaticon.com/free-icons/gray" title="gray icons">Gray icons created by Delwar018 - Flaticon</a> */}
                            <p>{email}</p>
                        </div>
                        <div className="document-icon-para">
                            <img src={linkedinIcon} alt="linked-in" width='25px'/>
                            {/* <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Freepik - Flaticon</a> */}
                            <p>{linkedIn}</p>
                        </div>
                    </div>
                    <div className="document-icon-para">
                        <img src={locationIcon} alt="location" width='25px'/>
                        <p>{location}</p>
                    </div>
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
                                <ul>
                                    {item.respons.map((resp, j) => <li key={i + j}>{resp.value}</li>)}
                                </ul>
                            </li>
                            )

                        })}
                    </ul>
                    <li></li>
                    <li></li>
                </div>
                <h4>Education</h4>
                <ul className='document-school-list'>
                    {education.map((edu, k) => (
                        <li className='school-item' key={k}>
                            <div className="school-title-date-container">
                                <h5>{edu.title}</h5>
                                <p>{edu.dateStart} - {edu.dateEnd}</p>
                            </div>
                            <div className='school-name-location-container'>
                                <h6>{edu.schoolName}</h6>
                                <p>{edu.location}</p>
                            </div>
                        </li>)
                    )}
                </ul>
            </div>
            <div className='document-aside'>
                <div className="image-wrapper">
                    <img src={profilePic} alt="profile picture"  width='150px' height='150px' className='document-profile-pic'/>
                    
                </div>
                {/* <a href="https://www.flaticon.com/free-icons/profile" title="profile icons">Profile icons created by Freepik - Flaticon</a> */}
                <h4>Skills</h4>
                <ul className="hobbies-unordered-list">
                {skills.map((skill, i) => <li key={skill + i}>{skill}</li>)}
                {document.querySelector('.skills-input') == null ? null : document.querySelector('.skills-input').value = ''}
                </ul>
                <h4>Hobbies</h4>
                <ul className="hobbies-unordered-list">
                    {hobbies.map((hobby, i) => <li key={hobby + i}>{hobby}</li>)}
                    {document.querySelector('.hobbies-input') == null ? null : document.querySelector('.hobbies-input').value = ''}
                </ul>
                <h4>Languages</h4>
                <ul className="hobbies-unordered-list">
                {languages.map((language, i) => <li key={language + i}>{language}</li>)}
                {document.querySelector('.languages-input') == null ? null : document.querySelector('.languages-input').value = ''}
                </ul>
            </div>
        </div>
    )
}