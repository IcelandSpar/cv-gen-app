
import { Document } from './Document.jsx'




export function MainContent({backgroundImg, userName, occupation, phone, email, linkedIn, location, summary, exp, hobbies, profilePic}) {



    return (
        <main className={`main ${backgroundImg}`}>
            <section className='document'>
                
                <Document userName={userName} occupation={occupation} phone={phone} email={email} linkedIn={linkedIn} location={location} summary={summary} exp={exp} hobbies={hobbies} profilePic={profilePic}/>
            </section>
        </main>
    )
}