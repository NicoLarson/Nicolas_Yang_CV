import React from 'react';
import './SwitchMode.module.scss'

export default function SwitchMode() {
    return (
        <div className="SwitchMode container">
            <p onClick={
                () => {
                    if (document.body.classList.contains('dark-mode')) {
                        document.body.classList.remove('dark-mode')
                    } else {
                        document.body.classList.add('dark-mode')
                    }
                }
            }>Switch Mode</p>
        </div>
    )
}
