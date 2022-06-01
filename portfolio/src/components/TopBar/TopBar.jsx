import style from './TopBar.module.css';
export default function TopBar({text}) {
    return (
        <div className={style.topBar}>
        <p>{text}</p>
        </div>
    )
}
