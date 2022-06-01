import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import TopBar from './components/TopBar/TopBar'
import BottomBar from './components/BottomBar/BottomBar'
import LangSelect from './components/LangSelect/LangSelect'
import SwitchMode from './components/SwitchMode/SwitchMode'
import Home from './components/MainPart/Home/Home'
import Logo from './components/Logo/Logo'

const App = () => {
  const [mainPart, setMainPart] = useState(<Home />)
  const [topText, setTopText] = useState("Bienvenue")

  return (
    <div className="App">
      <header>
        <Logo />
        <TopBar text={topText} />
        <SwitchMode />
      </header>
      <main>
        <NavBar setTopText={setTopText} setMainPart={setMainPart} />
        {mainPart}
      </main>
      <footer>
        <LangSelect />
        <BottomBar />
      </footer>
    </div>
  );
}

export default App;
