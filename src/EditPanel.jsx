import { PanelSection } from './PanelSection.jsx'

export function EditPanel({userName, onChange, occupation}) {
    return (
        <aside className='edit-panel'>
            <h2>Edit your info!</h2>
            <PanelSection title='Personal Info' input={'name'} inputDefault={userName} occupation={occupation} onChange={onChange}/>
            {/* <PanelSection title='Work' />
            <PanelSection title='Education' />
            <PanelSection title='Skills' />
            <PanelSection title='Hobbies' />
            <PanelSection title='Languages' /> */}

        </aside>
    )
}