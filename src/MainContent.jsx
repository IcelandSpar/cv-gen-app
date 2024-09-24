import { Document } from './Document.jsx'


export function MainContent({userName, occupation, phone, email, linkedIn, location, summary, exp}) {
    return (
        <main className='main'>
            <section className='document'>
                <Document userName={userName} occupation={occupation} phone={phone} email={email} linkedIn={linkedIn} location={location} summary={summary} exp={exp}/>
            </section>
        </main>
    )
}