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

  const handleChange = (e) => {
    if(e.target.id == 'name') {
      setName(e.target.value);
    } else if (e.target.id == 'occupation') {
      setOccupation(e.target.value)
    }
    
  };

  return (
    <>
      <Header />
      <div className="panel-and-main">
        <EditPanel userName={name} onChange={handleChange} occupation={occupation}/>
        <MainContent userName={name} occupation={occupation}/>
      </div>
    </>
  );
}

export default App;
