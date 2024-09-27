import headerImg from './resume-icon.png'


export function Header({updateBackgroundImg}) {

 

    return (
        <header  className='page-header'>
            <img src={headerImg} alt="resume coming out of computer icon" width='50px'/>
            <h1>Build Your Resume!</h1>
            <div className="background-select-label-input">
                <label htmlFor="background-select">Select a background:</label>
                <select name="background-select" id="background-select" onChange={updateBackgroundImg}>
                    <option value="configurations-img">Configurations</option>
                    <option value="interlaced-img">Interlaced</option>
                    <option value="tile-img">Job Tile</option>
                    <option value="gray-img">Gray</option>
                </select>
            </div>
        </header>
        
    )
    // header attribution link for header icon
    //  |
    // \|/
    //  *
    // <a href="https://www.flaticon.com/free-icons/files-and-folders" title="files and folders icons">Files and folders icons created by khulqi Rosyid - Flaticon</a>
}