import style from './InfosList.module.css';
import Link from 'next/link';

export default function InfosList() {
    return (
        <div className={style.infosList}>
            <h1>Infos</h1>
            <ul>
                <li>
                    <Link href="#">
                        <a>Github</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Linkedin</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Instagram</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
