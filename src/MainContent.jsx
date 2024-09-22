import { Document } from './Document.jsx'


export function MainContent({userName, occupation}) {
    return (
        <main className='main'>
            <section className='document'>
                <Document userName={userName} occupation={occupation}/>
            </section>
        </main>
    )
}