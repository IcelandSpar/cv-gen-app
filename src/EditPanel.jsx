import { PanelSection, ContactSection, SummarySection, ExperienceSection, HobbySection, AddBulletPointPanel } from './PanelSection.jsx'

export function EditPanel({userName, onChange, occupation, phone, email, linkedIn, location, summary, expBtnHandle, addHobbyHandle, hobbies, setHobbies, updateProfileImg, profilePic, skills, setSkills, languages, setLanguages, addSkillHandle, addLanguageHandle}) {
    return (
        <aside className='edit-panel'>
            <h2>Edit your info!</h2>
            <PanelSection title='Personal Info' input={'name'} inputDefault={userName} occupation={occupation} onChange={onChange} updateProfileImg={updateProfileImg} profilePic={profilePic}/>
            <ContactSection title={'Contact Info'} phone={phone} onChange={onChange} email={email} linkedIn={linkedIn} location={location}/>
            <SummarySection title='Summary' summary={summary} onChange={onChange}/>
            <ExperienceSection title='Experience' expBtnHandle={expBtnHandle}/>
            <AddBulletPointPanel title='Skills' bullets={skills} setBullets={setSkills} addBulletHandle={addSkillHandle}/>
            <HobbySection title='Hobbies' addHobbyHandle={addHobbyHandle} hobbies={hobbies} setHobbies={setHobbies}/>

            <AddBulletPointPanel title='Languages' bullets={languages} setBullets={setLanguages} addBulletHandle={addLanguageHandle}/>
            {/* <AddBulletPointPanel title='Languages'/> */}
            {/* <PanelSection title='Work' />
            <PanelSection title='Education' />
            <PanelSection title='Skills' />
            <PanelSection title='Hobbies' />
            <PanelSection title='Languages' /> */}

        </aside>
    )
}