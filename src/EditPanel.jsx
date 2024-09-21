import { PanelSection } from './PanelSection.jsx'

export function EditPanel() {
    return (
        <aside className='edit-panel'>
            <h2>Edit your info!</h2>
            <PanelSection title='Personal Info' inputs={{name: 'Name', jobTitle: 'Job Title'}}/>
            <PanelSection title='Work' inputs={{name: 'Name', jobTitle: 'Job Title'}}/>
            <PanelSection title='Education' inputs={{name: 'Name', jobTitle: 'Job Title'}}/>
            <PanelSection title='Skills' inputs={{name: 'Name', jobTitle: 'Job Title'}}/>
            <PanelSection title='Hobbies' inputs={{name: 'Name', jobTitle: 'Job Title'}}/>
            <PanelSection title='Languages' inputs={{name: 'Name', jobTitle: 'Job Title'}}/>

        </aside>
    )
}