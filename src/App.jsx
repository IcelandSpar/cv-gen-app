import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import { Header } from "./Header.jsx";
import { EditPanel } from "./EditPanel.jsx";
import { MainContent } from "./MainContent.jsx";

function App() {
  const [name, setName] = useState("John Doe");
  const [occupation, setOccupation] = useState("Front-End Developer");
  const [phone, setPhone] = useState('123-456-7891');
  const [email, setEmail] = useState('email@email.com');
  const [linkedIn, setLinkedIn] = useState('linkedin.com');
  const [location, setLocation] = useState("Location, USA");
  const [summary, setSummary] = useState('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur fuga dolorum reprehenderit et deleniti quia molestias alias aliquid omnis distinctio. Impedit repellendus obcaecati temporibus dolore. Et reprehenderit sit expedita dolores.')

  const [hobbies, setHobbies] = useState([]);

  const [exp, setExp] = useState([]);



  

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



  return (
    <>
      <Header />
      <div className="panel-and-main">
        <EditPanel userName={name} onChange={handleChange} occupation={occupation} phone={phone} email={email} linkedIn={linkedIn} location={location} summary={summary} expBtnHandle={expBtnHandle} addHobbyHandle={addHobbyHandle} hobbies={hobbies} setHobbies={setHobbies}/>
        <MainContent userName={name} occupation={occupation} phone={phone} email={email} linkedIn={linkedIn} location={location} summary={summary} exp={exp} hobbies={hobbies}/>
      </div>
    </>
  );
}

export default App;
