import styles from './NavBar.module.css'

export default function Nav() {

    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <button>Link</button>
                </li>
                <li>
                    <button>Link</button>
                </li>
                <li>
                    <button>Link</button>
                </li>
                <li>
                    <button>Link</button>
                </li>
            </ul>
        </nav>
    )
}
