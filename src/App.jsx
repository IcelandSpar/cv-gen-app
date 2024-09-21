import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './index.css';
import { Header } from './Header.jsx';
import { EditPanel } from './EditPanel.jsx';
import { MainContent } from './MainContent.jsx';

function App() {


  return (
    <>
      <Header/>
      <div className='panel-and-main'>
        <EditPanel/>
        <MainContent/>
      </div>
    </>
  )
}

export default App
