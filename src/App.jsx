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

  return (
    <>
      <Header />
      <div className="panel-and-main">
        <EditPanel userName={name} onChange={handleChange} occupation={occupation} phone={phone} email={email} linkedIn={linkedIn} location={location} summary={summary}/>
        <MainContent userName={name} occupation={occupation} phone={phone} email={email} linkedIn={linkedIn} location={location} summary={summary}/>
      </div>
    </>
  );
}

export default App;
