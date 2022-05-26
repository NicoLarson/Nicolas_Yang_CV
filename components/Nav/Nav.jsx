import styles from './Nav.module.css'
import Link from 'next/link'

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/hero">
                        <a>Hero</a>
                    </Link>
                </li>
                <li>
                    <Link href="/portfolio">
                        <a>Portfolio</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
