import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import TopBar from './components/TopBar/TopBar'
import BottomBar from './components/BottomBar/BottomBar'
import LangSelect from './components/LangSelect/LangSelect'
import SwitchMode from './components/SwitchMode/SwitchMode'
import MainInfo from './components/MainInfo/MainInfo'
import Logo from './components/Logo/Logo'

const App = () => {
  return (
    <div className="App">
      <header>
        <Logo />
        <TopBar text='Acceuil' />
        <SwitchMode />
      </header>
      <main>
        <NavBar />
        <MainInfo />
      </main>
      <footer>
        <LangSelect />
        <BottomBar />
      </footer>
    </div>
  );
}

export default App;
