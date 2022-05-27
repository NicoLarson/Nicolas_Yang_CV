import styles from './Nav.module.css'
import Link from 'next/link'

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">
                        <a><span>1.</span> Accueil</a>
                    </Link>
                </li>
                <li>
                    <Link href="/skills">
                        <a><span>2.</span> Compétences</a>
                    </Link>
                </li>
                <li>
                    <Link href="/tools">
                        <a><span>3.</span> Outils</a>
                    </Link>
                </li>
                <li>
                    <Link href="/portfolio">
                        <a><span>4.</span> Portfolio</a>
                    </Link>
                </li>
                <li>
                    <Link href="/infos">
                        <a><span>5.</span> Infos</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a><span>6.</span> A propos</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
