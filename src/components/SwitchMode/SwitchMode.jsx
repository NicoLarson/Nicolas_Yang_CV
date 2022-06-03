import React from 'react';
import './SwitchMode.module.scss'

export default function SwitchMode() {
    let count = 0
    return (
        <div className="SwitchMode container">
            <p onClick={
                () => {
                    if (count === 0) {
                        document.body.classList.remove('gruvbox-dark')
                        document.querySelector('.Logo').classList.remove('gruvbox-dark')
                        document.querySelector('.TopBar').classList.remove('gruvbox-dark')
                        document.querySelector('.SwitchMode').classList.remove('gruvbox-dark')
                        document.querySelector('.NavBar').classList.remove('gruvbox-dark')
                        document.querySelector('main').classList.remove('gruvbox-dark')
                        document.querySelector('.LangSelect').classList.remove('gruvbox-dark')
                        document.querySelector('.BottomBar').classList.remove('gruvbox-dark')
                        document.body.classList.add('gb-light')
                        document.querySelector('.Logo').classList.add('gb-light')
                        document.querySelector('.TopBar').classList.add('gb-light')
                        document.querySelector('.SwitchMode').classList.add('gb-light')
                        document.querySelector('.NavBar').classList.add('gb-light')
                        document.querySelector('main').classList.add('gb-light')
                        document.querySelector('.LangSelect').classList.add('gb-light')
                        document.querySelector('.BottomBar').classList.add('gb-light')
                        count = 1
                    } else if (count === 1) {
                        document.body.classList.remove('gb-light')
                        document.querySelector('.Logo').classList.remove('gb-light')
                        document.querySelector('.TopBar').classList.remove('gb-light')
                        document.querySelector('.SwitchMode').classList.remove('gb-light')
                        document.querySelector('.NavBar').classList.remove('gb-light')
                        document.querySelector('main').classList.remove('gb-light')
                        document.querySelector('.LangSelect').classList.remove('gb-light')
                        document.querySelector('.BottomBar').classList.remove('gb-light')
                        document.body.classList.add('gruvbox-light')
                        document.querySelector('.Logo').classList.add('gruvbox-light')
                        document.querySelector('.TopBar').classList.add('gruvbox-light')
                        document.querySelector('.SwitchMode').classList.add('gruvbox-light')
                        document.querySelector('.NavBar').classList.add('gruvbox-light')
                        document.querySelector('main').classList.add('gruvbox-light')
                        document.querySelector('.LangSelect').classList.add('gruvbox-light')
                        document.querySelector('.BottomBar').classList.add('gruvbox-light')
                        count = 2
                    } else if (count === 2) {
                        document.body.classList.remove('gruvbox-light')
                        document.querySelector('.Logo').classList.remove('gruvbox-light')
                        document.querySelector('.TopBar').classList.remove('gruvbox-light')
                        document.querySelector('.SwitchMode').classList.remove('gruvbox-light')
                        document.querySelector('.NavBar').classList.remove('gruvbox-light')
                        document.querySelector('main').classList.remove('gruvbox-light')
                        document.querySelector('.LangSelect').classList.remove('gruvbox-light')
                        document.querySelector('.BottomBar').classList.remove('gruvbox-light')
                        document.body.classList.add('gruvbox-dark')
                        document.querySelector('.Logo').classList.add('gruvbox-dark')
                        document.querySelector('.TopBar').classList.add('gruvbox-dark')
                        document.querySelector('.SwitchMode').classList.add('gruvbox-dark')
                        document.querySelector('.NavBar').classList.add('gruvbox-dark')
                        document.querySelector('main').classList.add('gruvbox-dark')
                        document.querySelector('.LangSelect').classList.add('gruvbox-dark')
                        document.querySelector('.BottomBar').classList.add('gruvbox-dark')
                        count = 3
                    } else if (count === 3) {
                        document.body.classList.remove('gruvbox-dark')
                        document.querySelector('.Logo').classList.remove('gruvbox-dark')
                        document.querySelector('.TopBar').classList.remove('gruvbox-dark')
                        document.querySelector('.SwitchMode').classList.remove('gruvbox-dark')
                        document.querySelector('.NavBar').classList.remove('gruvbox-dark')
                        document.querySelector('main').classList.remove('gruvbox-dark')
                        document.querySelector('.LangSelect').classList.remove('gruvbox-dark')
                        document.querySelector('.BottomBar').classList.remove('gruvbox-dark')
                        count = 0
                    }
                }
            }>Switch Mode</p>
        </div >
    )
}
