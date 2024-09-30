import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import { Header } from "./Header.jsx";
import { EditPanel } from "./EditPanel.jsx";
import { MainContent } from "./MainContent.jsx";
import profile from './profile.png'

function App() {
  const [backgroundImg, setBackgroundImg] = useState('./floating-cogs.svg');
  const [name, setName] = useState("John Doe");
  const [occupation, setOccupation] = useState("Front-End Developer");
  const [profilePic, setProfilePic] = useState(profile)
  const [phone, setPhone] = useState('123-456-7891');
  const [email, setEmail] = useState('email@email.com');
  const [linkedIn, setLinkedIn] = useState('linkedin.com');
  const [location, setLocation] = useState("Location, USA");
  const [summary, setSummary] = useState('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur fuga dolorum reprehenderit et deleniti quia molestias alias aliquid omnis distinctio. Impedit repellendus obcaecati temporibus dolore. Et reprehenderit sit expedita dolores.')

  const [hobbies, setHobbies] = useState(['Your hobbies go here!']);
  const [skills, setSkills] = useState(['Your Skills go here!']);
  const [languages, setLanguages] = useState(['Your Languages go here!']);

  const [exp, setExp] = useState([]);
  const [education, setEducation] = useState([{
    title: 'Bachelor of Science in Computer Science',
    schoolName: 'University of Washington',
    dateStart: '09/01/2019',
    dateEnd: '06/01/2023',
    location: 'Seattle, WA'
  }]);

  const updateBackgroundImg = (e) => {
    setBackgroundImg(e.target.value)
    console.log(document.querySelector('.document-profile-pic').value)
    
  }


  const updateProfileImg = (e) => {
    
   setProfilePic(URL.createObjectURL(e.target.files[0]))
    document.querySelector('.document-profile-pic').classList.add('toggle-animation');
    document.querySelector('.edit-panel-img').classList.add('toggle-animation');
    setTimeout( () => {
      document.querySelector('.document-profile-pic').classList.remove('toggle-animation')
      document.querySelector('.edit-panel-img').classList.remove('toggle-animation')
    }, 5000)
  }

  

  const handleChange = (e) => {
    if(e.target.id == 'name') {
      setName(e.target.value);
    } else if (e.target.id == 'occupation') {
      setOccupation(e.target.value)
    } else if (e.target.id == 'phone') {
      setPhone(e.target.value)
    } else if (e.target.id == 'email') {
      setEmail(e.target.value)
    } else if (e.target.id == 'linkedIn') {
      setLinkedIn(e.target.value)
    } else if (e.target.id == 'location') {
      setLocation(e.target.value)
    } else if (e.target.id == 'summary') {
      setSummary(e.target.value)
    }
    
  };

  const expBtnHandle = (e) => {
    e.preventDefault()
    

    
    setExp([...exp, {
      
      position: document.querySelector('.position-input').value,
      company: document.querySelector('.company-input').value,
      dateStart: document.querySelector('.date-start-input').value,
      dateEnd: document.querySelector('.date-end-input').value,
      respons: Array.from(document.querySelectorAll('.respons-input'))
    }])
    
    
}

const addHobbyHandle = (e) => {
  const hobbyInput = document.getElementById('hobbies');
  
  e.preventDefault();
  setHobbies(prev => [...prev, hobbyInput.value]);
  
  hobbyInput.focus();
  
}

const addSkillHandle = (e) => {
  const skillInput = document.getElementById('skills-input');
  setSkills(prev => [...prev, skillInput.value]);
  skillInput.focus();

}

const addLanguageHandle = (e) => {
  const languagesInput = document.getElementById('languages-input');
  setLanguages(prev => [...prev, languagesInput.value]);
  languagesInput.focus();
}

  return (
    <>
      <Header updateBackgroundImg={updateBackgroundImg}/>
      <div className="panel-and-main">
        <EditPanel profilePic={profilePic} userName={name} onChange={handleChange} occupation={occupation} phone={phone} email={email} linkedIn={linkedIn} location={location} summary={summary} expBtnHandle={expBtnHandle} addHobbyHandle={addHobbyHandle} hobbies={hobbies} setHobbies={setHobbies} updateProfileImg={updateProfileImg} skills={skills} setSkills={setSkills} languages={languages} setLanguages={setLanguages} addSkillHandle={addSkillHandle} addLanguageHandle={addLanguageHandle} education={education} setEducation={setEducation}/>
        <MainContent backgroundImg={backgroundImg} userName={name} occupation={occupation} phone={phone} email={email} linkedIn={linkedIn} location={location} summary={summary} exp={exp} hobbies={hobbies} profilePic={profilePic} skills={skills} languages={languages} education={education}/>
      </div>
    </>
  );
}

export default App;
