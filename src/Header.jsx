import headerImg from './resume-icon.png'

export function Header() {
    return (
        <header  className='page-header'>
            <img src={headerImg} alt="resume coming out of computer icon" width='50px'/>
            <h1>Build Your Resume!</h1>
            <button className='header-btn'>Download</button>
        </header>
    )
    // header attribution link for header icon
    //  |
    // \|/
    //  *
    // <a href="https://www.flaticon.com/free-icons/files-and-folders" title="files and folders icons">Files and folders icons created by khulqi Rosyid - Flaticon</a>
}