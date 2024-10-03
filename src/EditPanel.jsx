import { PanelSection, ContactSection, SummarySection, ExperienceSection, HobbySection, AddBulletPointPanel, EducationSection } from './PanelSection.jsx';
import languageIcon from './language.png';
import skillsIcon from './skills.png';
import graduateIcon from './graduate.png';

export function EditPanel({userName, onChange, occupation, phone, email, linkedIn, location, summary, addHobbyHandle, hobbies, setHobbies, updateProfileImg, profilePic, skills, setSkills, languages, setLanguages, addSkillHandle, addLanguageHandle, education, setEducation, setExp, exp}) {
    return (
        <aside className='edit-panel'>
            <h2>Edit your info!</h2>
            <PanelSection title='Personal Info' input={'name'} inputDefault={userName} occupation={occupation} onChange={onChange} updateProfileImg={updateProfileImg} profilePic={profilePic}/>
            <ContactSection title={'Contact Info'} phone={phone} onChange={onChange} email={email} linkedIn={linkedIn} location={location}/>
            <SummarySection title='Summary' summary={summary} onChange={onChange}/>
            <ExperienceSection title='Experience' setExp={setExp} exp={exp}/>
            <EducationSection title='Education' srcIcon={graduateIcon} education={education} setEducation={setEducation}/>
            {/* { Graduate Icon } */}
            {/* {<a href="https://www.flaticon.com/free-icons/hat" title="hat icons">Hat icons created by Freepik - Flaticon</a>} */}
            <AddBulletPointPanel title='Skills' bullets={skills} setBullets={setSkills} addBulletHandle={addSkillHandle} iconSrc={skillsIcon}/>
            <HobbySection title='Hobbies' addHobbyHandle={addHobbyHandle} hobbies={hobbies} setHobbies={setHobbies}/>

            <AddBulletPointPanel title='Languages' bullets={languages} setBullets={setLanguages} addBulletHandle={addLanguageHandle} iconSrc={languageIcon}/>
            {/* <AddBulletPointPanel title='Languages'/> */}
            {/* <PanelSection title='Work' />
            <PanelSection title='Education' />
            <PanelSection title='Skills' />
            <PanelSection title='Hobbies' />
            <PanelSection title='Languages' /> */}

        </aside>
    )
}